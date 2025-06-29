---
layout: post
title: "Pintos Setting"
description:
date: 2025-03-20 16:26:04 +09:00
tags: CS
categories: Study
giscus_comments: true
related_posts: false

featured: false
pretty_table: true

toc:
  beginning: false  # 맨 앞에 목차
  sidebar: left  # 목차가 사이드바 왼쪽에 붙어있음
---

메모: docker start -ai pintos

[Environment Setup with Docker(250321).pdf](/files/2025-03-20-pintos-setting/Environment_Setup_with_Docker%28250321).pdf)

> Welcome to Pintos. Pintos is a simple operating system framework for the 80x86 architecture.
> 

# Docker Build

[https://github.com/NamJeongseok/PintOS-Docker-UNIST](https://github.com/NamJeongseok/PintOS-Docker-UNIST)

```bash
FROM ubuntu:12.04

RUN sed -i -e 's/archive.ubuntu.com/old-releases.ubuntu.com/g' /etc/apt/sources.list
RUN sed -i -e 's/security.ubuntu.com/old-releases.ubuntu.com/g' /etc/apt/sources.list

RUN apt-get update && apt-get install -y \
	bash \
	vim \
	build-essential \
	gcc-4.4 \
	gcc-multilib \
	g++-4.4 \
	perl \
	wget \
	patch \
	libncurses5-dev \
	libx11-dev libxrandr-dev xorg-dev \
	make

RUN mv /usr/bin/gcc-4.4 /usr/bin/gcc
RUN mv /usr/bin/g++-4.4 /usr/bin/g++
COPY ./bochs-2.2.6.tar.gz /root/
RUN mkdir /root/pintos 
RUN echo 'export PATH="$PATH:/root/pintos/src/utils"' >> ~/.bashrc

CMD ["/bin/bash"]
```

```bash
git clone git@github.com:NamJeongseok/PintOS-Docker-UNIST.git
cd PintOS-Docker-UNIST
```

- amd64 (x86_64) (Window)

```bash
sudo docker build -t pintos .
```

- ARM64 (Silicon Mac)

```bash
docker build --platform=linux/amd64 -t pintos .
```

# Error

```bash
➜  PintOS-Docker-UNIST git:(main) sudo docker build -t pintos .                  
Password:
[+] Building 1.8s (9/14)                                                          docker:desktop-linux
 => [internal] load build definition from Dockerfile                                              0.0s
 => => transferring dockerfile: 696B                                                              0.0s
 => [internal] load metadata for docker.io/library/ubuntu:12.04                                   1.5s
 => [auth] library/ubuntu:pull token for registry-1.docker.io                                     0.0s
 => [internal] load .dockerignore                                                                 0.0s
 => => transferring context: 2B                                                                   0.0s
 => [1/9] FROM docker.io/library/ubuntu:12.04@sha256:18305429afa14ea462f810146ba44d4363ae76e4c8d  0.0s
 => => resolve docker.io/library/ubuntu:12.04@sha256:18305429afa14ea462f810146ba44d4363ae76e4c8d  0.0s
 => [internal] load build context                                                                 0.0s
 => => transferring context: 42B                                                                  0.0s
 => CACHED [2/9] RUN sed -i -e 's/archive.ubuntu.com/old-releases.ubuntu.com/g' /etc/apt/sources  0.0s
 => CACHED [3/9] RUN sed -i -e 's/security.ubuntu.com/old-releases.ubuntu.com/g' /etc/apt/source  0.0s
 => ERROR [4/9] RUN apt-get update && apt-get install -y  bash  vim  build-essential  gcc-4.4  g  0.2s
------                                                                                                 
 > [4/9] RUN apt-get update && apt-get install -y 	bash 	vim 	build-essential 	gcc-4.4 	gcc-multilib 	g++-4.4 	perl 	wget 	patch 	libncurses5-dev 	libx11-dev libxrandr-dev xorg-dev 	make:
0.202 qemu: uncaught target signal 11 (Segmentation fault) - core dumped
0.206 E: Method http has died unexpectedly!
0.207 E: Sub-process http received a segmentation fault.
------

 1 warning found (use docker --debug to expand):
 - InvalidBaseImagePlatform: Base image ubuntu:12.04 was pulled with platform "linux/amd64", expected "linux/arm64" for current build (line 1)
Dockerfile:6
--------------------
   5 |     
   6 | >>> RUN apt-get update && apt-get install -y \
   7 | >>> 	bash \
   8 | >>> 	vim \
   9 | >>> 	build-essential \
  10 | >>> 	gcc-4.4 \
  11 | >>> 	gcc-multilib \
  12 | >>> 	g++-4.4 \
  13 | >>> 	perl \
  14 | >>> 	wget \
  15 | >>> 	patch \
  16 | >>> 	libncurses5-dev \
  17 | >>> 	libx11-dev libxrandr-dev xorg-dev \
  18 | >>> 	make
  19 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c apt-get update && apt-get install -y \tbash \tvim \tbuild-essential \tgcc-4.4 \tgcc-multilib \tg++-4.4 \tperl \twget \tpatch \tlibncurses5-dev \tlibx11-dev libxrandr-dev xorg-dev \tmake" did not complete successfully: exit code: 100

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/307xpyqphklv4cd5fc8tmb1eg
```

### Rosetta 키기

내가 전에 핀토스 미리 해보려고 블로그 찾아보다가 이 설정을 꺼야 x86으로 확실하게 돌아간다고 해서 꺼놨었는데, 이거 키니까 잘 된다.

{% include figure.liquid loading="eager" path="files/2025-03-20-pintos-setting/image.png" class="img-fluid rounded z-depth-1" zoomable=true %}

이전에 핀토스 미리 해보려고 할때, 어떤 블로그 보고 

저걸 꺼야 x86으로 정확히 작동한다고 해서 꺼놨었는데, 이게 문제였다.

> Docker에서는 `--platform=linux/amd64` 옵션으로 x86 이미지를 실행할 때, 내부적으로 QEMU를 이용해 에뮬레이션함.
> 
> 
> 이때 Rosetta를 활성화하면 QEMU가 더 안정적이고 빠르게 동작함. 특히 오래된 리눅스 이미지(Ubuntu 12.04 같은 거)에서 apt-get이 죽거나 세그폴트 나는 경우, 대부분 Rosetta 꺼져 있어서 생기는 문제임.
> 

### 빌드 성공

```bash
docker build --platform=linux/amd64 -t pintos .
```

{% include figure.liquid loading="eager" path="files/2025-03-20-pintos-setting/image%201.png" class="img-fluid rounded z-depth-1" zoomable=true %}

# Start

```bash
wget [http://www.stanford.edu/class/cs140/projects/pintos/pintos.tar.gz](http://www.stanford.edu/class/cs140/projects/pintos/pintos.tar.gz)
```

```bash
tar xvf pintos.tar.
```

### 파일 권한 에러 해결

진짜 이거때문에 개고생했음…

Stanford에서 받은 파일이 권한이 없는 채로 주는데,

윈도우에서는 원래 상관이 없어서 괜찮은데,

맥에서는 실행 불가능한채로 압축이 풀어져서 문제가 발생함.

근데 이게 또 이 상태로 Docker로 옮겨서 그냥 Permission Denied 해버리니까

이게 도대체 왜 그런지 GPT 써도 잘 몰랐음.

Docker 넘어가기 전부터 원본 파일 권한이 부족해서 그런건데 Docker 파일 공유 방식때문인줄알고 삽질함

```bash
xattr -rc pintos/
```

```bash
chmod -R u+rwX,go+rX pintos/
```

```bash
find pintos/ -type f -exec ls -l {} \;
```

위 명령어 하면 아래처럼 file permission이 뜸

```bash
-rw-r--r--@ 1 hoon  staff  333  9 27  2012 pintos//src/Makefile.kernel
-rwxr-xr-x@ 1 hoon  staff  1486  9 27  2012 pintos//src/misc/bochs-2.2.6-build.sh
-rw-r--r--@ 1 hoon  staff  511  9 27  2012 pintos//src/misc/bochs-2.2.6-solaris-link.patch
```

여기 보면 실행 가능한 파일 (.sh) 파일 등에 x 표시가 생길것임.

또는 실행 가능한 파일만 권한 보려면

```bash
find pintos/ -type f -perm -111 -exec ls -l {} \;
```

아래처럼 됐다면 성공

```bash
-rwxr-xr-x@ 1 hoon  staff  1486  9 27  2012 pintos//src/misc/bochs-2.2.6-build.sh
-rwxr-xr-x@ 1 hoon  staff  4096  9 27  2012 pintos//src/tests/make-grade
-rwxr-xr-x@ 1 hoon  staff  2951  9 27  2012 pintos//src/utils/backtrace
-rwxr-xr-x@ 1 hoon  staff  4563  9 27  2012 pintos//src/utils/pintos-mkdisk
-rwxr-xr-x@ 1 hoon  staff  429  9 27  2012 pintos//src/utils/pintos-gdb
-rwxr-xr-x@ 1 hoon  staff  29821  9 27  2012 pintos//src/utils/pintos
```

### 컨테이너 들어가기 전에 로컬에서 편하게 `bochs` 파일 수정

`pintos/src/misc/bochs-2.2.6-build.sh`

{% include figure.liquid loading="eager" path="files/2025-03-20-pintos-setting/image%202.png" class="img-fluid rounded z-depth-1" zoomable=true %}

- 다음 내용으로 수정

```bash
CFGOPTS="--enable-cpu-level=6 --with-x --with-x11 --with-term --with-nogui --prefix=$DSTDIR"
```

# docker run

드디어 제대로 실행해보자.

```bash
docker run --platform=linux/amd64 -it -p 80:80 \
	-v /Users/hoon/github/os20201118_20201032/pintos:/root/pintos \
	--name pintos pintos
```

# boch 2.6.6 설치

- 위에서 VSCode로 bochs 수정 안했다면
    
    ```bash
    cd pintos/src/misc
    ```
    
    ```bash
    vi bochs-2.2.6-build.sh
    ```
    
    > i : 수정 모드
    수정...
    ESC : 수정 모드 나가기
    :wq : 저장 후 종료
    > 
    - 다음 내용으로 수정
    
    ```bash
    CFGOPTS="--enable-cpu-level=6 --with-x --with-x11 --with-term --with-nogui --prefix=$DSTDIR"
    ```
    

> 📢
> 
> 만약 Container를 삭제해서 다시 Run한다면 이 과정을 다시 해줘야한다.
> 
{: .block-warning }

```bash
cd /root/pintos/src/misc
```

```bash
env SRCDIR=/root/ PINTOSDIR=/root/pintos/ DSTDIR=/usr/local ./bochs-2.2.6-build.sh
```

```bash
which bochs
bochs -v
```

# Test

```bash
cd /root/pintos/src/threads
```

```bash
make
```

```bash
cd build
```

```bash
pintos -q run alarm-multiple
```

{% include figure.liquid loading="eager" path="files/2025-03-20-pintos-setting/image%203.png" class="img-fluid rounded z-depth-1" zoomable=true %}

# github repo 생성

[[https://github.com/hoonably/os20201118_20201032](https://github.com/hoonably/os20201118_20201032)](https://github.com/hoonably/os20201118_20201032)

# root/pintos/src 에서 시작하기

할때마다 root 폴더에서 시작하는방법

한번 쳐주면 항상 적용됨.

도커파일에 다음 줄을 넣어도 되긴 함.

```docker
WORKDIR /root/pintos/src
```

근데 이미 빌드했으니 아래 명령어를 컨테이너 내부에서 치면 됨

```bash
echo 'cd /root/pintos/src' >> ~/.bashrc
```

- 이후 bashrc 상황
    
    ```bash
    cat ~/.bashrc
    ```
    
    ```bash
    ... 맨 아래줄에 다음 두줄이 있으면 성공
    export PATH="$PATH:/root/pintos/src/utils"
    cd /root/pintos/src
    
    ```
    

# 한번 Run 이후 Container 시작

{% include figure.liquid loading="eager" path="files/2025-03-20-pintos-setting/image%204.png" class="img-fluid rounded z-depth-1" zoomable=true %}

컨테이너에서 `exit` 를 했다면,

위처럼 Container는 남아있고, 중지되어있을 것이다.

```bash
docker start -ai pintos
```

나중에 또 같은 방식으로 `exit` 하고 반복하면 된다.

# Branch

## 브랜치 생성

```bash
git checkout -b [your-branch-name]
```

```bash
git checkout -b feat/alarm-clock
```

---

### 📤 만든 브랜치를 GitHub에 푸시

```bash
git push -u origin [your-branch-name]
```

```bash
git push -u origin feat/alarm-clock
```

- `u` 옵션은 이후 `git push`/`pull` 시 브랜치 이름 생략 가능하게 연결해줌
- 다음부터 그냥 push 해도 됨.

- 왜 `feat/` 를 쓰는가?
    
    ✅ 브랜치 이름 패턴
    
    | Prefix | 의미 | 예시 브랜치명 |
    | --- | --- | --- |
    | `feat/` | 새로운 기능 추가 | `feat/alarm-clock` |
    | `fix/` | 버그 수정 | `fix/overflow-bug` |
    | `refactor/` | 코드 리팩토링 (기능 변화 X) | `refactor/thread-init` |
    | `test/` | 테스트 코드 추가/수정 | `test/userprog-tests` |
    | `doc/` | 문서, README 수정 | `doc/setup-instructions` |
    | `chore/` | 빌드, 설정 변경 등 잡일 | `chore/dockerfile-update` |
    | `hotfix/` | 급한 버그 수정 (배포 후) | `hotfix/build-crash` |
    
    ---
    
    ✅ 왜 이렇게 쓰나?
    
    - 협업 중에 브랜치가 많아질 때 → **이름만 보고 용도 파악 가능**
    - GitHub Pull Request에서 **자동 정렬이나 필터도 편리함**
    - 팀 내부에서 **일관된 스타일 유지 가능**
    - 일부 자동화 도구(CI/CD, Release notes)와도 잘 호환됨

- VSCode에서 한다면 이렇게 커밋 어디에 하는건지 확인해 볼 수 있음

{% include figure.liquid loading="eager" path="files/2025-03-20-pintos-setting/image%205.png" class="img-fluid rounded z-depth-1" zoomable=true %}

# Github Pull 이후 Error

이건 맥에서 발생한 것은 아니고, 팀원 윈도우에서 git pull 해온 후 .sh 파일을 실행했을 때 나는 문제다.

```bash
root@04fedab3f530:~/pintos/src/misc# env SRCDIR=/root/ PINTOSDIR=/root/pintos/ DSTDIR=/usr/local bash ./bochs-2.2.6-build.sh

./bochs-2.2.6-build.sh: line 2: $'\r': command not found
./bochs-2.2.6-build.sh: line 41: syntax error: unexpected end of file
```

1. **`$'\r': command not found`**
    
    이 메시지는 파일이 **Windows 스타일 줄바꿈 (CRLF)** 으로 저장되어 있어서 발생하는 것입니다. 유닉스/리눅스에서는 **LF (\n)** 줄바꿈만 사용해야 하므로, 이 스크립트는 리눅스에서 직접 실행되기 전에 포맷을 변환해야 합니다.
    
2. **`syntax error: unexpected end of file`**
    
    줄바꿈 문제로 인해 쉘이 스크립트의 구조를 제대로 해석하지 못해 끝부분에서 문법 오류가 발생한 것입니다.
    

- 윈도우에서 git을 설치하면 기본적으로 다음 설정인데, 이게 문제다.

```bash
core.autocrlf=true
```

이 설정은:

- **clone/pull 할 때 → CRLF로 변환**
- commit/push 할 때 → LF로 되돌림

즉, 친구가 pull할 때 `.sh` 파일이 CRLF로 바뀌어버린 것이다.

Docker 우분투 컨테이너는 리눅스니까 CRLF 해석 못 함 → 에러 발생

### 해결방법 ⭐️

```bash
git config --global core.autocrlf  # 현재 설정 확인
```

| 결과 | 의미 |
| --- | --- |
| `true` | 윈도우용: pull할 때 CRLF, push할 때 LF |
| `input` | 맥/리눅스용: pull할 때 LF 유지, push할 때 LF |
| (아무것도 없음) | 기본값 사용 중 (보통 OS에 따라 다르게 작동) |<br>- `input` 으로 변경하기

```bash
git config --global core.autocrlf input
```

### 이미 받은 파일 고치기

그냥 직접 줄바꿈 스타일을 바꿔주는거다.

근데 .sh파일 다른것도 많고 이건 그냥 임시방편이니 다시 pull하는걸 추천.

```bash
sed -i 's/\r$//' bochs-2.2.6-build.sh
```

# FF?

VSCode로 보면 다음과 같이 FF가 들어간 신기한 문자가 있다.

{% include figure.liquid loading="eager" path="files/2025-03-20-pintos-setting/image%206.png" class="img-fluid rounded z-depth-1" zoomable=true %}

이 `FF`는 **Form Feed (줄 바꿈 명령 중 하나)**

ASCII 코드로는 `0x0C` (또는 `^L`) 이고, 

터미널에서는 **페이지 넘김** 역할을 하던 예전 문자

---

- 예전 교재/에디터에서 복붙한 코드
- 누군가 `.c` 파일에 `^L` 넣어서 구분자처럼 쓰던 습관
- 핀토스나 오래된 유닉스 기반 코드에서 가끔 보임.
- VS Code가 특별히 보여주는 거고, **오류는 아님**