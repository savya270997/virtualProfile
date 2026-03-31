import { motion } from "framer-motion";
import { featuredProjects } from "../data/projects";
import dashboardImg from "../assets/portfolio/dashboard-interactive.png";
import matchifyyImg from "../assets/portfolio/matchifyy.png";
import socialsyyncImg from "../assets/portfolio/socialsyync.png";
import moneystacksImg from "../assets/portfolio/moneystacks.png";
import workwifeImg from "../assets/portfolio/workwife.png";
import glassRevampImg from "../assets/portfolio/glass-revamp.png";

const imageMap = {
  "dashboard-interactive-task": dashboardImg,
  matchifyy: matchifyyImg,
  socialsyync: socialsyyncImg,
  moneystacks: moneystacksImg,
  workwife: workwifeImg,
  "glass-revamp": glassRevampImg,
};

const Project = () => {
  return (
    <section className="project-shell" id="portfolio">
      <motion.div
        className="project-frame"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <div className="project-header">
          <p className="section-kicker">Portfolio</p>
          <h2>Featured projects with a stronger showcase feel.</h2>
          <p className="project-lead">
            A curated set of live projects on the homepage, with a separate page
            for the full portfolio collection.
          </p>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className={`project-card ${project.accent}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <a
                className="project-preview"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-browser">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="project-meta">
                  <p className="project-meta-title">{project.title}</p>
                  <a
                    className="project-meta-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </div>
                <div
                  className="project-screen"
                  style={{
                    backgroundImage: imageMap[project.slug]
                      ? `linear-gradient(140deg, rgba(255,255,255,0.12), transparent 45%), url(${
                          imageMap[project.slug]
                        })`
                      : undefined,
                  }}
                ></div>
              </a>
            </motion.article>
          ))}
        </div>

        <div className="project-footer">
          <a className="project-more-link" href="#/projects">
            See More Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Project;
