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
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Summaries and materials from my teaching and TA experiences.",
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
        },{id: "post-catp-contextually-adaptive-token-pruning-for-efficient-and-enhanced-multimodal-in-context-learning",
        
          title: "CATP: Contextually Adaptive Token Pruning for Efficient and Enhanced Multimodal In-Context Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/catp/";
          
        },
      },{id: "post-imagepiece-content-aware-re-tokenization-for-efficient-image-recognition",
        
          title: "ImagePiece: Content-aware Re-tokenization for Efficient Image Recognition",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/imagepiece/";
          
        },
      },{id: "post-adaskip-adaptive-sublayer-skipping-for-accelerating-long-context-llm-inference",
        
          title: "AdaSkip: Adaptive Sublayer Skipping for Accelerating Long-Context LLM Inference",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/adaskip/";
          
        },
      },{id: "post-ttrl-test-time-reinforcement-learning",
        
          title: "TTRL: Test-Time Reinforcement Learning",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ttrl/";
          
        },
      },{id: "post-test-time-learning-for-large-language-models",
        
          title: "Test-Time Learning for Large Language Models",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ttl-llm/";
          
        },
      },{id: "post-sana-efficient-high-resolution-image-synthesis-with-linear-diffusion-transformers",
        
          title: "SANA: Efficient High-Resolution Image Synthesis with Linear Diffusion Transformers",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/sana/";
          
        },
      },{id: "post-연구실-안전교육-스킵",
        
          title: "연구실 안전교육 스킵",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/lab-safety/";
          
        },
      },{id: "post-pintos-setting",
        
          title: "Pintos Setting",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/pintos-setting/";
          
        },
      },{id: "post-svdquant-absorbing-outliers-by-low-rank-components-for-4-bit-diffusion-models",
        
          title: "SVDQuant: Absorbing Outliers by Low-Rank Components for 4-Bit Diffusion Models",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/svdquant/";
          
        },
      },{id: "post-ablation-study-란",
        
          title: "Ablation Study 란?",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ablation-study/";
          
        },
      },{id: "post-python-env-conda-homebrew",
        
          title: "Python env (Conda, Homebrew)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/python-env/";
          
        },
      },{id: "post-pixart-σ-weak-to-strong-training-of-diffusion-transformer-for-4k-text-to-image-generation",
        
          title: "PixArt-Σ: Weak-to-Strong Training of Diffusion Transformer for 4K Text-to-Image Generation",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/pixart-sigma/";
          
        },
      },{id: "post-ds-store",
        
          title: ".DS_Store",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ds-store/";
          
        },
      },{id: "post-mlops",
        
          title: "MLOps",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/mlops/";
          
        },
      },{id: "post-zsh와-환경변수",
        
          title: "zsh와 환경변수",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/zsh/";
          
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
          
            window.location.href = "/blog/network-flow/";
          
        },
      },{id: "post-백준-c-구슬-탈출-2-13460번",
        
          title: "[백준] [C++] 🔮 구슬 탈출 2 13460번",
        
        description: "Gold - 구현",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ps-13460/";
          
        },
      },{id: "post-백준-다이아몬드-달성-및-tip",
        
          title: "[백준] 💎 다이아몬드 달성 및 Tip",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/solvedac-diamond/";
          
        },
      },{id: "post-백준-c-가르침-1062번",
        
          title: "[백준] [C++] 👨‍🏫 가르침 1062번",
        
        description: "Gold - bitmasking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ps-1062/";
          
        },
      },{id: "post-vscode-code-runner을-위한-setting-json-설정",
        
          title: "[VSCode] Code Runner을 위한 setting.json 설정",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/code-runner-setting/";
          
        },
      },{id: "post-c-c-버전-체크-방법",
        
          title: "[C++] C++ 버전 체크 방법",
        
        description: "Gold - bitmasking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/cpp-version-check/";
          
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
          
            window.location.href = "/blog/ps-1202/";
          
        },
      },{id: "post-백준-c-경찰차-2618번",
        
          title: "[백준] [C++] 🚓 경찰차 2618번",
        
        description: "Platinum - DP",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ps-2618/";
          
        },
      },{id: "post-백준-c-n-queen-hard-30243번",
        
          title: "[백준] [C++] 🧩 N-Queen (Hard) 30243번",
        
        description: "Diamond 5 - Bitmasking, Backtracking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ps-30243/";
          
        },
      },{id: "post-백준-python-n-queen-easy-30242번",
        
          title: "[백준] [Python] 🧩 N-Queen (Easy) 30242번",
        
        description: "Gold 3 - Backtracking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ps-30242/";
          
        },
      },{id: "post-백준-python-️-n-queen-9663번",
        
          title: "[백준] [Python] ♟️ N-Queen 9663번",
        
        description: "Gold 4 - Backtracking",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/ps-9663/";
          
        },
      },{id: "post-sql로-간소한-카카오뱅크-데이터베이스-만들어보기",
        
          title: "SQL로 간소한 카카오뱅크 데이터베이스 만들어보기",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/sql-kakaobank/";
          
        },
      },{id: "post-시간-복잡도-time-complexity",
        
          title: "시간 복잡도 (Time Complexity)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/time-complexity/";
          
        },
      },{id: "post-java-string-stringbuffer-stringbuilder-bufferedwriter-비교",
        
          title: "[Java] String, StringBuffer, StringBuilder, BufferedWriter 비교",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/java-buffer/";
          
        },
      },{id: "post-유클리드-호제법을-이용한-최대공약수-최소공배수",
        
          title: "유클리드 호제법을 이용한 최대공약수, 최소공배수",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/gcdlcm/";
          
        },
      },{id: "post-버블-정렬-bubble-sort",
        
          title: "버블 정렬 (Bubble Sort)",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/bubble-sort/";
          
        },
      },{id: "post-first-blog-test",
        
          title: "First blog test",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/first-blog-test/";
          
        },
      },{id: "news-started-my-lifelong-boot-sequence",
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
          section: "News",},{id: "projects-drone-exploration",
          title: 'Drone exploration',
          description: "Multi agent drone exploration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/drone-exploration/";
            },},{id: "projects-pigg",
          title: 'PIGG',
          description: "Personalized Interactive GUI Grounding",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pigg/";
            },},{id: "projects-pintos",
          title: 'Pintos',
          description: "Implemented core OS components based on Stanford’s Pintos project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pintos/";
            },},{id: "projects-problem-solving",
          title: 'Problem Solving',
          description: "Solved algorithm problems every single day for a full year (1-year streak) on Baekjoon.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/problem-solving/";
            },},{id: "projects-skip",
          title: 'SKiP',
          description: "SVM with K-nearest neighbor and Probabilistic weighting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skip/";
            },},{id: "projects-sorting-algorithm",
          title: 'Sorting Algorithm',
          description: "Implemented and benchmarked 12 sorting algorithms under various input conditions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sorting-algorithm/";
            },},{id: "projects-tiny-llm",
          title: 'Tiny LLM',
          description: "Explored LLM architectures optimized for resource-constrained environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tinyllm/";
            },},{id: "projects-tsp-algorithm",
          title: 'TSP Algorithm',
          description: "Designed and implemented classical TSP algorithms (Held–Karp, MST, Greedy) and a novel MCMF-based heuristic.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/traveling-salesman/";
            },},{id: "teaching-lg-electronics-living-dx-course-ldc",
          title: 'LG Electronics Living DX Course (LDC)',
          description: "Teaching Assistant for Theory Education",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/25-01-07-lg/";
            },},{id: "teaching-lg-electronics-living-dx-course-ldc",
          title: 'LG Electronics Living DX Course (LDC)',
          description: "Teaching Assistant for Project-Based Learning (PBL)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/25-02-28-lg-pbl/";
            },},{id: "teaching-gyeongnam-ai-novatus-academia-6th",
          title: 'Gyeongnam AI Novatus Academia (6th)',
          description: "Teaching Assistant for AI Theory Education",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/25-05-23-novatus/";
            },},{id: "teaching-lg-electronics-living-dx-course-ldc",
          title: 'LG Electronics - Living DX Course (LDC)',
          description: "Teaching Assistant for Theory Education",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/25-07-07-lg/";
            },},{id: "teaching-ulsan-ai-novatus-academia-8th",
          title: 'Ulsan AI Novatus Academia (8th)',
          description: "Teaching Assistant for AI Theory Education",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/25-07-25-novatus/";
            },},{id: "teaching-gyeongnam-ai-novatus-academia-6th",
          title: 'Gyeongnam AI Novatus Academia (6th)',
          description: "Teaching Assistant for Project-Based Learning (PBL)",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/25-09-26-novatus-pbl/";
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
