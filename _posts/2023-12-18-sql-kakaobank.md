---
layout: post
title: SQL로 간소한 카카오뱅크 데이터베이스 만들어보기
description:
date: 2023-12-18 01:12:00 +09:00
tags: DB
categories: Study
giscus_comments: true
related_posts: false

featured: false  # 상단에 고정할건지
pretty_table: true  # 활성화해줘야 table 선이 보임

toc:
  beginning: false  # 맨 앞에 목차
  sidebar: left  # 목차가 사이드바 왼쪽에 붙어있음
---


#주의 - 따라서 만들어보는게 목적이라 섬세하게 만들지 않았습니다.


### 시작은 ERD ?



- **`E`ntity `R`elationship `D`iagram** 의 약자로, 테이블간의 관계를 설명해주는 다이어그램이다.

- `관계형 DB`(데이터 베이스)에서 주로 사용되며, 데이터베이스를 **시각화**하기 위해 사용한다.

- DB의 구조를 **한눈에 파악**할 수 있다는 장점이 있다.

- DB 외에도 소프트웨어 기획 단계에서 시스템 요소간의 관계를 식별하는데 사용한다.


하지만 우리는 지금 ERD를 잘짜는게 목적이 아니라 

SQL로 DB를 만들어보기 위해 사용한 것이므로 자세하게 보고싶다면 다른 분의 블로그를 참고하자.

