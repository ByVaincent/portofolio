import { useRef, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import WhoAmI from "./components/WhoAmI";
import Projects from "./components/Projects";
import SoftSkills from "./components/SoftSkills";
import AboutMe from "./components/AboutMe";
import Docs from "./components/Docs";

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
    <div className="app-container container relative">
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
        <WhoAmI ref={whoAmIRef} />
        <Projects ref={projectsRef} />
        <SoftSkills ref={softSkillsRef} />
        <AboutMe ref={aboutMeRef} />
        <Docs ref={docsRef} />
      </main>
    </div>
  );
}

export default App;
