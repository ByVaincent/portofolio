import React from "react";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  whoAmIRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  softSkillsRef: React.RefObject<HTMLDivElement | null>;
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
  docsRef: React.RefObject<HTMLDivElement | null>;
}

const Menu: React.FC<MenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  whoAmIRef,
  projectsRef,
  softSkillsRef,
  aboutMeRef,
  docsRef,
}) => {
  return (
    <>
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
    </>
  );
};

export default Menu;
