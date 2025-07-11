---
layout: post
title: "[백준] 💎 다이아몬드 달성 및 Tip"
description:
date: 2024-05-09 01:50:00 +09:00
tags: PS
categories: Talk
giscus_comments: true
related_posts: false

featured: false  # 상단에 고정할건지
pretty_table: true  # 활성화해줘야 table 선이 보임

toc:
  beginning: false  # 맨 앞에 목차
  sidebar: left  # 목차가 사이드바 왼쪽에 붙어있음
---


---

### 💡 다이아 달성



올해 목표 중 하나였던 백준 solved.ac 다이아 티어를 달성했다...

[내 Solved.ac](https://solved.ac/profile/hoonably)

{% include figure.liquid loading="eager" path="https://github.com/user-attachments/assets/fdb7142a-d0d3-4a8d-87d6-b292a543039e" class="img-fluid rounded z-depth-1" zoomable=true %}

상위 100문제를 골드 없이 채우고 나니 마음이 편안해졌다...

근데 왜이리 대부분의 프로필 배경은 그림체가 덕후 같은지... 맘에드는 배경이 없다.

---

### 💡 태그 분포

{% include figure.liquid loading="eager" path="https://github.com/user-attachments/assets/7b390fbb-b569-466b-8b46-6055a92e4cc0" class="img-fluid rounded z-depth-1" zoomable=true %}

사실 다이아 티어를 가는 방법 중 가장 '빠른' 방법은 수학을 활용해서 **어려운 수학문제**를 푸는게 아닐까 한다.

어려운 수학 지식이 들어가면 구현이 빡세지 않고 코드가 짧아도 티어가 높은 경우가 많기 때문이다.

물론 그게 쉽다는건 아니다.



그냥 코딩 실력을 키우고 싶었기 때문에 수학 문제는 풀지 않고 주로 단계별 문제를 풀면서,

각 알고리즘을 눌러보고 추가로 푼 사람이 많은 문제들을 풀어보았다.


지금 그래프를 보면 그리디가 좀 부족하다. 대회 출전을 위해서는 그리디 알고리즘을 파야할거같다.

가끔 실버 그리디 문제도 "이거 도대체 어떻게 풀지" 하는 날 보면 머리가 아프다...

앞으로 실버~골드 난이도 그리디 문제들을 풀어봐야겠다.




---

### 💡 C++? Python?



처음에 `Python`으로 시작했다가, 컴공 공부 하려면 어차피 C에 익숙해야만 한다고 생각해서 `C++`로 전환했다.

`문자열` 문제만 `Python`으로 푼다는 고수분들이 있는데, 개인 선택이다.

(난 막상 그럴때 파이썬 쓰려면 또 오랜만이라 익숙하지가 않아서 그냥 C++로 한다.)


`Rust`도 요즘 뜨기 때문에 하는 사람이 많다. 하지만 다음 이유에서 `C++`을 난 더 추천한다.


배우는 입장에서는 다른사람의 코드를 보면서 배워가는 점이 있어야 하는데 이 점에서 C++을 이길 언어는 없다.

처음 알고리즘을 공부할때도, 구글링을 해서 다른사람의 코드를 볼 것이다.

예를 들어서 구글에 **"세그먼트 트리 파이썬"**을 검색하는것보다, **"세그먼트 트리 C++"**을 검색하면 

더 검색 결과도 많고, 많은 만큼 **좋은 설명**들이 이미 나와있기 때문에 공부하는데 도움이 된다.


물론 사람마다 다르겠지만, 컴공 입학한지 별로 안되었거나, 컴공 입학을 바라는 분들, 코테 준비하는 분들에겐 이런 이유로 C++을 추천한다.




---

### 💡 공부 방법 추천



백준에 문제를 눌러보면 **"단계별로 풀어보기"** 파트가 있다.

{% include figure.liquid loading="eager" path="files/2024-05-08-solvedac-diamond/1.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

공부하기 좋게 순서가 짜여져 있다.

순서대로 쭉 풀어보면서 새로운 알고리즘이 나오면 구글링을 하자.

꾸준히 공부하다보면 문제푸는 맛이 있을 것이다. (나만 그런가)

골드 문제를 들어가다보면 모르겠는 문제가 자주 생길텐데, 적당히 생각해보다가 아예 접근 방법을 모르겠으면 구글링 하자!

아직 배우는 단계이므로 전혀 생각못할 풀이법이 있을 수 있는데 오래 붙잡고 있는것도 시간 낭비이다.


그 단계에 나와있는데 뭔가 중요한거 같고 이해가 부족하면 그 알고리즘의 문제를 더 풀어보자.

난 참고로 BFS, 최단거리 는 너무 중요해보여서 이 단계별 문제 외에도 많이 풀어봤고, 

유니온파인드 단계부터는 어느정도 난이도가 있기 때문에 다른 문제를 더 풀어보고싶어서 모두 더 풀어봤다.


---

#### ❗❗ 절대로 코드를 그대로 붙여와서 제출하지 말자.

당연히 초보일 때는 복붙을 아예 하지 않는게 좋다.

하지만, 골드 티어 이상부터는 아마 구현도 어느정도 할텐데 모두 따라 치는건 시간낭비라고 본다.

다른사람의 코드를 가져올 때는 복붙은 해도 되지만, 

붙여넣은 후 하나하나 읽어보면서, 내가 원래 쓰던 코드 스타일로 바꾸고, 변수명도 바꾸자. 

그러다 보면 코드를 이해하게 된다.


나는 참고로 다른 사람의 코드를 가져와서 바꾸면서도, 이거보다 더 최적화 하는 방법은 없을까? 

꾸준히 의심하고 생각했다.


---

#### ❗❗ 주석을 많이 달자

이건 뭐 모든 사람이 말할 것이다. 지금 알고리즘 대회 나가서 1분 1초가 중요한게 아니면, 주석을 계속 달자.

코드 주석 뿐만이 아니라, 공부하는 입장에서는 내가 **실수했던 부분**, **실수했던 이유**, 몰라서 **구글링했던 아이디어**,

모두 다 적어주자. 다시 그 코드를 볼 일이 없더라도, 주석을 치면서 한번 더 느끼는 것에 의미가 있다.


---

#### ❗❗ 맞았다고 끝이 아니다.

내가 정말 추천하는 방법이다. 

나는 정말 거짓말 안치고 브론즈 5 문제라도, 맞았습니다!! 가 나오면 바로 넘어가지 않는다.

백준에는 **채점 현황**에서, 다른사람의 코드를 볼 수 있다. 

자신이 택한 언어로 선택하고 맞았습니다 옵션을 선택하고 검색해주자.

{% include figure.liquid loading="eager" path="files/2024-05-08-solvedac-diamond/2.webp" class="img-fluid rounded z-depth-1" zoomable=true %} 

이렇듯 같은 문제이고,  같은 정답이라도, 코드의 속도는 문제에 따라 크게 다를 수 있다.

내가 제출한 코드의 시간이 `남들보다 느린건 아닌지` 체크하자.

훨씬 빠른 코드가 있다면, 어떤 부분이 달라서 빠른지를 눌러보고 비교해보고 내 코드를 수정해보자.

항상 이렇게 해서 남들처럼 빠른 시간이 나올때까지 내 코드를 수정해서 제출했다.

그러면서 `어떤 부분에서 시간낭비가 되고있는 건 아닌지`, `어떤 최적화 테크닉이 있는지`를 생각하면서 실력이 느는 것이다.

나중에는 메모리도 비교해보고, `메모리를 낭비하고 있는지`, 메모리를 줄일 수 있는 방법이 있는지 생각도 해보자.

{% include figure.liquid loading="eager" path="files/2024-05-08-solvedac-diamond/3.webp" class="img-fluid rounded z-depth-1" zoomable=true %} 

위 사진처럼 다른 사람의 코드에 시간이 더 적은게 있어서 그 코드를 보고, 그 사람의 코드를 참고해서 내 코드를 수정해서 제출했다.

메모리와 시간이 적어질때까지 계속 반복해보자. 반복하다 보면 실력이 많이 좋아질 것이다.


이렇게 다른 사람의 코드를 보면 또 좋은 점이 내가 모르던 stl이나 지식을 알 수 있다.

예를 들어 **memset**이라던가, **lowerbound** 등등 아주 많은 **`STL`**,

**struct**나 **class**를 이용하여 문제를 푸는 다른 분들의 코드를 보면서

어? 이건 뭐지? 하고 구글링 해보고 내것으로 만들어가는 것이다.

내 코드만 보고 제출하고 끝이라면 이런 다른 사람들이 애용하는 것들을 알지 못했을 것이다.




---

### 💡 앞으로도 티어를 올릴건가?



절대 아니다. 애초에 백준을 시작하게 된 계기가 사실은 휴학을 오래해서 기본 코딩도 다 까먹었었고, 컴공인데 그래도 기본적인 코딩은 꼭 해야한다고 생각해서 백준 단계별 문제를 풀기 시작한 것이다.

어차피 티어 시스템상 이제 더 티어를 올리기 위해서는 다이아 이상의 문제를 풀어야하는데, 그렇게 하기엔 시간이 너무 많이 투자되는것 같다.

지금은 복학 후 전공과목 학점관리에 신경쓰고, 어느쪽으로 진로를 갈지가 선택하는 것이 좋을 것 같다.

시간 날때마다 나중에 코테 정도 볼 수 있도록 골드 문제들을 빠르고 정확히 푸는 정도만 반복 학습할 것 같다.
