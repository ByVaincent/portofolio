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
    if (ref.current) {
      const menuHeight = 80; // Hauteur approximative du menu en pixels
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - menuHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="h-10 flex">
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
      </div>

      <main className="max-w-4xl mx-auto">
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
