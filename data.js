/* ============================================================
   EDIT YOUR CONTENT HERE. No need to touch HTML or main.js.
   ============================================================ */
window.SITE = {
  email: "manjrawalanishita@gmail.com", // <- put your real email

  socials: [
    { label: "GitHub",    url: "https://github.com/nishita-mj" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/nishita-manjrawala-43a1aa348/?isSelfProfile=true" },
    { label: "Instagram", url: "https://instagram.com/manjrawalanishita" },
    { label: "Email",     url: "mailto:manjrawalanishita@gmail.com" }
  ],

  about: [
    { title: "BCA Student",          text: "Pursuing BCA (2025–2027) with a focus on how software is really built." },
    { title: "Full Stack Developer", text: "Completed a MERN full stack course and shipped multiple projects." },
    { title: "Social Media Executive", text: "Managing social, content and lead generation at R1 PropLink, Surat." },
    { title: "Graphic Design / UI/UX", text: "Designing posts, layouts and interfaces that look as good as they work." }
  ],

  skills: [
    { group: "Frontend", items: [
      ["HTML", "Semantic, accessible structure"], ["CSS", "Grid, flexbox, animation"],
      ["JavaScript", "DOM, async, ES6+"], ["React.js", "Components, hooks, state"],
      ["Bootstrap", "Fast responsive layouts"], ["Tailwind CSS", "Utility-first styling"] ] },
    { group: "Backend", items: [
      ["Node.js", "Server-side JavaScript"], ["Express.js", "REST APIs & routing"],
      ["MongoDB", "Schemas, CRUD, queries"] ] },
    { group: "Tools", items: [
      ["Git", "Version control"], ["GitHub", "Collaboration & hosting"],
      ["VS Code", "Daily editor"], ["Firebase", "Auth & hosting"] ] },
    { group: "Creative", items: [
      ["Social Media Marketing", "Planning, posting, growth"], ["Graphic Design", "Posts, banners, branding"],
      ["UI/UX", "Wireframes to polished screens"] ] }
  ],

  projects: [
    { name: "E-Commerce Website", desc: "A full shopping flow with product listing, cart and checkout.",
      tech: ["React", "Node.js", "MongoDB"], image: "ecommerce.png", demo: "#", github: "#" },
    { name: "Google Keep Clone", desc: "Colourful notes you can add, edit, pin and delete.",
      tech: ["React", "JavaScript", "CSS"], image: "googleKeep.png", demo: "#", github: "#" },
    { name: "Google Contacts Clone", desc: "Save, search and organise contacts in a clean list.",
      tech: ["React", "JavaScript", "CSS"], image: "googleContact.png", demo: "#", github: "#" },
    { name: "Zomato API Clone", desc: "Browse restaurants and menus pulled from a live API.",
      tech: ["JavaScript", "REST API", "Bootstrap"], image: "zomato.png", demo: "#", github: "#" }
  ],

  services: [
    ["Social Media Management", "Calendars, posting and community replies."],
    ["Content Creation", "Captions, carousels and ideas that fit the brand."],
    ["Graphic Design", "Posts, banners and branded templates."],
    ["Instagram Content", "Feed design that looks consistent and clickable."],
    ["Reels / Video Content", "Short-form edits built for watch time."],
    ["Lead Generation", "Content funnels that bring in real enquiries."]
  ],

  /* Gallery: add real images with image:"assets/work1.jpg". h = tile height (px) for the masonry look. */
  gallery: [
    { label: "Instagram post", h: 260, image: "" }, { label: "Reel cover", h: 340, image: "" },
    { label: "Brand banner", h: 200, image: "" },    { label: "Carousel", h: 300, image: "" },
    { label: "Story template", h: 360, image: "" },  { label: "Poster", h: 240, image: "" },
    { label: "Ad creative", h: 280, image: "" },     { label: "Logo concept", h: 220, image: "" }
  ],

  showcase: {
    "Web Design":   [{ label: "Landing page", image: "./landing page.png" }, { label: "Dashboard UI", image: "./googleContact.png" }, { label: "Mobile screens", image: "./mobile screen.png" }],
    "Graphics":     [{ label: "Poster", image: "" }, { label: "Brand kit", image: "" }, { label: "Social banner", image: "" }],
    "Social Media": [{ label: "Reel", image: "" }, { label: "Carousel", image: "" }, { label: "Story set", image: "" }]
  },

  /* Timeline: add, remove or reorder entries freely. */
  journey: [
    { when: "Step 1", title: "Started Web Development", text: "Wrote my first HTML and CSS pages." },
    { when: "Step 2", title: "Completed Full Stack Development course", text: "Learned the MERN stack end to end." },
    { when: "Step 3", title: "Built multiple projects", text: "Clones and APIs to practise real-world patterns." },
    { when: "2025", title: "Started BCA", text: "Began the degree alongside hands-on building." },
    { when: "Now", title: "Started in Social Media Marketing", text: "Content, design and lead generation at R1 PropLink." }
  ]
};
