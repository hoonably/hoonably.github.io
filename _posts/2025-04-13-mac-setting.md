---
layout: post
title: "Mac 초기설정 + 유용한 프로그램"
description:
date: 2025-04-13 16:24:31 +09:00
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

> 💡
> 
> MacBook Pro 14 inch M2 Pro (2023)
> 
> `Sequoia 15.3.1` Version
> 
> 버전이 다르다면 다를 수 있음
> 
> 어플 내 상세 설정은 내가 선호하는 대로 기록하려고 캡쳐해둠
> 
> 어느정도 컴퓨터를 다룰 줄 아는 사람이라는 전제 하에 작성
> 
> (ex. Github 오픈소스니까 링크 들어가서 최신 버전 다운받기)
> 
> Homebrew 등 다루는것도 있는데 궁금하면 알아서 GPT gogo
> 
{: .block-warning }

# 프로그램 다운로드 종류

설정과 좋은 어플을 소개하기 전에 맥 기본 프로그램 다운로드 종류를 알려주겠다.

앱스토어로 다운은 생각보다 별로 없으니까 일단 넘기고,

맥은 소프트웨어를 다운받았을 경우, 직접 `응용 프로그램` 폴더에 넣어줘야한다.

프로그램별로 보통 세가지 방식이 있다.

1. `.pkg` 파일 : 우리가 아는 평범한 설치 프로그램. 
    
    근데 맥에서는 은근 잘 안쓰인다.
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%201.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

1. `.dmg` 파일 : 친절하게 넣도록 유도
    
    → 다음처럼 친절하게 드래그드롭으로 넣도록 유도해준다.
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%202.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%203.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

1. `.zip` 파일 : 알아서 넣기
    
    → 다음과같이 zip 파일만 딸랑 있을때, 압축을 풀었는데 바로 응용 프로그램이 나온다면
    
    → 직접 `응용 프로그램` 폴더에 드래그드랍 해주자.
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%204.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%205.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

다음과 같이 `응용 프로그램` 폴더에 들어가면 `LaunchPad`에 보인다.

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%206.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%207.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# ⭐️ Software Update

업데이트 일부러 안하는 사람도 있는데, 개인적으로는 추천한다.

계속 안하고 버티면 안돌아가는 어플들이 꽤 있다.

오래걸릴 수 있으니 미리 다운로드 시작하고 아래 진행

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%208.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# ⚙️ 설정

