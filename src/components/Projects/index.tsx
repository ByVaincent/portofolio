import React, { forwardRef } from "react";
import "./Projects.css";

interface ProjectsProps {
  className?: string;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center p-8"
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Projets à venir */}
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
