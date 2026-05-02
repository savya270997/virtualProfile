import { motion } from "framer-motion";

const journeyStats = [
  { value: "6+", label: "Years in Product Engineering" },
  { value: "3", label: "Core Roles Across Teams" },
  { value: "1", label: "Engineering Degree Journey" },
];

const journeyItems = [
  {
    kind: "work",
    year: "2026 - Present",
    title: "Software Development Engineer II",
    org: "IQVIA",
    accent: "journey-accent-sky",
    summary:
      "Working as a full-stack engineer with a strong focus on React, Node.js, data APIs, and scalable product features.",
    points: [
      "Building full-stack features across React-based interfaces and Node.js backend services.",
      "Working with data APIs and backend integrations that support product workflows.",
      "Designing maintainable application logic with attention to reliability, performance, and business needs.",
      "Collaborating with teams to deliver practical engineering solutions in a healthcare technology environment.",
    ],
    stack: ["React", "Node.js", "Data APIs", "REST APIs", "Full Stack"],
  },
  {
    kind: "work",
    year: "2021 - 2026",
    title: "Senior Consultant",
    org: "Aaseya IT Services",
    accent: "journey-accent-yellow",
    summary:
      "Contributing across frontend and backend systems with React, Next.js, Node.js, and GraphQL while keeping delivery focused on practical business outcomes.",
    points: [
      "Designed and implemented features with simplicity, scalability, and maintainability in mind.",
      "Solved technical challenges through structured debugging and clear trade-off analysis.",
      "Used MongoDB and PostgreSQL based on product and performance needs.",
      "Collaborated closely with cross-functional teams and adapted quickly as requirements evolved.",
    ],
    stack: ["React", "Next.js", "Node.js", "GraphQL", "MongoDB", "PostgreSQL"],
  },
  {
    kind: "work",
    year: "2020 - 2021",
    title: "Software Engineer",
    org: "Tiot Systems Pvt Ltd",
    accent: "journey-accent-ink",
    summary:
      "Built end-to-end web application features with a strong grounding in UI development, backend integration, debugging, and production support.",
    points: [
      "Developed React and JavaScript-based features for real product workflows.",
      "Worked on Node.js APIs and handled persistence with MongoDB.",
      "Strengthened debugging discipline by tracing bugs to root causes and implementing reliable fixes.",
      "Gained exposure to Java and Python services and how frontend and backend systems interact.",
    ],
    stack: ["React", "JavaScript", "Node.js", "MongoDB", "Agile"],
  },
  {
    kind: "education",
    year: "2015 - 2019",
    title: "Bachelor of Engineering",
    org: "Bhilai Institute of Technology, Durg",
    accent: "journey-accent-sky",
    summary:
      "Completed Engineering in Electronics and Communications, building the foundation that led into software development and full-stack problem solving.",
    points: [
      "Developed analytical thinking and systems understanding.",
      "Built a base for structured technical reasoning and cross-domain learning.",
    ],
    stack: ["Engineering", "Systems Thinking", "Problem Solving"],
  },
];

const Journey = () => {
  return (
    <section className="journey-shell" id="journey">
      <div className="journey-frame">
        <motion.div
          className="journey-intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">Journey</p>
          <h2>From engineering foundations to full-stack product ownership.</h2>
          <p className="journey-lead">
            My journey has been shaped by real product work, thoughtful
            technical trade-offs, and a steady move toward building end-to-end
            digital experiences that are useful, scalable, and maintainable.
          </p>

          <div className="journey-stat-grid">
            {journeyStats.map((stat) => (
              <article className="journey-stat-card" key={stat.label}>
                <p className="journey-stat-value">{stat.value}</p>
                <p className="journey-stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </motion.div>

        <div className="journey-track">
          <div className="journey-rail" aria-hidden="true" />

          {journeyItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.year}`}
              className={`journey-card ${index % 2 === 0 ? "journey-card-left" : "journey-card-right"}`}
              initial={{ opacity: 0, y: 48, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="journey-node" aria-hidden="true" />

              <div className={`journey-card-top ${item.accent}`}>
                <span className="journey-kind">{item.kind}</span>
                <span className="journey-year">{item.year}</span>
              </div>

              <div className="journey-card-body">
                <h3>{item.title}</h3>
                <p className="journey-org">{item.org}</p>
                <p className="journey-summary">{item.summary}</p>

                <ul className="journey-point-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="journey-stack">
                  {item.stack.map((tag) => (
                    <span className="journey-stack-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
