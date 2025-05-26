import { useRef, useState } from "react";
import "./App.css";

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
      <button
        className={`menu-toggle-outside${isMenuOpen ? " open" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>

      {isMenuOpen && (
        <nav className="main-nav floating-menu">
          <ul>
            <li>
              <button
                onClick={() => scrollToSection(whoAmIRef)}
                className="active"
              >
                Who am i
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(projectsRef)}>
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(softSkillsRef)}>
                Soft skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(aboutMeRef)}>
                A little more
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(docsRef)}>Docs</button>
            </li>
          </ul>
        </nav>
      )}

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
