import { forwardRef } from "react";
import "./SoftSkills.css";
import Section from "../ui/Section";
import Tag from "../ui/Tag/Tag";

interface SoftSkillsProps {}

const SoftSkills = forwardRef<HTMLDivElement, SoftSkillsProps>(
  (_props, ref) => {
    return (
      <Section classSup="" id="whoami" ref={ref}>
        <div className="flex flex-col justify-between flex-wrap">
          <h2>Soft skills</h2>
          <div className="flex flex-wrap gap-2 mt-5">
            <Tag text="Creativity" />
            <Tag text="Teamwork" />
            <Tag text="Communication" />
            <Tag text="Motivation" />
            <Tag text="Adaptability" />
            <Tag text="Problem-solving" />
            <Tag text="Proactivity" />
            <Tag text="Organization" />
          </div>
        </div>
      </Section>
    );
  }
);

SoftSkills.displayName = "SoftSkills";

export default SoftSkills;
