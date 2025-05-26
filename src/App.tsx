import { useRef } from "react";
import "./App.css";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <nav className="main-nav">
        <ul>
          <li>
            <button onClick={() => scrollToSection(homeRef)}>Accueil</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(aboutRef)}>À propos</button>
          </li>
          <li>
            <button onClick={() => scrollToSection(projectsRef)}>
              Projets
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <section ref={homeRef} className="section" id="home">
          <h1>Accueil</h1>
        </section>

        <section ref={aboutRef} className="section" id="about">
          <h2>À propos</h2>
        </section>

        <section ref={projectsRef} className="section" id="projects">
          <h2>Projets</h2>
        </section>

        <section ref={contactRef} className="section" id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
