---
layout: post
title: "Python env (Conda, Homebrew)"
description:
date: 2025-02-17 16:26:20 +09:00
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

# Python → Python3 alias

alias는 말그대로 별칭을 설정해주는 명령어

python이라는 명령어를 실행하면 python3로 동작하도록 해라!는 의미

```bash
alias python=python3
```

# macOS 기본

- macOS 기본포함
- /usr/bin/python3 (비추천, 유지보수 어려움)
- 아래 패키지들은 macOS 기본 패키지라 지울 필요 없음

```bash
/usr/bin/python3 -m pip list
```

```bash
# 맥 기본 환경
Package    Version
---------- -------
altgraph   0.17.2
future     0.18.2
macholib   1.15.2
pip        25.0.1
setuptools 58.0.4
six        1.15.0
wheel      0.37.0
```

# ⭐ Homebrew

- brew install python으로 쉽게 설치 가능.
- 최신 Python 버전을 사용할 수 있음.
- /opt/homebrew/bin/python3에 설치됨
- `pip3`으로 패키지를 관리 가능하며, 시스템 기본 Python과 분리됨.
- 설치
    
    ```bash
    /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
    ```
    
- Homebrew를 기본으로 사용
    
    ```bash
    echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
    source ~/.zshrc
    ```
    
- 설치 확인
    
    ```bash
    which brew
    brew -v
    ```
    

# ⭐ Anaconda

- 데이터 과학, 머신러닝(ML), 과학 컴퓨팅 환경에 최적화됨.
- 패키지 관리가 쉽고, conda 명령어로 가상환경을 만들고 관리할 수 있음.
- Jupyter Notebook, SciPy, TensorFlow 등 주요 데이터 과학 라이브러리가 기본적으로 포함됨.
    
    → AI 관련 일을 할 때 가상환경을 만들어서 활용하자.
    

- homebrew를 통한 설치

 →  경로가 homebrew/anaconda 로 설치됨

```bash
brew install --cask anaconda 
```

```bash
# 설치 중 다음과 같은 내용이 콘다가 설치된 위치임
# 이 위치를 ~/.zshrc 파일에 추가
PREFIX=/opt/homebrew/anaconda3
```

- `~/.zshrc` 파일에 homebrew내용 주석처리하고 다음 추가
    
    ```bash
    # export PATH="/opt/homebrew/bin:$PATH"
    export PATH="/opt/homebrew/anaconda3/bin:$PATH"
    ```
    
- 설치 확인
    
    ```bash
    source ~/.zshrc
    which conda
    conda -V
    ```
    

## conda 가상환경

- 가상환경 생성

```bash
conda create --name <환경명> python=<파이썬 버전>
conda create --name py39 python=3.9
```

- 가상환경 활성화

```bash
conda activate <환경명>
conda activate py39
```

- 가상환경 비활성화

```bash
conda deactivate
```

- 가상환경 내 패키지 설치

```bash
conda install <패키지명>
```

- 가상환경 목록 확인

```bash
conda env list
```

- 가상환경 삭제

```bash
conda remove --name <환경명> --all
# conda remove --name py39 --all
```

- 이름변경 → 안됨 → 복제 후 삭제

```bash
conda create --name <새로운 환경> --clone <삭제할 환경>
conda remove --name <삭제할 환경> --all
```

### conda 초기화

```bash
conda init zsh
source ~/.zshrc
```

### 자동 콘다 실행 없애기 → 맥 기본 파이썬이 기본

```bash
# base 자동 활성화 끄기
conda config --set auto_activate_base false
source ~/.zshrc

# 반대는 true로 바꾸면 됨
```

### (base)만 표시 없애고 나머지는 (py36)처럼 뜨도록

다음 내용을 .zshrc에 저장

`conda config --set auto_activate_base false` 여야함

기본은 원래 맥 기본 파이썬인데, 2)에서 자동으로 base 활성화

```bash
# >>> base 환경에서만 (base) 숨기기 >>>
# 1) 초기 PS1 저장 (중복 방지용 체크)
if [ -z "$ORIGINAL_PS1" ]; then
    export ORIGINAL_PS1="$PS1"
fi
# 2) base 자동 활성화
conda activate base
# 3) base일 때만 (base) 표시를 숨기는 함수
function _conda_prompt_override() {
    if [[ $CONDA_DEFAULT_ENV == "base" ]]; then
        # base일 때 프롬프트를 원래 PS1으로 돌려서 (base) 숨기기
        PS1="$ORIGINAL_PS1"
    fi
    # base가 아닐 땐, (env_name)이 그대로 표시됨
}
# 4) Zsh의 precmd_functions에 등록
precmd_functions+=(_conda_prompt_override)
# <<< base 환경에서만 (base) 숨기기 <<<
```

```bash
source ~/.zshrc
```

# pyenv

여러 Python 버전을 관리해야 한다면 유용

```bash
pyenv (pyenv install <version>)
```