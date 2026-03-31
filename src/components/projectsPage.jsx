import { projects } from "../data/projects";
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

const ProjectsPage = () => {
  return (
    <main className="projects-page-shell">
      <section className="projects-page-frame">
        <header className="projects-page-header">
          <a className="projects-back-link" href="/">
            Back Home
          </a>
          <p className="section-kicker">All Projects</p>
          <h1>Full project archive with live links.</h1>
          <p className="projects-page-lead">
            A complete list of live deployments. Repo links and deeper case
            studies can be added next as you curate each project.
          </p>
        </header>

        <div className="projects-page-grid">
          {projects.map((project) => (
            <article
              className={`projects-page-card ${project.accent}`}
              key={project.slug}
            >
              <div
                className="projects-page-thumb"
                style={{
                  backgroundImage: imageMap[project.slug]
                    ? `linear-gradient(180deg, rgba(15,23,42,0.05), rgba(15,23,42,0.58)), url(${
                        imageMap[project.slug]
                      })`
                    : undefined,
                }}
              />

              <div className="projects-page-top">
                <p>{project.year}</p>
                <span>{project.type}</span>
              </div>

              <h2>{project.title}</h2>
              <p className="projects-page-description">
                {project.longDescription}
              </p>

              <div className="projects-page-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="projects-page-actions">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
