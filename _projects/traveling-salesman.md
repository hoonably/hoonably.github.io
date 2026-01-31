---
layout: pagein
title: TSP Algorithm
description: Designed and implemented classical TSP algorithms (Held–Karp, MST, Greedy) and a novel MCMF-based heuristic.
img: assets/img/projects/tsp.webp
importance: 6
category: Academic
github: https://github.com/hoonably/traveling-salesman
document: https://jeonghoonpark.com/traveling-salesman/
github_stars: false
related_publications: false
giscus_comments: true
pretty_table: true

pseudocode: true
toc:
  beginning: false  # 맨 앞에 목차
  sidebar: false
---


{% include repository_card.liquid repo_name="hoonably/traveling-salesman" %}

---

<div style="position: relative; width: 100%; padding-top: 100%; overflow: hidden;">
  <iframe 
    src="https://drive.google.com/file/d/12tSDaqOQBxmZuvWdnXFyJrRk77va2EH5/preview"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>

---

### 💬 Thoughts

The most fun part of this project was coming up with my own algorithm instead of just using an existing one. I used MCMF to get a global structure and layered 2-opt on top to improve the tour quality — it didn’t feel like I was just solving a homework problem, it actually felt like I was solving *a problem*.

I always knew TSP was NP-hard, but running an exact algorithm like Held-Karp myself really hit it home. Now I get why people obsess over polynomial time — with exponential time, just increasing the number of cities a bit makes the whole thing blow up. It made me realize why algorithm research actually matters.

At first, I naïvely thought Held-Karp would run fine for something like 200 cities. I let it run, waited... and it never finished. Then I realized 2^200 is an insane number. I even asked GPT if my code had a bug, and it politely roasted me saying there’s no bug — it’s just that even if you had all the computers in the universe, it still wouldn’t finish. That was humbling.

The most surprising part? Problems like Mona Lisa 100K are still being worked on. I thought these had all been solved ages ago, but people are still out there breaking records and trying new ideas. It’s wild and kind of inspiring that there’s still progress being made on such a classic problem.

That said, I wasn’t really happy with my final results. I ran into unexpected issues and had to force 2-opt in just to get something that worked. I didn’t love that, but it was already too late to start over, so I just rolled with it. Still, the project felt different from typical assignments — I got to design something of my own and compare it head-to-head with existing algorithms. That part was really cool.

---

### 💬 느낀 점

이번 프로젝트에서 제일 재밌었던 건, 그냥 있는 알고리즘을 쓰는 게 아니라 직접 아이디어 짜서 구현해봤다는 것이다. MCMF로 전체 흐름 잡고, 그 위에 2-opt 붙여서 투어 품질 높이는 방식으로 해봤는데, 단순히 과제 푸는 느낌이 아니라서 재밌었다.

TSP가 **NP-hard**하다는 건 알고는 있었는데, Held-Karp 같은 정확한 알고리즘을 직접 돌려보니까 깜짝 놀랐다. 왜그렇게 **Polynomial Time**에 환장하는지 알 것 같다. 지수시간이 되니까 도시 수 조금만 늘어나도 감당 안 되는 걸 보면서 실제로 알고리즘을 왜 연구하는지 느끼게 되었다.

사실 처음에 Held-Karp도 200짜리는 돌아갈줄알고 돌렸는데 안끝나길래 생각해보니까, 2^200은 엄청난 숫자였다. 생각없이 돌리고 GPT한테 코드 오류있냐고 물어봤는데, 오류 없고, **2^200은 우주에 있는 모든 컴퓨터 가져와서 돌려도 안끝난다고 나한테 꼽**을 줘서 쪽팔렸다.

제일 인상 깊었던 건, 모나리자 100K처럼 엄청 오래된 TSP 문제들도 아직도 사람들이 더 좋은 해답 찾으려고 노력하고 있다는 것이다. 이미 다 연구됐을 줄 알았는데, 여전히 기록이 깨지고 있다는 게 놀라웠고, 계속 누군가는 노력하는게 멋졌다.

근데 결과가 너무 별로였고, 생각 외의 문제가 발생해서 억지로 2-opt 끼워서 좀 맘에 안들었다. 하지만 도저히 다른 방법을 생각하기에는 늦어서 계속 했던 것 같다.
평범한 과제 느낌이 아니라 나만의 알고리즘을 만들고 이미 존재하는 알고리즘과 성능비교를 해보는게 색달라서 재밌었다.
