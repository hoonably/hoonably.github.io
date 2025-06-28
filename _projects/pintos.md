---
layout: pagein
title: Pintos
description: Implements the PintOS OS with priority scheduling, system calls, virtual memory, and a growable file system using indexed and sparse allocation.
img: assets/img/projects/pintos.png
importance: 1
category: Academic
related_publications: false
giscus_comments: true
pretty_table: true
---

> **💻 Project Page:** [https://github.com/hoonably/pintos](https://github.com/hoonably/pintos)  
{: .block-tip }

---

## Project 1: Threads

### 문제

* 기본 PintOS 스레드 시스템은 우선순위 기반 스케줄링이 구현되어 있지 않고, 동기화와 우선순위 역전(priority inversion)을 고려하지 않음.

### 해결한 내용

* **Priority Scheduling** 구현
  → 각 스레드는 우선순위를 갖고, 높은 우선순위를 먼저 실행하도록 함.
* **Priority Donation** 적용
  → 우선순위 역전을 방지하기 위해 락을 보유한 스레드에 우선순위를 임시로 "기부"하는 구조 구현.
* **Nested Donation** 처리
  → 락이 중첩된 상황에서도 donation이 올바르게 전달되도록 구현.

---

## Project 2-1: User Programs (System Calls)

### 문제

* PintOS는 유저 프로세스를 실행할 수 있으나, 시스템 콜이 제대로 정의되지 않음.
* 파일 I/O, 프로세스 제어 등 기본적인 유저-커널 상호작용이 미구현 상태.

### 해결한 내용

* **System Call Handler** 구현
  → `syscall.c`에서 system call dispatcher를 구현하고, syscall 번호 기반으로 처리.
* **파일 시스템 호출 지원**
  → `open`, `read`, `write`, `create`, `close` 등의 기본 파일 조작 구현.
* **User Pointer Validation**
  → 사용자로부터 들어오는 포인터가 유효한지 검사하여 kernel crash 방지.
* **Argument Fetching**
  → 시스템 콜 호출 시, 유저 스택에서 인자를 안전하게 추출하는 로직 구현.

---

## Project 2-2: User Programs (Process Control)

### 문제

* PintOS는 프로세스를 생성하거나 종료할 수 있으나, 부모-자식 간의 동기화 및 자원 회수가 미흡함.

### 해결한 내용

* **`exec`, `wait`, `exit` 구현**
  → 부모 프로세스가 자식의 실행 완료를 기다릴 수 있도록 wait 메커니즘 추가.
* **Load/Execution 성공 여부 전달**
  → 자식 프로세스의 실행 성공 여부를 부모에게 전달하는 구조 구현.
* **File Descriptor Table 관리**
  → 프로세스마다 독립적인 FD 테이블을 유지하고, 파일 공유 제어를 추가.
* **Exit status 저장 및 회수**
  → 종료 상태를 부모가 정확히 회수하도록 구현.

---

## Project 3: Virtual Memory

### 문제

* 기본 PintOS는 demand paging, swapping, mmap 등을 지원하지 않으며, 모든 페이지를 고정적으로 메모리에 적재.

### 해결한 내용

* **Frame Table** 구현
  → 사용자 페이지를 담는 프레임 관리 테이블 구현.
* **Supplemental Page Table (SPT)**
  → 각 페이지의 정보를 보관하는 자료구조 구현 (Hash 기반).
* **Page Fault Handler**
  → 실행 중 없는 페이지 접근 시, 해당 정보를 SPT에서 찾아서 물리 페이지 할당 및 로드.
* **Swapping 구현**
  → 메모리가 부족할 경우, 페이지를 디스크로 교체(swap out) 후 나중에 다시 불러옴(swap in).
* **Page Replacement Policy**
  → Second Chance 알고리즘으로 교체 대상 페이지 선택.
* **Stack Growth**
  → 유저 스택이 동적으로 확장되도록 구현 (8MB 제한).
* **Memory-Mapped File (mmap/munmap)**
  → 파일을 메모리에 직접 매핑하여 lazy loading 및 저장 구현.

---

## Project 4: File System Extension

### 문제

* 기존 PintOS 파일 시스템은 고정 크기 파일만 지원하며, EOF 이후 쓰기가 불가능하고, 공간 낭비(외부 단편화)가 큼.

### 해결한 내용

* **Extensible File Structure 구현**
  → 쓰기 요청 시 파일이 자동으로 확장되도록 inode 구조 변경.
* **Indexed Allocation**
  → direct, indirect, double indirect 블록 구조를 사용하여 최대 파티션 크기까지 지원 가능하도록 개선.
* **Sparse File 지원**
  → 빈 영역은 실제로 블록을 할당하지 않고 읽을 때만 초기화하여 효율적인 공간 사용.
* **Block Allocation Strategy 변경**
  → 파일이 조각나더라도 할당 가능하도록 외부 단편화 해소.
* **Grow 관련 테스트 7종 통과**
  → grow-create, grow-file-size, grow-sparse 등 다양한 테스트 케이스를 통과하도록 구현.

---