[ERD란? kjhxxxx님의 블로그](https://velog.io/@kjhxxxx/DataBase-ERD%EB%9E%80){:target="_blank"}



---

### ERD Cloud를 통해 ERD 만들기



아까 말했다시피 우리의 목적은 **SQL**을 이용한 **DB만들기** 이므로 ERD 속 관계는 대충 만들어보았다.

자료형, Default, NOT NULL 등은 깊게 생각하지 않고 일단 만들었다.

SQL 공부인데 ERD의 기호들까지 하나하나 따지기엔...

아래 다이어그램을 만든 사이트 링크다.  [Hoon's Kakao bank ERDCloud](https://www.erdcloud.com/d/hPcHuBcKM6CLXNhqn){:target="_blank"}

이 사이트에서 SQL파일을 한번에 `Export`할 수 있지만, 대충 만들었기 때문에 Error가 오백개 이상 발생할 수 도 있어서, 

하나하나 SQL 로 만들어보는게 차라리 맘 편할 수 있다.

<iframe width="100%" height="600" src="https://www.erdcloud.com/p/hPcHuBcKM6CLXNhqn" frameborder="0" allowfullscreen></iframe>

축소를 최대로 줄여보면 어마어마해보이지만... 실제 카카오뱅크에서는 이거의 10배도 넘을것 같다.

실제 회사에서는 ERD만 3주 넘게도 만든다고 한다.



---

### SQL 하기 전 알아두면 좋은 것



SQL은 파이썬과 같은 언어와 다르게 하나의 명령을 실행할 수 있다.

나는 `MariaDB` + `DBeaver` 프로그램을 사용했다.

마우스를 그 명령 어딘가에 클릭 한 후 `Ctrl` + `Enter`를 누르면 그 명령이 실행된다.

그리고 가장 중요한건... 바로바로 창마다 **연동이 안되기 때문**에 클릭 후 데이터창에  `F5` 새로고침을 눌러줘야한다...



아래에서 사용한 SQL 스크립트는 여기서 다운받을 수 있다.

[Dropbox 링크](https://www.dropbox.com/scl/fi/u3xng71k34byh81h1sg0l/Kakao-bank-hoon.sql?rlkey=fwfdng06udmdbjw65cg65di2t&dl=0){:target="_blank"}

악성코드 그런거 넣을 능력 안된다. 다운받아도 무방하다.







---

### SQL 데이터베이스 생성 및 사용



#### ❗ 데이터베이스 생성

```sql
create database erd_kakaobank;
```

#### ❗ 생성 확인 

- localhost에 저장된 데이터베이스들이 나온다. (이전에 만든것도 나온다.)

```sql
show databases;
```

#### ❗ 데이터베이스 사용 

- 어떤 데이터베이스를 사용할건지 선택해준다.

```sql
use erd_kakaobank;
```

---


### 테이블들 생성



ERD 만든 것을 토대로 모든 테이블을 넣기엔 너무 오랜 시간이 걸릴 것 같아 **3개의 테이블만** 진행했다!!


#### ❗ 유저 테이블 생성

```sql
create table k_user (
	user_idx int primary key auto_increment not null comment '유저 PK 값',
	user_id varchar(30) default '' not null comment '유저 ID',
	user_pass varchar(50) default '' not null comment '유저 PW',
	user_real_name varchar(50) default '' not null comment '유저 실명',
	user_nick varchar(50) default '' comment '유저 닉네임',
	user_age int default 0 comment '유저 나이',
	user_phone varchar(255) default '' comment '유저 핸드폰번호',
	user_mail varchar(255) default '' comment '유저 이메일',
	user_gender int comment '0.알수없음 / 1.남자 / 2.여자 / 3.특수성별',
	user_ip varchar(150) default '' comment '유저가 접속한 ip 주소',
	user_status int default 0 comment '0: 차단 / 1: 정상 / 2: 탈퇴 / 3. 휴먼',
	user_reg_dt datetime default now() comment '생성 날짜',
	user_update_dt datetime default now() comment '변동 날짜'
);
```


#### ❗ 유저 신용점수 테이블 생성

한사람당 하나의 신용점수이므로 `unique`를 걸어둔다.

```sql
create table user_cs (
	user_idx int unique default 0 not null comment '유저 PK 값',
	user_KCB_cs int default 0 comment '',
	user_NICE_cs int default 0 comment ''
);
```


#### ❗ 유저 입출금 통장 테이블 생성

계좌는 같은 사람이 여러개 쓸 수 있기 때문에 `user_idx`에 `unique`를 걸지 않는다.

```sql
create table k_bank (
	bank_account_num varchar(30) primary key default '' not null comment '유저 계좌번호',
	user_idx int default 0 not null comment '유저 PK 값',
	bank_status int default 0 not null comment '계좌 상태 0: 정상 / 1: 일시정지 / 2. 영구정지',
	bank_once_send bigint default 0 not null comment '1회송금한도',
	bank_day_send bigint default 0 not null comment '하루송금한도',
	bank_today_send bigint default 0 comment '오늘 송금 총 금액',
	bank_money bigint default 0 not null comment '현재 금액',
	bank_or_allow int default 0 not null comment '해외 송금 0: 허용 1: 미허용',
	bank_pass varchar(4) default 0000 not null comment '계좌 비밀번호',
	bank_pass_not int default 0 not null comment '5회시 계좌 일시 정지',
	bank_reg_dt datetime default now() comment '생성 날짜',
	bank_update_dt datetime default now() comment '변동 날짜'
);
```

---

### DCL, DDL, DML 이란?



- **`DCL`** : 데이터베이스에 대한 접근 권한 등 사용자의 권한을 조작하는 언어

- **`DDL`** : 데이터베이스, 테이블 조작 언어

- **`DML`** : 데이터 조작 언어

  **C** : create / insert  
  **R** : read / select  
  **U** : update / update  
  **D** : delete / delete  



  지금까지 테이블을 조작하는 `DDL`을 했다.

  이제 가장 중요한 `DML`의 `CRUD`를 할 차례다!

---

### insert / 데이터 넣기

##### ❗ 컬럼 정보 열기

​	 이걸 해놓고 insert문을 만들면 편하다.

```sql
show columns from k_user;
```

#### ❗ k_user (유저 정보) insert

​	유저들의 정보를 k_user 컬럼에 넣어준다.

​	내 지인들 중 동명이인들이 있던거 같은데 전혀 생각하지 않고 만들었다. 우연일 뿐.

```sql
insert into k_user (
	user_id,
	user_pass,
	user_real_name,
	user_nick,
	user_age,
	user_phone,
	user_mail,
	user_gender,
	user_ip,
	user_status
) values
	('hoonpx', 'a12345', '박정훈', '컴공쓰러진다', 23, '01045454545','test1@naver.com', 1, '127.0.0.1', 1),
	('mechanical', 'a12345', '김민종', '10조귀요미', 23, '01045234545','test2@naver.com', 1, '127.0.0.1', 1),
	('hotboy', 'a12345', '강홍준', '티라노조아', 23, '01045453455','test3@naver.com', 1, '127.0.0.1', 1),
	('jordan123', 'a12345', '임준호', '다음조던은뭐살까', 23, '01044574545','test4@naver.com', 1, '127.0.0.1', 2),
	('unipianist', 'a12345', '황가현', '피아니스트', 23, '01045345545','test5@naver.com', 2, '127.0.0.1', 1),
	('daehakwon1', 'a12345', '유희진', '뮤지컬볼사람', 24, '01045467945','test6@naver.com', 2, '127.0.0.1', 1),
	('goodbyeuni', 'a12345', '최유선', '유도니', 23, '01012654545','test7@naver.com', 2, '127.0.0.1', 1),
	('thief', 'a12345', '장인준', '도둑놈', 23, '01045412685','test8@naver.com', 1, '127.0.0.1', 3),
	('military123', 'a12345', '조승민', '나만군대감?', 23, '01045424245','test9@naver.com', 3, '127.0.0.1', 1),
	('billionaire', 'a12345', '노승환', 'A+왜못맞음?', 23, '01090554545','test10@naver.com', 1, '127.0.0.1', 1),
	('unist5th', 'a12345', '정성윤', '유니석박사', 23, '01044634545','test11@naver.com', 1, '127.0.0.1', 3),
	('pianist123', 'a12345', '김혜나', '김개나', 21, '01043454545','test12@naver.com', 2, '127.0.0.1', 1),
	('surisuri', 'a12345', '김수린', '나이거꾸로입력함', 72, '01045496945','test13@naver.com', 2, '127.0.0.1', 3),
	('ridebike12', 'a12345', '김수용', '아저씨아님', 40, '01044634545','test11@naver.com', 1, '127.0.0.1', 3);
```

이렇게 정상적으로 들어갔는지 확인할 수 있다. (옆에 user_update_dt도 있는데 너무 길어서 잘랐다.)

{% include figure.liquid loading="eager" path="files/2000-images/image9.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

#### ❗ user_cs (유저 신용점수) insert

​	유저들의 신용점수를 user_cs 컬럼에 넣어준다.

```sql
show columns from user_cs;

insert into user_cs  (
	user_idx,
	user_KCB_cs,
	user_NICE_cs
) values
	(1,999,999),
	(2,400,500),
	(3,200,300),
	(4,600,300),
	(5,700,750),
	(6,900,950),
	(7,650,700),
	(8,700,750),
	(9,700,750),
	(10,999,999),
	(11,100,200),
	(12,600,300),
	(13,960,990),
	(14,100,200);
```

{% include figure.liquid loading="eager" path="files/2000-images/image10.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

#### ❗ k_bank (카카오뱅크 계좌) insert

​	카카오뱅크 계좌들의 정보를 k_bank에 넣어준다. 

​	이때 한사람(하나의 user_idx)이 여러개의 계좌를 가지고 있을 수 있다.

```sql
show columns from k_bank;

insert into k_bank (
	bank_account_num,
	user_idx,
	bank_status,
	bank_once_send,
	bank_day_send,
	bank_money,
	bank_or_allow,
	bank_pass,
	bank_pass_not
) values
	('3333-10-171-6701', 1, 0, 2000000, 10000000, 2000, 1, '0000', 0),
	('3333-10-171-2341', 1, 0, 2000000, 10000000, 11000000, 1, '0000', 0),
	('3333-10-171-1236', 2, 0, 2000000, 10000000, 21000000, 1, '0000', 0),
	('3333-10-234-4563', 3, 0, 2000000, 10000000, 15000000, 1, '0000', 1),
	('3333-10-253-6701', 4, 0, 2000000, 10000000, 17000000, 0, '0000', 1),
	('3333-23-171-4552', 5, 0, 2000000, 10000000, 145000000, 1, '0000', 3),
	('3333-23-171-4474', 6, 0, 2000000, 10000000, 212000, 1, '0000', 0),
	('3333-10-234-4535', 6, 0, 2000000, 10000000, 132112000, 1, '0000', 1),
	('3333-56-171-1243', 7, 0, 2000000, 10000000, 2000, 1, '0000', 0),
	('3333-10-346-6701', 8, 0, 2000000, 10000000, 50, 1, '0000', 1),
	('3333-10-285-3452', 9, 0, 2000000, 10000000, 1231200, 1, '0000', 0),
	('3333-10-171-2344', 10, 0, 100000000, 5000000000, 1000000000000, 0, '0000', 0),
	('3333-10-235-2341', 11, 0, 5000, 50000, 500, 0, '0000', 0),
	('3333-10-768-6701', 12, 0, 2000000, 10000000, 7050000, 1, '0000', 1),
	('3333-10-253-4567', 12, 0, 2000000, 10000000, 120000, 1, '0000', 0),
	('3333-23-900-2345', 13, 0, 2000000, 10000000, 2006750, 1, '0000', 2),
	('3333-10-876-6785', 13, 0, 50000000, 2000000000, 2200000000, 1, '0000', 3),
	('3333-40-456-4565', 14, 0, 2000000, 10000000, 1230, 1, '0000', 0);
```

{% include figure.liquid loading="eager" path="files/2000-images/image11.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

### Select 문으로 정보 검색



이제 **CRUD** 중에 **Create(insert)**를 끝냈으니, **Read(select)**를 해볼 차례다.

**Select**문이 아마 **DB**의 **90%**를 차지한다고 해도 과언이 아니다.

#### ❗ 20대가 아닌 사람 검색

```sql
select 
	user_idx ,
	user_real_name ,
	user_nick ,
	user_age 
from 
	k_user ku 
where 
	user_age < 20 or user_age >= 30;
```

{% include figure.liquid loading="eager" path="files/2000-images/image12.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

**김수린**씨와 김수용씨가 20대가 아닌것으로 파악되었다.


#### ❗ 회원 성별별 인원수 검색

```sql
select
	user_gender as '1: 남자 / 2: 여자 / 3: 특수성별',
	count (user_gender) as count
from
	k_user ku 
group by
	user_gender;
```

{% include figure.liquid loading="eager" path="files/2000-images/image13.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

**남자 8명**, **여자 5명**, **특수성별**(조XX씨) **1명**이 나왔다.


#### ❗ 유저 이름, 나이, 신용등급, 계좌번호, 카카오뱅크 잔액을 검색

​	(유저 idx로 정렬 후 같은 idx중에서는 잔액 내림차순으로 정렬)

```sql
select
	ku.user_real_name '이름',
	ku.user_age '나이',
	uc.user_KCB_cs 'KCB 신용점수',
	uc.user_NICE_cs 'NICE 신용점수',
	kb.bank_account_num '계좌번호',
	kb.bank_money '통장 잔액'
from
	k_user ku
inner join 
	user_cs uc 
	on ku.user_idx = uc.user_idx 
inner join
	k_bank kb 
	on ku.user_idx = kb.user_idx 
order by
	ku.user_idx, kb.bank_money desc;
```

{% include figure.liquid loading="eager" path="files/2000-images/image14.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

### Update 문으로 정보 업데이트



이제 **CRUD** 중에 **Read(select)**를 끝냈으니, **Update**를 해볼 차례다.

**Update**와 **Delete**는 항상 조심해야한다. `in`을 사용해 제한을 걸어줘야 큰 실수를 방지할 수 있다.


#### ❗ 모든 휴면계정을 정상 상태로 업데이트 하기


1. ##### 휴면계정을 검색해준다.

   ```sql
   select user_idx , user_real_name  from k_user ku where user_status =3;
   ```

   {% include figure.liquid loading="eager" path="files/2000-images/image15.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

 

2. ##### 위 검색에서 나온 idx만 수정되도록 제한을 해주고 업데이트 해준다. (실수 방지)

   ```sql
   update k_user set user_status = 1 where user_idx in (8, 11, 13, 14) and user_status =3;
   ```
   
   {% include figure.liquid loading="eager" path="files/2000-images/image16.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

   Updated Rows : 4 이므로 4개의 정보가 업데이트 된 것이다.

 

3. ##### 업데이트가 잘 되었는지 확인한다.

   ```sql
   select
   	user_idx ,user_real_name ,user_status 
   from
   	k_user ku 
   where 
   	user_idx in (8, 11, 13, 14);
   ```

   {% include figure.liquid loading="eager" path="files/2000-images/image17.webp" class="img-fluid rounded z-depth-1" zoomable=true %}




---

### Delete 문



Delete는 실제로 거의 **사용하지 않는다**... Delete 작업은 너무 **위험**하다. 

차라리 탈퇴계정에 대한 표시를 하는 컬럼을 만들어 표시해놓는 경우가 대부분이다.

ex) 0: 정상 1: 탈퇴

Update를 이용해 이용상태 컬럼을 바꿔주자.


---

### 마무리



DB 관리자가 될것도 아니고 취직을 바로 할것도 아니지만, 이것저것  **찍먹**해보고자 sql언어를 통한 DB를 공부해봤다.

공부한 것을 바탕으로 총정리를 이 글을 통해서 해봤다.

정말 찍먹 수준이지만 꼭 python, java, c++과 같은 언어와는 완전 다른 느낌의 언어를 다뤄보니 재미있었다. 



