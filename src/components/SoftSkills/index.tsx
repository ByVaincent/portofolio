import React, { forwardRef } from "react";
import "./SoftSkills.css";

interface SoftSkillsProps {
  className?: string;
}

const SoftSkills = forwardRef<HTMLDivElement, SoftSkillsProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center p-8"
      id="soft-skills"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Soft Skills</h2>
      <div className="max-w-4xl mx-auto">
        {/* Liste des soft skills à venir */}
      </div>
    </section>
  );
});

SoftSkills.displayName = "SoftSkills";

export default SoftSkills;
