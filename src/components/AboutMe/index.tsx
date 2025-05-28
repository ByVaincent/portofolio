import React, { forwardRef } from "react";
import "./AboutMe.css";

interface AboutMeProps {
  className?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center p-8"
      id="about-me"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        A Little More About Me
      </h2>
      <div className="max-w-4xl mx-auto">{/* Contenu à venir */}</div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
