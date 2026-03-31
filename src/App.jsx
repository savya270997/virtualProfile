import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Journey from "./components/journey";
import Project from "./components/project";
import ProjectsPage from "./components/projectsPage";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (hash === "#/projects") {
    return (
      <>
        <ProjectsPage />
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
