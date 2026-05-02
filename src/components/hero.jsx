import { motion } from "framer-motion";
import avatarImage from "../assets/avtar.png";

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.4 1.4-1.4H16V5.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v2.4H9v2.7h2.3v7z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.9 8.6A1.6 1.6 0 1 0 6.9 5.4a1.6 1.6 0 0 0 0 3.2M5.6 9.8h2.7V18H5.6zm4.4 0h2.6v1.1h.1c.4-.7 1.3-1.4 2.7-1.4 2.8 0 3.3 1.8 3.3 4.3V18H16v-3.6c0-.9 0-2-1.2-2s-1.4.9-1.4 1.9V18H10z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3m0 1.7A3.1 3.1 0 0 0 4.7 7.8v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1zm8.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2M12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1m0 1.7A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.8a9.2 9.2 0 0 0-2.9 18c.5.1.7-.2.7-.5v-1.8c-3 .6-3.6-1.2-3.6-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 1 1.6 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.4-.3-4.8-1.2-4.8-5.2 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.8 1 1.7 1 2.8 0 4-2.4 4.9-4.8 5.2.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8"
      />
    </svg>
  ),
};

const Hero = () => {
  const skills = [
    { name: "React", icon: "⚛" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "HTML5", icon: "</>" },
    { name: "CSS3", icon: "{}" },
    { name: "Node.js", icon: "⬢" },
    { name: "Express.js", icon: "Ex" },
    { name: "GraphQL", icon: "GQL" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "PG" },
    { name: "REST APIs", icon: "API" },
    { name: "Agile", icon: "Ag" },
    { name: "Git", icon: "⑂" },
    { name: "GitHub", icon: "🐙" },
  ];

  return (
    <section className="hero-shell" id="home">
      <div className="hero-frame">
        <div className="hero-container">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="hero-greeting">Hi there! 👋</p>

            <h1>I'm Savya Sanchi Sharma.</h1>

            <h2 className="hero-role">
              SDE II • Full Stack (React | Node.js)
            </h2>

            <p className="hero-desc">
              Software Development Engineer II with 6+ years of hands-on
              experience building web applications using React, Next.js,
              Node.js, and GraphQL. I focus on practical engineering
              trade-offs, scalable product features, data APIs, and solutions
              that serve real customer and business needs.
            </p>

            <div className="social-row">
              <a
                className="social-btn social-btn-facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/savyasanchi.sharma"
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons.facebook}
              </a>
              <a
                className="social-btn social-btn-linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/savya-sanchi-sharma-0a9611188/"
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons.linkedin}
              </a>
              <a
                className="social-btn social-btn-instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/irelumb/"
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons.instagram}
              </a>
              <a
                className="social-btn social-btn-github"
                aria-label="GitHub"
                href="https://github.com/savya270997"
                target="_blank"
                rel="noreferrer"
              >
                {socialIcons.github}
              </a>
            </div>

            <div className="hero-buttons"></div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="avatar-wrap">
              <span className="floating-tag code">&lt;/&gt;</span>
              <span className="floating-tag disk">▣</span>
              <span className="floating-tag terminal">&gt;_</span>
              <div className="avatar-core">
                <img
                  src={avatarImage}
                  alt="Savya Avatar"
                  className="avatar-img"
                />
              </div>
              <span className="role-tag">Full Stack Developer</span>
            </div>
          </motion.div>
        </div>

        <div className="skills-row">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill.name}>
              <span className="skill-icon" aria-hidden="true">
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
