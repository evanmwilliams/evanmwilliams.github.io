// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-cornell-cis-with-an-meng-in-computer-science",
          title: 'Graduated from Cornell CIS with an MEng in Computer Science!',
          description: "",
          section: "News",},{id: "news-started-working-at-aws-in-santa-clara-ca",
          title: 'Started working at AWS in Santa Clara, CA!',
          description: "",
          section: "News",},{id: "news-selected-for-the-2025-nsf-computer-and-information-science-and-engineering-graduate-fellowship-and-mentoring-program-csgrad4us",
          title: 'Selected for the 2025 NSF Computer and Information Science and Engineering Graduate Fellowship...',
          description: "",
          section: "News",},{id: "news-our-paper-on-compiling-pytorch-models-to-calyx-has-been-accepted-to-the-compilers-for-machine-learning-c4ml-workshop-at-cgo-2026",
          title: 'Our paper on compiling PyTorch models to Calyx has been accepted to the...',
          description: "",
          section: "News",},{id: "news-i-presented-our-work-on-compiling-pytorch-models-to-calyx-at-accml-at-hipeac-2026",
          title: 'I presented our work on compiling PyTorch models to Calyx at AccML at...',
          description: "",
          section: "News",},{id: "news-our-work-on-using-programming-by-navigation-for-compiler-scheduling-in-fuseflow-is-accepted-to-latte",
          title: 'Our work on using programming by navigation for compiler scheduling in FuseFlow is...',
          description: "",
          section: "News",},{id: "news-i-ll-be-attending-carnegie-mellon-university-as-a-phd-student-in-electrical-and-computer-engineering-ece-starting-in-fall-2026",
          title: 'I’ll be attending Carnegie Mellon University as a PhD student in Electrical and...',
          description: "",
          section: "News",},{id: "news-our-work-on-interactive-design-space-exploration-for-sparse-accelerator-mappings-is-accepted-to-yarch",
          title: 'Our work on interactive design space exploration for sparse accelerator mappings is accepted...',
          description: "",
          section: "News",},{id: "projects-eta-compiler",
          title: 'eta compiler',
          description: "a fully-functional optimizing compiler targeting x86-64",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eta-compiler/";
            },},{id: "projects-visualizing-the-mandelbrot-set",
          title: 'visualizing the mandelbrot set',
          description: "experiments with high performance computing and visualizations of the mandelbrot set",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mandelbrot/";
            },},{id: "projects-computational-complexity-of-matrix-multiplication",
          title: 'computational complexity of matrix multiplication',
          description: "a survey of complexity theory for matrix multiplication",
          section: "Projects",handler: () => {
              window.location.href = "/projects/matmul/";
            },},{id: "projects-monte-carlo-based-options-pricing-with-high-level-synthesis",
          title: 'monte carlo based options pricing with high-level synthesis',
          description: "here we demonstrate the ability to accelerate monte carlo options pricing using HLS techniques",
          section: "Projects",handler: () => {
              window.location.href = "/projects/montecarlo/";
            },},{id: "projects-multi-core-risc-v-system",
          title: 'multi-core risc-v system',
          description: "a complete RTL-design of a RISC-V multicore system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multicore/";
            },},{id: "projects-nes-emulator",
          title: 'nes emulator',
          description: "an nes emulator to help me learn rust",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nes/";
            },},{id: "projects-compiling-pytorch-models-to-calyx",
          title: 'compiling pytorch models to calyx',
          description: "an end-to-end compilation pipeline from pytorch to synthesizable hardware",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pytorch2calyx/";
            },},{id: "projects-risc-v-simulator-work-in-progress",
          title: 'risc-v simulator (work in progress!)',
          description: "a step towards a risc-v simulator written in modern cpp",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rv64sim/";
            },},{id: "projects-tetris-rl",
          title: 'tetris rl',
          description: "an implementation of an RL agent for tetris",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tetrisrl/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%76%61%6E%77%30%34%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/evanmwilliams", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/evanwilliams02", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://mastodon.social/@evanmwil", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/evanmwil02", "_blank");
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