- Apple Login
    
    이거부터 하고 시작하자.
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-02-22_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.44.03.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 시동음 제거
    
    노트북 켰을때 이거 안해놓으면 밖에서 관종처럼 시끄럽게 킬 수 있다.
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%209.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 키보드 → 키보드 단축키
    
    이건 내 나름대로 선호하는 설정이다.
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2010.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2011.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2012.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 핫 코너 단축키
    
    마우스로 코너를 찍어서 Mission Control이나 데스크탑 보기를 할 수 있는데, 정말 유용하다.
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2013.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 앱스토어 암호 없이 다운로드
    
    이 과정을 해줘야 앱스토어에서 앱 설치시 귀찮게 자꾸 암호를 입력하는 일이 없다.
    
    미디어 및 구입 항목 → 무료 다운로드 → 입력 안함
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2014.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- **문서(PDF) 탭으로 열기**
    
    PDF를 열때 윈도우는 자동으로 하나의 창에 여러 탭으로 열리는데,
    
    맥은 이 설정을 안해주면 각각 다른 창으로 열린다.
    
    {% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2015.webp" class="img-fluid rounded z-depth-1" zoomable=true %}
    

---

# 🖱️ Scroll Reverser 설치

트랙패드 스크롤은 그대로 두고 마우스 휠만 반전시켜서 윈도우랑 일치하도록 할 수 있음

Mac 소프트웨어 버전 낮으면 실행 안됨 13.xx 에서 안됐음

[https://pilotmoon.com/scrollreverser/](https://pilotmoon.com/scrollreverser/)

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2016.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2017.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# ⌨️ 우command → 한영키로

- Karabiner 버전에 맞게 다운로드
    
    [https://karabiner-elements.pqrs.org/](https://karabiner-elements.pqrs.org/)
    
- 여러 권한 부여 작업

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2018.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2019.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 다음과 같이 설정

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2020.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2021.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 참고로 몇몇 키보드는 바로 허용이 안되서 직접 Device에 들어가서 `Modify events` 해줘야함!!
    
    {% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2022.webp" class="img-fluid rounded z-depth-1" zoomable=true %}
    
- 설정 → 키보드 → 키보드 단축키

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2023.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

`F18` 하는 방법 : 위에서 설정했던 `우커맨드` 누르면 됨

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2024.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 키보드 → 입력 소스 → 편집

한영키 우커맨드로만 쓸거면 Caps Lock 쓸 수 있음

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2025.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

# 📁 Finder

- 도구 막대 사용자화

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2026.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2027.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2028.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 경로 막대 보기, 상태막대 보기로 변경 → 아래 경로랑 용량 나옴

왼쪽 위의 메뉴바에 보기 누르면 저렇게 나옴

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2029.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 항상 자동으로 정렬

우클릭 → 보기 옵션 → 정렬 → 이름 등 원하는 걸로

→ 아래 `기본값으로 사용` 누르기

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2030.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 파인더에서 단축키로 바로 그 경로의 터미널 열기 (컴공이면 Good)

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2031.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2032.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

반드시 먼저 설정한 항목을 글자 그래도 옮겨적어야한다.

```
폴더에서 새로운 터미널 탭 열기
```

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2033.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2034.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

위처럼 폴더를 누른 후 설정한 단축어를 사용하면 바로 터미널이 열린다.

---

# ⬛️ Rectangle

맥 소프트웨어 업데이트하면서 기본 설정에서도 있는데, 이 어플이 더 최적화가 부드럽고 기능이 많음

[https://rectangleapp.com/](https://rectangleapp.com/)

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2035.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2036.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2037.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# ⌨️ KeyBoardCleanTool

맥북은 키보드를 누르기만 하면 노트북이 켜져버리기 때문에 키보드 청소하기가 불편하다.

키보드를 아예 꺼버리고 물티슈 등으로 청소할 수 있다.

(전원키는 이거 실행해도 눌리는듯 하니까 조심)

[https://folivora.ai/keyboardcleantool](https://folivora.ai/keyboardcleantool)

다운로드 후 압축풀면 바로 어플리케이션인데, 경로를 ‘응용 프로그램’으로 옮겨주면 된다.

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2038.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# 🐨 Grey

어플들은 대부분 기본 설정으로 시스템이 다크모드면 다크모드를 따라가도록 되어있고, 설정에서 라이트/다크 모드를 고정할 수도 있다.

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2039.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

하지만, 인기가 없는 앱은 무조건 시스템 설정을 따라가는 경우가 있다. (ex. QTSpim)

컴구 과제때문에 QTSpim을 깔아서 하는데, 다크모드를 항상 쓰는 나에게는 코드 보기가 눈이 너무 아팠고, 이거 하나때문에 다크모드를 끄자니 싫었다.

이를 해결하는 각 어플마다 시스템 설정을 다르게 설정해주는 어플이다.

- 다운로드

[https://github.com/zenangst/Gray?tab=readme-ov-file](https://github.com/zenangst/Gray?tab=readme-ov-file)

---

# 🧹 AppCleaner

앱만 드래그로 지우면 앱 파일이 많은 용량을 차지할 수 있다. 자동으로 찾아서 지우도록 도와주는 어플

[https://freemacsoft.net/appcleaner/](https://freemacsoft.net/appcleaner/)

---

# 🔋 AlDente

맥북 필수 배터리 관리 앱

[https://apphousekitchen.com/](https://apphousekitchen.com/)

난 클램쉘로 쓰니까 편하게 하려고 결제도 하고 사용중

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2040.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2041.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# 💊 Amphetamine

- Download

[https://apps.apple.com/kr/app/amphetamine/id937984704?mt=12](https://apps.apple.com/kr/app/amphetamine/id937984704?mt=12)

- Power Protect

[https://x74353.github.io/Amphetamine-Power-Protect/](https://x74353.github.io/Amphetamine-Power-Protect/)

- 위 링크에서 Power Protect도 설치
- 설치 후 암호 입력 없이 가능하도록 실행

```bash
sudo pmset -a disablesleep 1
```

- 비활성화한다면?

```bash
sudo pmset -a disablesleep 0
```

---

# 🖥️ MonitorControl

외장모니터의 밝기를 편하게 컨트롤 하는 툴

외장 모니터 안쓰면 설치할 필요 없음

있으면 무조건 쓰는게 굿

- 기존 모니터 설정→ 직접 컨트롤 불가능.

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2042.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- 직접 컨트롤 가능 + 키보드로도 가능

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2043.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

- Homebrew 통해 설치

```bash
brew install --cask monitorcontrol
```

- 웹으로 설치
    
    [https://github.com/MonitorControl/MonitorControl/releases](https://github.com/MonitorControl/MonitorControl/releases) 에서 최신버전 dmg 파일 다운로드
    

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2044.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2045.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# 📎 Maccy

클립보드를 여러개 할 수 있고 저장시켜서 꺼내쓸 수 있는 도구다.

막상 나는 잘 안쓴다.

- Homebrew로 설치

```bash
brew install --cask maccy
```

[https://maccy.app/](https://maccy.app/)

[https://blog.naver.com/finway/223487330217](https://blog.naver.com/finway/223487330217)

---

# 🎨 Top Notch (메뉴바 검은색으로)

[https://topnotch.app/](https://topnotch.app/)

무조건 메뉴바를 검정색으로 바꿔서 M자 탈모 모양을 없애주는 것

원래 메뉴바 색은 배경화면에 맞게 설정되는데, 색이 맘에 안들면 검정색으로 바꿀 수 있다.

단점 : 바꿔보니까 맥이 프로그램 끝을 둥글게 만들어서 작은 틈이 보여서 색이 바탕화면과 많이 차이나면 창을 최대화해도 틈이 살짝 보인다. **생각보다 별로임**

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2046.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

---

# 🎥 화면녹화시 소리 녹화 방법

기본적으로 `cmd + shift + 5` 를 사용해서 녹화할 수 있는데, 소리 녹화가 동시에 안된다.

Blackhole을 설치하면 소리도 동시에 녹화할 수 있다.

**설치**

2ch로도 충분하다는거 같음. (ch이 뭘 의미하는지 사실 잘 모름)

**Option 1: Download Installer**

1. [Download the latest installer](https://existential.audio/blackhole)
2. Donate 하지말고 I can’t afford to donate
3. 이메일 적고 대충 이름 적으면 이메일로 다운링크 줌

**Option 2: Install via Homebrew**

맥좀 써보고 컴공이라면 Homebrew 무조건 있을텐데 이걸로 깔면 바로 깔아짐

- 2ch: `brew install blackhole-2ch`
- 16ch: `brew install blackhole-16ch`
- 64ch: `brew install blackhole-64ch`

**설정**

- 오디오 MIDI 설정 → + 버튼 → 다중 출력 기기 생성
- 아래 사진과 같이 실제로 들을 오디오 기기와 BlackHole2ch을 체크
    
    (동시에 두 기기가 출력기기라는거임)
    
- 이름은 왼쪽에 있는 이름을 직접 클릭하면 바꿀 수 있음

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2047.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

**사용법**

- 출력 (스피커) : [기존 스피커]+blackhole2ch
- 입력 (마이크) : blackhole2ch
    
    {% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2048.webp" class="img-fluid rounded z-depth-1" zoomable=true %}
    
    {% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2049.webp" class="img-fluid rounded z-depth-1" zoomable=true %}
    

스피커에 blackhole이 있어서 내 컴퓨터 소리를 blackhole로 넘기고,

마이크가 blackhole이라서 내 컴퓨터 소리가 녹화됨 !

---

# Chrome 앱을 사용하자

대부분의 프로그램에서 웹 > 앱 이다.

대부분이 웹개발 먼저 이루어지고, 운영체제에 맞게 앱개발이 이루어지기 때문에, 웹이 더 클린한 경우가 많다.

GPT는 특히 데스크탑 앱을 사용하면 표가 애매하게 잘리는 문제, 프로젝트에서 파일을 첨부하지 못하는 문제 등이 발생한다. 

하지만, 웹에서 쓰기에는 GPT만큼은 크롬에서 다른 탭이랑 같이 쓴는것 보다는 따로 창을 쓰는게 좋을 것 같기 때문에, 크롬에서 자체로 앱처럼 웹을 따로 만들어서 사용할 수 있다. (+ 난 인스타도 만들어놨다.)

{% include figure.liquid loading="eager" path="files/2025-04-13-mac-setting/image%2050.webp" class="img-fluid rounded z-depth-1" zoomable=true %}

`전송, 저장, 공유`

`페이지를 앱으로 설치(…`

웹인데 따로 창을 앱처럼 사용하고, 깔끔하게 따로 빼서 사용할 수 있다.

대부분의 기능에서 웹이 더 좋은 것 같다.

---

# 🥃 Whisky

.exe 파일을 실행시킬 수 있는 도구다. 게임도 지원이된다. (안되는것도있음)

다만, USB 연결은 안되는것같다.

[https://getwhisky.app/ko/](https://getwhisky.app/ko/)

---

# 💽 UTM

무료 가상머신이다. 대신 설치는 살짝 복잡하다. 굳이 안써도 됨. 용량 많이 차지

추천 설정: 실제 메모리 크기와 CPU 코어 개수의 절반 이하로

**Window 11**

난 NFC RFID Reader가 .exe 파일인데, Whisky로는 USB 연결이 안되서 깔았다.

USB연결도 물론 되고, 그냥 윈도우도 쓰는 느낌이다. 

램 8GB하고 싱글 카트라이더 돌려보니까 렉걸리더라

유료보다는 렉걸리지만, 유료는 너무 비싼듯?

[https://xanzhu.com/ko/blog/windows-on-apple-silicon](https://xanzhu.com/ko/blog/windows-on-apple-silicon)

다운르도 링크 (윈도우 10,11 둘다있는데 10은 자꾸 오류뜸)

[https://mac.getutm.app/](https://mac.getutm.app/)

[https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12](https://apps.apple.com/us/app/crystalfetch-iso-downloader/id6454431289?mt=12)

**Ubuntu**

아래 링크에서 ARM 버전 다운로드

[https://cdimage.ubuntu.com/releases/22.04/release/](https://cdimage.ubuntu.com/releases/22.04/release/)

참고 링크 :

[https://solearn.tistory.com/275](https://solearn.tistory.com/275)