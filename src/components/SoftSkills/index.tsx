import React, { forwardRef } from "react";
import "./SoftSkills.css";
import Section from "../ui/Section";

interface SoftSkillsProps {}

const SoftSkills = forwardRef<HTMLDivElement, SoftSkillsProps>((props, ref) => {
  return (
    <Section
      classSup="min-h-screen flex flex-col justify-center items-center p-8"
      id="soft-skills"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Soft Skills</h2>
      <div className="max-w-4xl mx-auto">
        {/* Liste des soft skills à venir */}
      </div>
    </Section>
  );
});

SoftSkills.displayName = "SoftSkills";

export default SoftSkills;
