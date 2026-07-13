import resumePdf from "../assets/SavyaResume.pdf";

const Navbar = () => {
  return (
    <header className="hero-nav navbar-fixed">
      <div className="brand-mark">SSS</div>

      <nav className="hero-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#skills">Skills</a>
      </nav>

      <div className="nav-actions">
        <a className="nav-btn subtle" href="#portfolio">
          Portfolio
        </a>
        <a
          className="nav-btn subtle"
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
          download="Savya-Sanchi-Resume.pdf"
        >
          Download CV
        </a>
        <a className="nav-btn cta" href="#contact">
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
