---
layout: pagein
title: Pintos
description: Implemented core OS components based on Stanford’s Pintos project.
img: assets/img/projects/pintos.webp
importance: 4
category: Academic
github: https://github.com/hoonably/pintos
github_stars: false
document: 
related_publications: false
giscus_comments: true
pretty_table: true

toc:
  beginning: false  # 맨 앞에 목차
  sidebar: false
---

<div class="repo p-2 text-center">
  <a href="https://github.com/hoonably/pintos" rel="external nofollow noopener" target="_blank">
    <img class="only-light w-100" alt="hoonably/pintos" src="https://github-readme-stats.vercel.app/api/pin/?username=hoonably&amp;repo=pintos&amp;theme=default&amp;locale=en&amp;show_owner=false&amp;description_lines_count=2">
    <img class="only-dark w-100" alt="hoonably/pintos" src="https://github-readme-stats.vercel.app/api/pin/?username=hoonably&amp;repo=pintos&amp;theme=dark&amp;locale=en&amp;show_owner=false&amp;description_lines_count=2">
  </a>
</div>

**🤝 Contributors** 
- Jeonghoon Park · [@hoonably](https://github.com/hoonably)
- Deokhyeon Kim · [@dh28be](https://github.com/dh28be)

### 📂 Project 1 – Threads (Partial Implementation)

Manual: [Pintos Project 1](https://web.stanford.edu/class/cs140/projects/pintos/pintos_2.html#SEC20)

This project involved modifying the thread scheduler and timer mechanisms in PintOS.
We implemented the **alarm clock** and **priority-based scheduling**, but **priority donation** was not included as it was optional.

#### 📌 Related Code

* `threads/thread.c`, `threads/thread.h` – Alarm list logic, priority-aware scheduling (`thread_set_priority()`, `thread_get_priority()`)
* `devices/timer.c` – Reimplemented `timer_sleep()` using sleep queue
* `lib/kernel/list.c` – Priority comparison for thread queue ordering

---

### 📂 Project 2 – User Programs (Full Implementation)

Manual: [Pintos Project 2](https://web.stanford.edu/class/cs140/projects/pintos/pintos_3.html#SEC32)

This project consisted of two parts:

* **2-1: Argument passing, system call framework, and basic file I/O**
* **2-2: Full implementation of user-level system calls**

The final submission includes both phases, with complete support for all required functionality and test cases.

#### 📌 Related Code

* `userprog/process.c` – Executable loading, argument stack setup, and child process tracking
* `userprog/syscall.c` – System call interface: `read`, `write`, `exec`, `wait`, `remove`, `filesize`, `seek`, `tell`, etc.
* `lib/user/syscall.c` – User-space syscall interface
* `lib/string.c`, `threads/thread.c` – String helpers, per-thread file descriptor table
* `filesys/file.c`, `filesys/inode.c` – Backend logic used by syscall layer for file operations

---

### 📂 Project 3 – Virtual Memory (Partial Implementation)

Manual: [Pintos Project 3](https://web.stanford.edu/class/cs140/projects/pintos/pintos_4.html#SEC53)

This project required implementing virtual memory features such as supplemental page tables, demand paging, stack growth, and swapping.
Due to time constraints, only **a subset of core VM functionality** was implemented, focusing on demand paging and stack growth.

#### 📌 Related Code

* `vm/frame.c`, `vm/frame.h` – Frame table and eviction policy
* `vm/page.c`, `vm/page.h` – Supplemental page table, lazy loading, and memory tracking
* `vm/swap.c`, `vm/swap.h` – Swap disk interface and slot management
* `userprog/exception.c` – Page fault handler
* `userprog/process.c` – Stack growth and lazy segment loading

> 📌 All code in the `vm/` directory was written from scratch, as the directory is empty by default.

---

### 📂 Project 4 – File Systems (Partial Implementation)

Manual: [Pintos Project 4](https://www.scs.stanford.edu/10wi-cs140/pintos/pintos_5.html#SEC75)

This extra credit project focused solely on file growth features, omitting full file system extensions due to time constraints.

> 🧭 Note: This project was not based on Project 3 (Virtual Memory).
> It was branched directly from the final state of Project 2, as it only required file system enhancements unrelated to virtual memory.

#### 📌 Related Code  
* `filesys/inode.c` – Indexed inode (direct + single indirect), dynamic growth, and partial free logic

---

