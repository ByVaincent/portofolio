import React, { forwardRef } from "react";
import "./AboutMe.css";
import Section from "../ui/Section";

interface AboutMeProps {}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="flex justify-between items-center flex-wrap">
        <h2>A little more</h2>
        <p>
          Before becoming a web developer, I worked for several years as a
          professional musician and sound engineer, with a bachelor’s-level
          degree in audio production. I performed across French Riviera and
          Paris, both on stage and behind the scenes, while training intensively
          in opera singing, which led me to win several international
          competitions. This experience taught me discipline, patience, constant
          learning, and the ability to reinvent myself. Motivated by these
          values, I decided to start a new chapter in web development.
        </p>
        <p className="mt-5">
          I discovered coding during an initial web design course, and quickly
          realized it sparked the same passion I found in music: structured
          learning, creativity, and technical mastery. After teaching myself the
          basics, I joined Le Réacteur (RNCP 6) for a full-time training program
          I personally financed. Since then, I’ve been thriving in the tech
          world — building interfaces, solving problems, creating components,
          and improving user experience every day.
        </p>
        <p className="mt-5">
          My path has shaped me into someone who embraces challenges, enjoys
          collaboration, and adapts quickly. Thanks to regular sport practice
          and years of meditation, I’ve also developed strong focus, stress
          management, and the ability to step back and make clear decisions.
        </p>
      </div>
    </Section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
