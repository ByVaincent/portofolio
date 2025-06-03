import React, { forwardRef } from "react";
import "./SoftSkills.css";
import Section from "../ui/Section";

interface SoftSkillsProps {}

const SoftSkills = forwardRef<HTMLDivElement, SoftSkillsProps>((props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="flex justify-between items-center flex-wrap">
        <h2>Soft skills</h2>
      </div>
    </Section>
  );
});

SoftSkills.displayName = "SoftSkills";

export default SoftSkills;
