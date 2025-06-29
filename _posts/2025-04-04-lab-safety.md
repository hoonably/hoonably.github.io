---
layout: post
title: "연구실 안전교육 스킵"
description:
date: 2025-04-04 16:25:31 +09:00
tags: 
categories: Tip
giscus_comments: true
related_posts: false

featured: false
pretty_table: true

toc:
  beginning: false  # 맨 앞에 목차
  sidebar: left  # 목차가 사이드바 왼쪽에 붙어있음
---

국가 돈낭비 중 하나인 연구실 안전교육을 아마 매학기 해야하는데 정말 귀찮다.

특히 컴공은 정말 쓸데없는 듯 하다.

알 사람은 알지만 스킵하는 방법이 있다.

### 1. 동영상 틀기

{% include figure.liquid loading="eager" path="files/2025-04-04-lab-safety/image.png" class="img-fluid rounded z-depth-1" zoomable=true %}

### 2. 개발자 모드 진입

Window : `F12` 

Mac : `cmd+opt+I` 

### 3. Console 창 진입

{% include figure.liquid loading="eager" path="files/2025-04-04-lab-safety/image%201.png" class="img-fluid rounded z-depth-1" zoomable=true %}

이제 Console 창에 다음 내용을 붙여넣기 하고 `Enter` 누르면 된다.

- 만약 Console에 붙여넣기가 불가능하다고 뜬다면?
    
    다음을 직접 영어로 입력 후 Enter
    
    ```jsx
    allow pasting
    ```
    

### 4-1. ProgressCheck (바로 종료)

```jsx
progressCheck(true)
```

### 4-2. 6000초 건너뛰기 (바로 종료)

```jsx
document.querySelector('video').currentTime+=6000;
```

### 4-3. 16배속 (위 건너뛰기 방법이 안된다면)

```jsx
document.querySelector('video').playbackRate = 16;
```

### 5. 퀴즈 정답

```jsx
for (var i = 0; i < 10; i++){
answer = $("#qustionCorrectNo_" + i).val();
$("input[name='qustionAnswerList["+i+"].Answer']:radio[value="+answer+"]").attr("checked", true);
}
```

{% include figure.liquid loading="eager" path="files/2025-04-04-lab-safety/image%202.png" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-04-lab-safety/image%203.png" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-04-lab-safety/image%204.png" class="img-fluid rounded z-depth-1" zoomable=true %}