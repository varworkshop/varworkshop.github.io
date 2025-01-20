// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-demos-and-papers",
          title: "Demos and Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/calls/";
          },
        },{id: "nav-schedule",
          title: "Schedule",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/schedule/";
          },
        },{id: "nav-challenges",
          title: "Challenges",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/challenges/";
          },
        },{id: "nav-organizers",
          title: "Organizers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/organizers/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/05/01/tabs.html";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/29/typograms.html";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/28/post-citation.html";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/code-diff.html";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/echarts.html";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/chartjs.html";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/audios.html";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/24/videos.html";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/tables.html";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/07/04/diagrams.html";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/05/22/distill.html";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/10/20/math.html";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/07/15/code.html";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/05/15/images.html";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
        
      },
    },{id: "challenge_organizers-sunny-panchal",
          title: 'Sunny Panchal',
          description: "Qualcomm AI Research",
          section: "Challenge_organizers",handler: () => {
              window.location.href = "/challenge_organizers/1_project/";
            },},{id: "challenge_organizers-reza-pourreza",
          title: 'Reza Pourreza',
          description: "Qualcomm AI Research",
          section: "Challenge_organizers",handler: () => {
              window.location.href = "/challenge_organizers/2_project/";
            },},{id: "news-the-website-is-now-live",
          title: 'The website is now live.',
          description: "",
          section: "News",},{id: "organizers-apratim-bhattacharyya",
          title: 'Apratim Bhattacharyya',
          description: "Qualcomm AI Research",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/1_project/";
            },},{id: "organizers-angela-yao",
          title: 'Angela Yao',
          description: "National U. of Singapore",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/2_project/";
            },},{id: "organizers-bugra-tekin",
          title: 'Bugra Tekin',
          description: "Meta Reality Labs",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/3_project/";
            },},{id: "organizers-edoardo-remelli",
          title: 'Edoardo Remelli',
          description: "Meta Reality Labs",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/4_project/";
            },},{id: "organizers-fadime-sener",
          title: 'Fadime Sener',
          description: "Meta Reality Labs",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/5_project/";
            },},{id: "organizers-guodong-ding",
          title: 'Guodong Ding',
          description: "National U. of Singapore",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/6_project/";
            },},{id: "organizers-roland-memisevic",
          title: 'Roland Memisevic',
          description: "Qualcomm AI Research",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/7_project/";
            },},{id: "organizers-shugao-ma",
          title: 'Shugao Ma',
          description: "Meta Reality Labs",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/8_project/";
            },},{id: "organizers-shweta-mahajan",
          title: 'Shweta Mahajan',
          description: "Qualcomm AI Research",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/9_project/";
            },},{id: "projects-ani-kembhavi",
          title: 'Ani Kembhavi',
          description: "Wayve",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-kate-saenko",
          title: 'Kate Saenko',
          description: "Boston University, FAIR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-marc-pollefeys",
          title: 'Marc Pollefeys',
          description: "ETH Zurich, Microsoft",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-mike-shou",
          title: 'Mike Shou',
          description: "National U. of Singapore",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
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
