import { motion } from "framer-motion";

const aboutHighlights = [
  "6+ years building production-ready web applications",
  "Frontend strength in React, Next.js, TypeScript, and responsive UI",
  "Backend experience with Node.js, Express.js, GraphQL, and REST APIs",
  "Hands-on with MongoDB and PostgreSQL for practical data modeling",
];

const valuePoints = [
  {
    title: "Practical Problem Solving",
    text: "I enjoy breaking complex product challenges into clear, maintainable solutions that are easy for teams to build on.",
  },
  {
    title: "Balanced Engineering",
    text: "I care about clean architecture, but I always weigh speed, maintainability, and business value before adding complexity.",
  },
  {
    title: "Full-Stack Delivery",
    text: "From polished interfaces to backend APIs and database decisions, I like owning features from idea to release.",
  },
];

const About = () => {
  return (
    <section className="about-shell" id="about">
      <motion.div
        className="about-frame"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="about-intro">
          <p className="section-kicker">About Me</p>
          <h2>
            I build modern web experiences that stay simple, scalable, and
            useful.
          </h2>
          <p className="about-lead">
            I&apos;m Savya Sanchi Sharma, a Hyderabad-based Software Engineer
            with experience across frontend and backend development. My work is
            centered around React, Next.js, Node.js, and GraphQL, with a strong
            focus on solving real business problems without over-engineering the
            product.
          </p>
          <p className="about-copy">
            I enjoy collaborating with teams, shaping thoughtful product
            experiences, and making technical decisions that balance speed,
            clarity, and long-term maintainability.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <div className="about-card about-card-highlight">
              <p className="about-card-label">Core Snapshot</p>
              <ul className="about-list">
                {aboutHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="about-card about-card-note">
              <p className="about-card-label">What Drives Me</p>
              <p>
                The best engineering work is not just technically strong, it
                also helps users faster, keeps the team unblocked, and leaves
                the code easier to grow.
              </p>
              <div className="about-chip-row">
                <span className="about-chip">React</span>
                <span className="about-chip">Next.js</span>
                <span className="about-chip">Node.js</span>
                <span className="about-chip">GraphQL</span>
              </div>
            </div>
          </div>

          <div className="about-values">
            {valuePoints.map((point) => (
              <article className="value-card" key={point.title}>
                <p className="value-index">{point.title}</p>
                <p className="value-text">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
