import { forwardRef } from "react";
import "./Projects.css";
import Section from "../ui/Section";
import Card from "../ui/Card/Card";
import marvelLogo from "../../assets/images/marvel.png";
import quizMeUpLogo from "../../assets/images/logo-quizzmeup.png";
import fakeTripLogo from "../../assets/images/fake-trip.png";
import livNLogo from "../../assets/images/logo-liv-n.png";
import toDoList from "../../assets/images/toDoList.png";
import timesTableGames from "../../assets/images/timesTableGame.png";

interface ProjectsProps {}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>((_props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="w-full">
        <h2>Projects</h2>
        <div className="flex flex-row flex-wrap mt-7 ">
          <Card
            imgSrc={livNLogo}
            title={"Mobile app Liv-n frontend"}
            tech={"React native - Expo"}
            text={
              "In charge of the mobile app’s frontend development just a few weeks into my internship! A challenge I truly enjoy, pushing me to give the best of myself. The app will be available soon."
            }
            link={"https://youtube.com/shorts/cQFP2wcvvGk"}
          />
          <Card
            imgSrc={marvelLogo}
            title={"Happy Marvel fans"}
            tech={"React - Express - MongoDB"}
            text={
              "An individual technical test completed in two and a half days, featuring a user interface, a backend, and two APIs. I really enjoyed building this web application during my training. I also loved implementing a search and pagination system that I coded entirely from scratch."
            }
            link={"https://test-technique-marvel.netlify.app/"}
          />
          <Card
            imgSrc={quizMeUpLogo}
            title={"QuizzMeUp"}
            tech={"React - Express - MongoDb"}
            text={
              "I had the pleasure of being Lead Dev, in addition to frontend developer, on this team project for the end of my training. Merges, code reviews, and daily stand-ups were part of my daily routine during these two weeks of development. The result: an MVP enabling the training organization Le Réacteur to create and offer quizzes to their students completely autonomously."
            }
            link={"https://quizmeup-vincent.netlify.app/"}
            noResp
          />
          {/* <Card
            imgSrc={fakeTripLogo}
            title={"Mobile app Liv-n frontend"}
            tech={"React native - Expo Go"}
            text={
              "A simple frontend exercise using HTML and CSS, where I recreated the TripAdvisor website."
            }
            link={"https://precious-pastelito-540861.netlify.app/"}
            moreClass="h-full"
          /> */}
          {/* <Card
            imgSrc={toDoList}
            title={"To-do list"}
            tech={"React - Node.js"}
            text={
              "My very first React app: a to-do list with simple authentication."
            }
            link={"https://todolist-0h0o.onrender.com/"}
          /> */}
          <Card
            imgSrc={timesTableGames}
            title={"Times table games"}
            tech={"React"}
            text={"An old personal project made with vanilla JS, HTML, and CSS"}
            link={"https://jeux-tables-de-multiplication.onrender.com"}
          />
        </div>
      </div>
    </Section>
  );
});

Projects.displayName = "Projects";

export default Projects;
