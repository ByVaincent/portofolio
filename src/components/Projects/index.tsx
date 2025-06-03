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
      <div className="w-full">
        <h2>Projects</h2>
        <div className="flex flex-row flex-wrap mt-7  overflow-scroll">
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
            imgSrc={marvelLogo}
            title={"Happy Marvel fans"}
            tech={"React - Express - MongoDB"}
            text={
              "An individual technical test completed in two and a half days, featuring a user interface, a backend, and two APIs. I really enjoyed building this web application during my training. I also loved implementing a search and pagination system that I coded entirely from scratch."
            }
            link={"test-technique-marvel.netlify.app"}
          />
          <Card
            imgSrc={quizMeUpLogo}
            title={"QuizzMeUp"}
            tech={"React - Express - MongoDb"}
            text={
              "I had the pleasure of being Lead Dev, in addition to frontend developer, on this team project for the end of my training. Merges, code reviews, and daily stand-ups were part of my daily routine during these two weeks of development. The result: an MVP enabling the training organization Le Réacteur to create and offer quizzes to their students completely autonomously."
            }
            link={"https://quizmeup-vincent.netlify.app/"}
          />
          <Card
            imgSrc={fakeTripLogo}
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
