import React, { forwardRef } from "react";
import "./AboutMe.css";
import Section from "../ui/Section";

interface AboutMeProps {}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="flex justify-between items-center flex-wrap">
        <h2>A little more</h2>
      </div>
    </Section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
