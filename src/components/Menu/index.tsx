import React from "react";
import "./Menu.css";

export type MenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  whoAmIRef: React.RefObject<HTMLDivElement | null>;
  technologiesRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  softSkillsRef: React.RefObject<HTMLDivElement | null>;
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
  docsRef: React.RefObject<HTMLDivElement | null>;
};

const Menu: React.FC<MenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  whoAmIRef,
  technologiesRef,
  projectsRef,
  softSkillsRef,
  aboutMeRef,
  docsRef,
}) => {
  return (
    <>
      <div className="fixed w-full max-w-6xl">
        <button
          className={`menu-toggle-outside${
            isMenuOpen ? " open" : ""
          } relative top-5 left-5 z-50 w-12 h-12 border-2 border-[#23264d] rounded-full flex flex-col items-center justify-center bg-transparent transition-colors`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-[3px] bg-[#23264d] my-[3px] rounded transition-all"></span>
          <span className="block w-6 h-[3px] bg-[#23264d] my-[3px] rounded transition-all"></span>
          <span className="block w-6 h-[3px] bg-[#23264d] my-[3px] rounded transition-all"></span>
        </button>
        {isMenuOpen && (
          <nav className="main-nav floating-menu relative top-20 left-5 min-w-[180px] w-max bg-gradient-to-br from-[#23264d] to-[#23264dcc] text-white rounded-2xl shadow-2xl p-6 z-40 flex flex-col items-start animate-fadeInMenu">
            <ul className="flex flex-col gap-2 w-full">
              <li className="w-full">
                <button
                  onClick={() => scrollToSection(whoAmIRef)}
                  className="active text-white font-bold w-full text-left py-1 px-0 hover:text-white focus:text-white"
                >
                  Who I am
                </button>
              </li>
              <li className="w-full">
                <button
                  onClick={() => scrollToSection(technologiesRef)}
                  className="text-[#bfc6e6] w-full text-left py-1 px-0 hover:text-white focus:text-white"
                >
                  Technologies
                </button>
              </li>
              <li className="w-full">
                <button
                  onClick={() => scrollToSection(projectsRef)}
                  className="text-[#bfc6e6] w-full text-left py-1 px-0 hover:text-white focus:text-white"
                >
                  Projects
                </button>
              </li>
              <li className="w-full">
                <button
                  onClick={() => scrollToSection(softSkillsRef)}
                  className="text-[#bfc6e6] w-full text-left py-1 px-0 hover:text-white focus:text-white"
                >
                  Soft skills
                </button>
              </li>
              <li className="w-full">
                <button
                  onClick={() => scrollToSection(aboutMeRef)}
                  className="text-[#bfc6e6] w-full text-left py-1 px-0 hover:text-white focus:text-white"
                >
                  A little more
                </button>
              </li>
              <li className="w-full">
                <button
                  onClick={() => scrollToSection(docsRef)}
                  className="text-[#bfc6e6] w-full text-left py-1 px-0 hover:text-white focus:text-white"
                >
                  Docs
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Menu;
