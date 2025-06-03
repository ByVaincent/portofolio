import { forwardRef } from "react";
import "./Projects.css";
import Section from "../ui/Section";

interface ProjectsProps {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="flex justify-between items-center flex-wrap">
        <h2>Projects</h2>
      </div>
    </Section>
  );
});

Projects.displayName = "Projects";

export default Projects;
