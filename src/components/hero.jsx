import { motion } from "framer-motion";
import avatarImage from "../assets/avtar.png";

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
              Software Engineer • Full Stack (React | Next.js | Node.js)
            </h2>

            <p className="hero-desc">
              Software Engineer with 6+ years of hands-on experience building
              web applications using React, Next.js, Node.js, and GraphQL. I
              focus on practical engineering trade-offs, scalable product
              features, and solutions that serve real customer and business
              needs.
            </p>

            <div className="social-row">
              <a
                className="social-btn social-btn-facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/savyasanchi.sharma"
                target="_blank"
                rel="noreferrer"
              >
                FB
              </a>
              <a
                className="social-btn social-btn-linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/savya-sanchi-sharma-0a9611188/"
                target="_blank"
                rel="noreferrer"
              >
                IN
              </a>
              <a
                className="social-btn social-btn-instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/irelumb/"
                target="_blank"
                rel="noreferrer"
              >
                IG
              </a>
              <a
                className="social-btn social-btn-github"
                aria-label="GitHub"
                href="https://github.com/savya270997"
                target="_blank"
                rel="noreferrer"
              >
                GH
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
              <span className="role-tag">Hyderabad • Open to Work</span>
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
