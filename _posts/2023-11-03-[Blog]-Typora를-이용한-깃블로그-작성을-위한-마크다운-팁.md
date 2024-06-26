---
title: "[Blog] Typora를 이용한 깃블로그 작성을 위한 마크다운 팁" #대괄호를 쓰려면 ""로 감싸주면 된다.
date: 2023-11-03 00:01:00 +09:00

categories: [Blog, Markdown]

# Algorithm : 시간복잡도, 자료구조, 정렬, 탐색, 탐욕알고리즘, 정수론, 그래프, 트리, 조합, 다이나믹프로그래밍
# Language : Java, Python, C++
# Blog : Markdown, Just_blog
# Baekjoon : Bronze, Silver, Gold, Platinum, Diamond, Ruby

tags: [Blog]

image: https://github.com/hoonably/hoonably.github.io/assets/77783081/addc585e-45dc-4c1f-bd0c-91ad30d955c5

# Algorithm, Baekjoon, Python, Java, DB, Blog
---



현재 글은 `Jekyll` 의 `Chirpy` 테마 기준이며,

`Mac` 환경에서 `Typora`를 사용해 글을 작성할 때 기준이다.

[J1mmyson님 블로그](https://j1mmyson.github.io/posts/MarkdownSyntax/){:target="_blank"} 를 많이 참고했고, 그 중 코딩 블로그 기준으로 자주 쓸 만한 것을 고르고 또 필요한 것들을 추가했다.

[Typora 공식 단축키 사이트](https://support.typora.io/Shortcut-Keys/#change-shortcut-keys){:target="_blank"}

<br/>

## 💡 기본양식

---

항상 글 작성시 작성하는 기본 양식이다.

```yaml
--- #typora 사용시 이 줄은 안보일 수 있다.
title: "[Java] Hello Java!" # 대괄호를 쓰려면 ""로 감싸주면 된다.
date: 2023-11-09 19:30:00 +09:00  # 09:00 - > 한국 표준 시간
categories: [Programming, Java] # 대분류,소분류
tags: [java,coding]

#여기부터는 부가기능이다. 쓰지 않아도 된다.
typora-root-url: ../ # typora에서 자동으로 이미지를 img에 올릴때
toc: false # 이 포스트만 오른쪽에 날아다니는 목차를 제거
comments: false # 이 포스트에만 댓글 기능을 끄기
image: /assets/img/~~~.png # 대표 이미지를 넣을때
pin: true # 홈페이지 메인화면에 이 게시물 고정
---
```

<br/>

## 💡 실시간 블로그 확인 방법

---

먼저 터미널을 열고 다음을 입력한다.

```
$ cd hoonably.github.io   # 본인의 깃헙 블로그 저장소로 이동
$ jekyll serve          # jekyll 서버 실행
```



error가 발생하지 않는다면 [http://127.0.0.1:4000/](http://127.0.0.1:4000/){:target="_blank"}에 현재 블로그 상황이 나오며, 새로고침을 하면 바로바로 업데이트 된다.

끝낼 때는 꼭 터미널에서 **`ctrl+c`**를 눌러 서버를 끄자.

<br/>

## 💡 헤더 (Header)

---

- Markdown : `#`을 1~6번 친 후 ```띄어쓰기```를 하고 작성한다.

- Typora 단축키 : **`Command + 1,2,3,4,5,6`**

- 작성 예시

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

<br/>

## 💡 줄바꿈

---

마크다운에서는 여러 번 줄바꿈하기 힘든데, 

`<br/>`을 사용하면 엔터를 두번 친 효과를 낼 수 있다.

```markdown
<br/>
```

<br/>

## 💡 구분선 (Hr)

---

```-(마이너스)``` 3개 입력 후 ```Enter```

```markdown
---
```

<br/>



## 💡 인용문 (BlockQuote)

---

```>```  입력 후 ```space```

중첩이 가능하다.

```markdown
> 인용
```

- 결과

  > 인용

  

## 💡 폰트

---

- 굵게 :  `__bold__`  or  `**bold**` or **`command + B` (Typora 단축키)**

- 기울이기 :  `_italic_` or `*italic*` or **`command + I` (Typora 단축키)**

- 취소선 : `~~cancel~~` 
- 밑줄 : `<u>밑줄</u>` or  **`command + U` (Typora 단축키)**

- 동시에 사용 가능 :  `___세번 쓰면 굵고 기울이기 가능___`

- 결과 : __굵게__ / _기울이기_ / ~~취소선~~ / <u>밑줄</u> / ___세번 쓰면 굵고 기울이기 가능___

<br/>

## 💡 글자 색 및 형광펜

---

```markdown
<span style="color:red">Red</span>
<span style="color:yellow">Yello</span>
<span style="background-color:red">Red highlight</span>  
```

<span style="color:red">Red</span>

<span style="color:yellow">Yello</span>

<span style="background-color:red">Red highlight</span>  

<br/>

## 글자 크기

---

```markdown
<span style="font-size:200%">200</span>  
<span style="font-size:100%">100</span>  
<span style="font-size:50%">50</span>  
```

<span style="font-size:200%">200</span>  
<span style="font-size:100%">100</span>  
<span style="font-size:50%">50</span>  

<br/>

## 💡 코드블럭 (Code Block)

---

> ### `는 어디있는가?

` (백쿼트) 는 ₩와 같은 키보드 자판에 있고,

현재 타자가 영어일때는 ` 가, 한글일때는 ₩이 나온다.

<br/>

> ### 인라인 (Inline) 코드블럭

- Markdown : ` 로 소스코드를 감싸서 라인 안에서 사용 할 수 있다.
- Typora 단축키 : **`Ctrl` + `**
- Tip : 원하는 부분을 드래그 후 `Ctrl` + ` 를 사용하면 아주 편하다.
- Tip 2 : `하이라이트` 느낌이 나기 때문에 강조할때 써도 좋다.

> ### 인라인 코드블럭 색상 변경

- _sass -> colors -> syntax-dark.scss (다크모드일때) 와 syntax-light.scss (라이트모드일때)

- 아래 부분을 수정해주면 커스텀할 수 있다.

```scss
@mixin dark-syntax {
  --language-border-color: #2d2d2d;
  --highlight-bg-color: #151515;
  --highlighter-rouge-color: #70f8ff; // 인라인 코드블록 글씨 색
  --highlight-lineno-color: #808080;
  --inline-code-bg:  rgba(255, 255, 255, 0.079);  // #323238; 이게 인라인 코드블럭 백그라운드
  --code-color: #b0b0b0;
  --code-header-text-color: #6a6a6a;
  --code-header-muted-color: #353535;
  --code-header-icon-color: #565656;
  --clipboard-checked-color: #2bcc2b;
  --filepath-text-color: #cacaca;
```

> ### 작성 예시

```markdown
int형을 만들 때는 `int a=0;`를 사용한다.
```

- 결과

int형을 만들 때는 `int a=0;`를 사용한다.

<br/>

> ### 여러 줄 코드블럭

- Markdown : ` 를 3번 누르고 원하는 문법을 치고 다시 세번 눌러서 닫는다.

- Typora 단축키 : **`opt + command + c`**   / code의 c로 외우자.

- 작성 예시

````markdown
```java
System.out.prinln("앗농칭구얌")
```
````

- 결과

```java
System.out.prinln("앗농칭구얌")
```

<br/>

## 💡 링크 첨부

---

- Markdown : `[보이는 부분](링크){:target="_blank"}`

  **`{:target="*_blank"}*`** => 새 탭에서 열때 사용한다. 아주 중요!!!

- Typora 단축키 : **`command+k`**

  Typora 에서는 {:target="*_blank"}*가 보이지만 블로그에서는 안보인다.

- 작성 예시

```markdown
[Hoon's blog 바로가기](https://hoonably.github.io/){:target="_blank"}
```

- 결과

[Hoon's blog 바로가기](https://hoonably.github.io/){:target="_blank"}

<br/>

## 💡 항상 링크가 새 탭에서 열리게 설정

---

항상 {:target="_blank"} 사용으로 불편했는데, [참고한 블로그](https://jason9288.github.io/posts/github_blog_4/)를 통해 알게 되었다.

{:target="_blank"} 를 사용하지 않고 플러그인을 통해 항상 새 탭으로 열리게 한다.

`Gemfile` 파일의 가장 아래에 다음 내용을 붙여넣기 한다.

```ruby
gem 'jekyll-target-blank'
```

그리고 `_config.yml` 파일의 가장 아래에 다음 내용을 붙여넣기 한다.

```yaml
plugins:
   - jekyll-target-blank
```

> 위 방법이 동작하지 않으면 터미널에서 블로그 저장소 디렉토리로 이동한 후, 다음 명령을 입력한다.
>
> ```terminal
> gem install jekyll-target-blank
> ```

<br/>

## 💡 이미지 첨부

---

이미지 첨부하는 방법은 여러가지가 있는데, 여러 가지를 해본 결과 github을 이용한 방법이 제일 편했다. 

> ### Github를 이용한 이미지 주소 만들기

Typora에 직접 올리면 로컬 경로로 생성되어 그 당시에는 보이지만 깃블로그에 올린다면 보이지 않는다. 이 때 github Issues 창을 이용하면 편하게 업로드하고 바로 사용할 수 있다.

![image](https://github.com/hhhoon/hhhoon.github.io/assets/77783081/63f6bdb8-ec18-452a-997c-c4b359fc6007)

Github의 `Issues` 탭에 들어가서 `New Issue` 를 누르고, 파일을 드래그 드랍하는 등의 방식으로 첨부한다. (꼭 다운받은 파일이 아니고 복사 붙여넣기도 가능하다.)

Submit new issue를 누를 필요는 없다. 그냥 Issue창을 이용할 뿐이다.

![image](https://github.com/hhhoon/hhhoon.github.io/assets/77783081/ce875b59-2d0c-4607-bf18-ce92a5efc1e3)

그럼 이런 식으로 업로드가 자동으로 된다.

![image](https://github.com/hhhoon/hhhoon.github.io/assets/77783081/f2a27bb9-6837-4796-bf5d-6796cae07bfe)

업로드가 자동으로 완료하면 이런 식으로 나오는데, 이걸 그대로 `복사`해서 Typora의 md 파일에 넣고 싶은 곳에 넣으면 된다.

<img width="909" alt="image" src="https://github.com/hhhoon/hhhoon.github.io/assets/77783081/fcdf6ff3-6c60-4d95-921c-1804c9166eaa">

이런 식으로 Typora에서 보이면 끝이다.



> ### 이미지 기본 마크다운

Typora에서는 기본적으로 위치가 가운데정렬이다.

```markdown
![이미지 설명](경로.png)
```

```markdown
![profile](/assets/img/2023-11-09-깃블로그 작성을 위한 마크다운 팁/profile.PNG)
```



> ### 퍼센트 크기 조절

: Typora 에서는 이미지를 `우클릭`후 이미지 확대를 통해 크기를 편하게 설정할 수 있다.

 `style="zoom:50%;"`을 사용하고, 자동으로 HTML 방식으로 바꿔준다.

```markdown
<img src="이미지 경로" alt="이미지 설명" style="zoom: 50%;" />
```

```markdown
<img src="/assets/img/2023-11-09-깃블로그 작성을 위한 마크다운 팁/profile-9533361.PNG" alt="profile" style="zoom: 50%;" />
```



<br/>

## 💡 표 작성

---

: 직접 타이핑하기는 너무 귀찮은 작업이니 **`opt + command + T`**를 이용해 만들자.

- 열(Row) 의 갯수 : 옆으로 몇 칸

- 행(Column) 의 갯수 : 아래로 몇 칸

| 1행 1열  | 1행 2열 | 1행 3열 |
| :------: | :-----: | :-----: |
| 2행  1열 | 2행 2열 | 2행 3열 |
| 3행 1열  | 3행 2열 | 3행 3열 |
| 4행 1열  | 4행 2열 | 4행 3열 |

<br/>

## 💡 중괄호 연속 사용

---

Jekyll 은 [Liquid](https://shopify.github.io/liquid/){:target="_blank"} 언어를 사용한다.

이 언어는 중괄호 ( **`{`** ) 를 사용해서 변수, 제어문을 표현한다. 

그래서 `{` 를 두번 사용하면 변수로 인식하므로 블로그에 정상적으로 build되지 않는다.

그래서 2차원 배열같은 것을 할 때 중괄호를 연속으로 두번 사용하면 문제가 발생한다.

```
Error 코드

{% raw %}Liquid Exception: Liquid syntax error (line 330): Unknown tag 'endraw' 
in /Users/hoon/hoonably.github.io/_posts/2023-11-09-Typora를-이용한-깃블로그-작성을-위한-마크다운-팁.md {% endraw %}
```



> ### 해결 방법

1번째줄과 6번째 줄처럼 `raw`와 `endraw`를 쓰면 그 사이에 모든 중괄호 두개를 그대로 출력한다.

<img width="875" alt="image" src="https://github.com/hhhoon/hhhoon.github.io/assets/77783081/4f18fb6e-061f-418a-8c2a-8d69be68fbfc">

> ### 보이는 결과

```markdown
{% raw %}

raw와 endraw 사이는 무적입니다.
{{ 여기는 중괄호 두개 막 써도 되지롱 }}

{% endraw %}
```





