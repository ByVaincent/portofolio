import { forwardRef } from "react";
import "./Projects.css";
import Section from "../ui/Section";
import Card from "../ui/Card/Card";
import marvelLogo from "../../../public/marvel.png";
import quizMeUpLogo from "../../../public/logo-quizzmeup.png";
import fakeTripLogo from "../../../public/fake-trip.png";
import livNLogo from "../../../public/logo-liv-n.png";

interface ProjectsProps {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="overflow-scroll">
        <h2>Projects</h2>
        <div className="flex mt-">
          <Card
            imgSrc={livNLogo}
            title={"Mobile app Liv-n frontend"}
            tech={"React native - Expo Go"}
            text={
              "In charge of the mobile app’s frontend development just a few weeks into my internship! A challenge I truly enjoy, pushing me to give the best of myself. The app will be available soon."
            }
            link={""}
          />
          <Card
            imgSrc={livNLogo}
            title={"Mobile app Liv-n frontend"}
            tech={"React native - Expo Go"}
            text={
              "In charge of the mobile app’s frontend development just a few weeks into my internship! A challenge I truly enjoy, pushing me to give the best of myself. The app will be available soon."
            }
            link={""}
          />
          <Card
            imgSrc={livNLogo}
            title={"Mobile app Liv-n frontend"}
            tech={"React native - Expo Go"}
            text={
              "In charge of the mobile app’s frontend development just a few weeks into my internship! A challenge I truly enjoy, pushing me to give the best of myself. The app will be available soon."
            }
            link={""}
          />
          <Card
            imgSrc={livNLogo}
            title={"Mobile app Liv-n frontend"}
            tech={"React native - Expo Go"}
            text={
              "In charge of the mobile app’s frontend development just a few weeks into my internship! A challenge I truly enjoy, pushing me to give the best of myself. The app will be available soon."
            }
            link={""}
          />
        </div>
      </div>
    </Section>
  );
});

Projects.displayName = "Projects";

export default Projects;
