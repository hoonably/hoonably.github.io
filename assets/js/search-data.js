// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub profile and repositories. Feel free to follow — I’m open to mutual follows and collaboration!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-various-techniques-in-al-folio",
        
          title: "Various techniques in al-folio",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/al-folio-tech/";
          
        },
      },{id: "post-ablation-study-란",
        
          title: "Ablation Study 란?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Ablation-Study/";
          
        },
      },{id: "post-컴퓨터구조-정리-및-문제모음",
        
          title: "[컴퓨터구조] 정리 및 문제모음",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/computer_architecture/";
          
        },
      },{id: "post-컴퓨터구조-메모리-총정리",
        
          title: "[컴퓨터구조] 메모리 총정리",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/memory/";
          
        },
      },{id: "post-백준-2024년-매일-백준-풀기-성공",
        
          title: "[백준] 2024년 매일 백준 풀기 성공",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/baekjoon365/";
          
        },
      },{id: "post-네트워크-플로우-network-flow",
        
          title: "네트워크 플로우 (Network-Flow)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/NetworkFlow/";
          
        },
      },{id: "post-백준-c-구슬-탈출-2-13460번",
        
          title: "[백준] [C++] 🔮 구슬 탈출 2 13460번",
        
        description: "Gold - 구현",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/PS-13460/";
          
        },
      },{id: "post-백준-다이아몬드-달성-및-tip",
        
          title: "[백준] 💎 다이아몬드 달성 및 Tip",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/solvedac-Diamond/";
          
        },
      },{id: "post-백준-c-가르침-1062번",
        
          title: "[백준] [C++] 👨‍🏫 가르침 1062번",
        
        description: "Gold - bitmasking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/teaching-1062/";
          
        },
      },{id: "post-vscode-code-runner을-위한-setting-json-설정",
        
          title: "[VSCode] Code Runner을 위한 setting.json 설정",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Code-Runnder-Setting/";
          
        },
      },{id: "post-c-c-버전-체크-방법",
        
          title: "[C++] C++ 버전 체크 방법",
        
        description: "Gold - bitmasking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/C++-version-check/";
          
        },
      },{id: "post-c-c-2진수-8진수-16진수-표기법",
        
          title: "[C++, C] 2진수, 8진수, 16진수 표기법",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/use-bit/";
          
        },
      },{id: "post-백준-c-보석-도둑-1202번",
        
          title: "[백준] [C++] 💎 보석 도둑 1202번",
        
        description: "Gold - Greedy",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/thief-1202/";
          
        },
      },{id: "post-백준-c-경찰차-2618번",
        
          title: "[백준] [C++] 🚓 경찰차 2618번",
        
        description: "Platinum - DP",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Police-car-2618/";
          
        },
      },{id: "post-백준-c-n-queen-hard-30243번",
        
          title: "[백준] [C++] 🧩 N-Queen (Hard) 30243번",
        
        description: "Diamond 5 - Bitmasking, Backtracking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/N-Queen-Hard/";
          
        },
      },{id: "post-백준-python-n-queen-easy-30242번",
        
          title: "[백준] [Python] 🧩 N-Queen (Easy) 30242번",
        
        description: "Gold 3 - Backtracking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/N-Queen-Easy/";
          
        },
      },{id: "post-백준-python-️-n-queen-9663번",
        
          title: "[백준] [Python] ♟️ N-Queen 9663번",
        
        description: "Gold 4 - Backtracking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/N-Queen-9663/";
          
        },
      },{id: "post-sql로-간소한-카카오뱅크-데이터베이스-만들어보기",
        
          title: "SQL로 간소한 카카오뱅크 데이터베이스 만들어보기",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/SQL-kakaobank/";
          
        },
      },{id: "post-시간-복잡도-time-complexity",
        
          title: "시간 복잡도 (Time Complexity)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Time-Complexity/";
          
        },
      },{id: "post-java-string-stringbuffer-stringbuilder-bufferedwriter-비교",
        
          title: "[Java] String, StringBuffer, StringBuilder, BufferedWriter 비교",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Java-Buffer/";
          
        },
      },{id: "post-유클리드-호제법을-이용한-최대공약수-최소공배수",
        
          title: "유클리드 호제법을 이용한 최대공약수, 최소공배수",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/GCDLCM/";
          
        },
      },{id: "post-버블-정렬-bubble-sort",
        
          title: "버블 정렬 (Bubble Sort)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/Bubble-sort/";
          
        },
      },{id: "post-first-blog-test",
        
          title: "First blog test",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/first-blog-test/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-my-lifelong-boot-sequence",
          title: 'Started my lifelong boot sequence.',
          description: "",
          section: "News",},{id: "news-joined-ubiquitous-ai-lab-prof-taesik-gong-as-a-research-intern-sparkles-smile",
          title: 'Joined Ubiquitous AI Lab (Prof. Taesik Gong) as a research intern. :sparkles: :smile:...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-this-website-has-been-rebuilt-using-the-al-folio-jekyll-theme",
          title: 'This website has been rebuilt using the al-folio Jekyll theme.',
          description: "",
          section: "News",},{id: "projects-pintos",
          title: 'Pintos',
          description: "Implements the PintOS OS with priority scheduling, system calls, virtual memory, and a growable file system using indexed and sparse allocation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pintos/";
            },},{id: "projects-problem-solving",
          title: 'Problem Solving',
          description: "Solved algorithm problems every single day for a full year (1-year streak) on Baekjoon.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/problem-solving/";
            },},{id: "projects-sorting-algorithm",
          title: 'Sorting Algorithm',
          description: "Implementation and benchmarking of classic and modern sorting algorithms with a focus on performance, memory, and stability across diverse input patterns.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sorting-algorithm/";
            },},{id: "projects-tiny-llm",
          title: 'Tiny LLM',
          description: "Investigating LLMs that can run in resource-constrained environments (such as on-device) and analyzed the accuracy and inference time of each model through various evaluation sets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tinyllm/";
            },},{id: "projects-tsp-algorithm",
          title: 'TSP Algorithm',
          description: "Implements and evaluates classical and novel algorithms for the Traveling Salesman Problem, with a focus on flow-based cycle covers and local refinements.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/traveling-salesman/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%6F%6F%6E%61%62%6C%79@%75%6E%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hoonably", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/hoonably", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hoonably", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
