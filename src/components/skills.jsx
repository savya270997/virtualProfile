import { useState } from "react";

const skillGroups = [
  {
    title: "Frontend",
    icon: "⚡",
    accent: "skills-card-sky",
    items: [
      {
        name: "React.js",
        desc: "Component-driven UIs with hooks and performance-minded patterns.",
      },
      {
        name: "Next.js",
        desc: "SSR/SSG apps with routing, data fetching, and deployment-ready setups.",
      },
      {
        name: "TypeScript",
        desc: "Typed React codebases with safer refactors and API contracts.",
      },
      { name: "Redux", desc: "State patterns for complex UI/data workflows." },
    ],
  },
  {
    title: "Backend",
    icon: "🛠️",
    accent: "skills-card-ink",
    items: [
      {
        name: "Node.js",
        desc: "APIs and services with Express and modern tooling.",
      },
      {
        name: "Express.js",
        desc: "REST/JSON APIs with auth, validation, and logging.",
      },
      {
        name: "GraphQL",
        desc: "Schema-first APIs with resolvers and typed contracts.",
      },
    ],
  },
  {
    title: "Data",
    icon: "🗄️",
    accent: "skills-card-mint",
    items: [
      {
        name: "MongoDB",
        desc: "Flexible schemas, indexes, and aggregation pipelines.",
      },
      {
        name: "PostgreSQL",
        desc: "Relational modeling, queries, and performant indexes.",
      },
      {
        name: "REST / APIs",
        desc: "Clean contracts, pagination, error handling, and versioning.",
      },
    ],
  },
  {
    title: "Platforms",
    icon: "☁️",
    accent: "skills-card-yellow",
    items: [
      { name: "Netlify", desc: "CI/CD and static hosting for web apps." },
      { name: "Vercel", desc: "Edge-ready Next.js deployments and previews." },
      { name: "Firebase", desc: "Auth, storage, and lightweight backends." },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState({ group: null, name: null, desc: "" });

  const handleSelect = (groupTitle, item) => {
    setActive((prev) => {
      if (prev.name === item.name) return { group: null, name: null, desc: "" };
      return { group: groupTitle, name: item.name, desc: item.desc };
    });
  };

  return (
    <section className="skills-shell" id="skills">
      <div className="skills-frame">
        <p className="section-kicker">Skills</p>
        <p className="skills-lead">Tap a badge to see a short description.</p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className={`skills-card ${group.accent}`} key={group.title}>
              <div className="skills-card-head">
                <span className="skills-icon" aria-hidden>
                  {group.icon}
                </span>
                <h3>{group.title}</h3>
              </div>

              <div className="skills-badges">
                {group.items.map((item) => {
                  const isActive = active.name === item.name;
                  return (
                    <button
                      key={item.name}
                      className={`skill-pill ${
                        isActive ? "skill-pill-active" : ""
                      }`}
                      onClick={() => handleSelect(group.title, item)}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>

              {active.group === group.title && active.name && (
                <div className="skill-desc">
                  <p className="skill-desc-title">{active.name}</p>
                  <p className="skill-desc-body">{active.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
