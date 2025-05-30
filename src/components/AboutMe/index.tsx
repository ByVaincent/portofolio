import React, { forwardRef } from "react";
import "./AboutMe.css";
import Section from "../ui/Section";

interface AboutMeProps {}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  return (
    <Section
      classSup="min-h-screen flex flex-col justify-center items-center p-8"
      id="about-me"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        A Little More About Me
      </h2>
      <div className="max-w-4xl mx-auto">{/* Contenu à venir */}</div>
    </Section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
