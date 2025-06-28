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
