---
layout: notion
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
<div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81c5-8021-db44330fb479">국가 돈낭비 중 하나인 연구실 안전교육을 아마 매학기 해야하는데 정말 귀찮다.</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8140-adee-cbdefd300240">특히 컴공은 정말 쓸데없는 듯 하다.</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-811a-aea7-fb93c0d789bc">
</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8142-9d33-c1674e33c3c2">알 사람은 알지만 스킵하는 방법이 있다.</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81e6-9d90-c162da623ded">
</p></div><div dir="auto" style="display:contents"><h3 class="" id="1d0451cf-7b79-819a-812b-ee6b8ddfb554">1. 동영상 틀기</h3></div><div dir="ltr" style="display:contents"><figure class="image" id="1d0451cf-7b79-81d8-a700-feddc1b2807f"><picture><img class="img-fluid rounded z-depth-0" data-zoomable="" loading="eager" onerror="this.onerror=null; $('.responsive-img-srcset').remove();" src="/files/2025-04-04-lab-safety/image.webp" style="width:2264px"/></picture></figure></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-817a-b0eb-dea9a7de7af5">
</p></div><div dir="auto" style="display:contents"><h3 class="" id="1d0451cf-7b79-8121-9bf7-d1a4ad3a9c30">2. 개발자 모드 진입</h3></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81e7-80b5-def9ea1067c4">Window : <code>F12</code> </p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8155-8375-f724c8c00647">Mac : <code>cmd+opt+I</code> </p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8132-a41c-fa6b60dbdbeb">
</p></div><div dir="auto" style="display:contents"><h3 class="" id="1d0451cf-7b79-810a-842e-ddcfbc0520bd">3. Console 창 진입</h3></div><div dir="ltr" style="display:contents"><figure class="image" id="1d0451cf-7b79-8106-ae7b-dafce450df4e"><picture><img class="img-fluid rounded z-depth-1" data-zoomable="" loading="eager" onerror="this.onerror=null; $('.responsive-img-srcset').remove();" src="/files/2025-04-04-lab-safety/image%201.webp" style="width:709.984375px"/></picture></figure></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-816e-be33-fdfbc8363400">
</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81fd-9eeb-d4c1897a0d53">
</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-819b-b536-dfb7c26102c1">이제 Console 창에 아래 내용을 붙여넣기 하고 <code>Enter</code> 누르면 된다.</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8109-84a5-de119134e1fb">
</p></div><div dir="auto" style="display:contents"><ul class="toggle" id="1d0451cf-7b79-811a-88ad-d509fc977ed7"><li><details><summary>만약 Console에 붙여넣기가 불가능하다고 뜬다면?</summary><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8191-bc39-ce34ed4e0f71">다음 내용을 직접 타이핑으로 입력 후 <code>Enter</code></p></div><div dir="auto" style="display:contents">
<pre><code class="language-javascript">allow pasting</code></pre>
</div></details></li></ul></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81f8-8d05-c4756c8f730a">
</p></div><div dir="auto" style="display:contents"><h3 class="" id="1d0451cf-7b79-81ee-bf66-ed8199e1e2e4">4-1. ProgressCheck (바로 종료)</h3></div><div dir="auto" style="display:contents">
<pre><code class="language-javascript">progressCheck(true)</code></pre>
</div><div dir="auto" style="display:contents"><h3 class="" id="1d0451cf-7b79-81be-8823-e79e46336bba"><br/>4-2. 6000초 건너뛰기 (바로 종료)</h3></div><div dir="auto" style="display:contents">
<pre><code class="language-javascript">document.querySelector('video').currentTime+=6000;</code></pre>
</div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8104-9d1a-fc0c0d0cba28">
</p></div><div dir="auto" style="display:contents"><h3 class="" id="1d0451cf-7b79-8123-ac31-ff7b1b4040c4">4-3. 16배속 (위 건너뛰기 방법이 안된다면)</h3></div><div dir="auto" style="display:contents">
<pre><code class="language-javascript">document.querySelector('video').playbackRate = 16;</code></pre>
</div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81b8-bdfd-d1475fb976d4">
</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81e9-b0da-fb66e2c35c1d">
</p></div><div dir="auto" style="display:contents"><h3 class="" id="1d0451cf-7b79-8174-aa30-d4efd7ec601c">5. 퀴즈 정답</h3></div><div dir="auto" style="display:contents">
<pre><code class="language-javascript">for (var i = 0; i &lt; 10; i++){
	answer = $("#qustionCorrectNo_" + i).val();
	$("input[name='qustionAnswerList["+i+"].Answer']:radio[value="+answer+"]").attr("checked", true);
}</code></pre>
</div><div dir="ltr" style="display:contents"><figure class="image" id="1d0451cf-7b79-811e-a718-c94d274add1d"><picture><img class="img-fluid rounded z-depth-0" data-zoomable="" loading="eager" onerror="this.onerror=null; $('.responsive-img-srcset').remove();" src="/files/2025-04-04-lab-safety/image%202.webp" style="width:3424px"/></picture></figure></div><div dir="ltr" style="display:contents"><figure class="image" id="1d0451cf-7b79-8150-8c42-ee38216310f9"><picture><img class="img-fluid rounded z-depth-1" data-zoomable="" loading="eager" onerror="this.onerror=null; $('.responsive-img-srcset').remove();" src="/files/2025-04-04-lab-safety/image%203.webp" style="width:709.9921875px"/></picture></figure></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81c0-ad25-ffc988b2b27b">
</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8141-a61b-e43480e80d8f">
</p></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-81a2-87ea-d254b33a8d22">
</p></div><div dir="ltr" style="display:contents"><figure class="image" id="1d0451cf-7b79-81a9-ab31-c9b39168c973"><picture><img class="img-fluid rounded z-depth-1" data-zoomable="" loading="eager" onerror="this.onerror=null; $('.responsive-img-srcset').remove();" src="/files/2025-04-04-lab-safety/image%204.webp" style="width:709.984375px"/></picture></figure></div><div dir="auto" style="display:contents"><p class="" id="1d0451cf-7b79-8117-8918-d11a5c273cb1">
</p></div><span class="sans" style="font-size:14px;padding-top:2em"></span>