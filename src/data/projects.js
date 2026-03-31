export const projects = [
  {
    slug: "moneystacks",
    title: "MoneyStacks",
    type: "Finance Platform",
    year: "Featured 01",
    description:
      "Live finance-focused product build with a clean dashboard-style experience and structured information architecture.",
    longDescription:
      "A featured live deployment that represents your product and UI engineering work around finance workflows. This project is ready for a richer case study once repo details and implementation notes are added.",
    tags: ["Finance", "Dashboard", "Product UI"],
    accent: "project-card-mint",
    liveUrl: "https://moneystacks.netlify.app",
    featured: true,
  },
  {
    slug: "matchifyy",
    title: "Matchifyy",
    type: "Matching Platform",
    year: "Featured 02",
    description:
      "A live matching product experience with a distinct interface and focused user flow design.",
    longDescription:
      "This deployment highlights your ability to shape product-facing experiences around sign-in flows, user interaction, and polished visual direction. It can later be enriched with stack and repo details.",
    tags: ["User Flow", "Platform UI", "Interaction"],
    accent: "project-card-sky",
    liveUrl: "https://matchifyy.netlify.app",
    featured: true,
  },
  {
    slug: "socialsyync",
    title: "SocialSyync",
    type: "Social Web App",
    year: "Featured 03",
    description:
      "A live social-style web app concept focused on connected user interactions and lightweight product flow.",
    longDescription:
      "A deployed concept that shows your work on app-like interfaces and visual communication for social or connected user experiences. A future update can add the specific stack and role details.",
    tags: ["Social App", "Web UI", "Product Design"],
    accent: "project-card-coral",
    liveUrl: "https://socialsyync.netlify.app",
    featured: true,
  },
  {
    slug: "workwife",
    title: "WorkWife",
    type: "Productivity / Time Tracking",
    year: "Featured 04",
    description:
      "A live productivity and time-tracking product that shows your dashboard and data-visualization chops in a dark theme.",
    longDescription:
      "This project highlights product thinking around schedules, goals, and dashboards with a distinct dark UI direction. Great for showing admin-style interfaces and data views.",
    tags: ["Dashboard", "Productivity", "Dark UI"],
    accent: "project-card-yellow",
    liveUrl: "https://workwife.netlify.app",
    featured: true,
  },
  {
    slug: "dashboard-interactive-task",
    title: "Interactive Dashboard",
    type: "Data Dashboard",
    year: "Archive 05",
    description:
      "A live dashboard experience centered around data presentation, card-based layout, and utility-driven interactions.",
    longDescription:
      "This project helps represent your dashboard and interface-building work, especially around structured layouts, stats, and interaction-led admin-style surfaces.",
    tags: ["Dashboard", "Analytics UI", "Cards"],
    accent: "project-card-mint",
    liveUrl: "https://dashboard-interactive-task.netlify.app",
    featured: false,
  },
  {
    slug: "glass-revamp",
    title: "Glass Revamp",
    type: "UI Revamp",
    year: "Archive 06",
    description:
      "A live UI-focused build that expands your portfolio beyond the homepage highlights.",
    longDescription:
      "Included on the full projects page as part of your broader visual and interface work. This can later carry screenshots, repo links, and a stronger case study summary.",
    tags: ["UI Revamp", "Visual Design"],
    accent: "project-card-sky",
    liveUrl: "https://glass-revamp.netlify.app",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
