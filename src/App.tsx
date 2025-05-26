import { useRef, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whoAmIRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const docsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      <Menu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        whoAmIRef={whoAmIRef}
        projectsRef={projectsRef}
        softSkillsRef={softSkillsRef}
        aboutMeRef={aboutMeRef}
        docsRef={docsRef}
      />
      <main className="main-content">
        <section ref={whoAmIRef} className="section" id="who-am-i">
          <h1>Who am I</h1>
        </section>
        <section ref={projectsRef} className="section" id="projects">
          <h2>Projects</h2>
        </section>
        <section ref={softSkillsRef} className="section" id="soft-skills">
          <h2>Soft skills</h2>
        </section>
        <section ref={aboutMeRef} className="section" id="about-me">
          <h2>A little more about me</h2>
        </section>
        <section ref={docsRef} className="section" id="docs">
          <h2>Docs</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
