import "./WhoAmI.css";
import Section from "../ui/Section";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import linkedin from "../../assets/logos/linkedin_logo.svg";
import github from "../../assets/logos/git_hub_logo_white.png";
import jsLogo from "../../assets/logos/js_logo.svg";
import tsLogo from "../../assets/logos/ts_logo.svg";
import reactLogo from "../../assets/logos/react_logo.svg";
import reactNativeLogo from "../../assets/logos/reactnative_logo.svg";
import nodeLogo from "../../assets/logos/nodejs_logo.svg";
import mongoDbLogo from "../../assets/logos/mongodb_icon.svg";
import phpLogo from "../../assets/logos/php.svg";
import cilogo from "../../assets/logos/codeIgniter.svg";
import htmlLogo from "../../assets/logos/html5_logo.svg";
import cssLogo from "../../assets/logos/Css3logo_2.svg";
import gitLogo from "../../assets/logos/git.svg";
import dockerLogo from "../../assets/logos/logo-docker.svg";
import bootstapLogo from "../../assets/logos/logo-bootstrap.svg";
import tailwindcssLogo from "../../assets/logos/logo-tailwind.svg";
import figmaLogo from "../../assets/logos/logo-figma.svg";

interface WhoAmIProps {}

const WhoAmI = forwardRef<HTMLDivElement, WhoAmIProps>((_props, ref) => {
  return (
    <Section classSup="w-full" id="whoami" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between  mb-5 sm:px-5">
          <div className="">
            <h2>Who I am</h2>
            <h3>Vincent Jacquelin</h3>
            <div className="flex items-center gap-4 mt-5 flex-wrap w-2/2 sm:w-full">
              <a href="https://www.codewars.com/users/ByVaincent">
                <img
                  src="https://www.codewars.com/users/ByVaincent/badges/micro"
                  alt="logo codewars"
                  className="w-40"
                />
              </a>
              <a href="https://github.com/ByVaincent">
                <img src={github} alt="logo github" className="w-30" />
              </a>
              <a href="https://www.linkedin.com/in/vincent-jacquelin-12074a2b8/">
                <img src={linkedin} alt="logo linkedin" className="h-10" />
              </a>
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 h-full aspect-square rounded-full overflow-hidden ">
            <a
              href="../../../public/pict.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pict.png"
                alt="Photo de Vincent Jacquelin"
                className=""
              />
            </a>
          </div>
        </div>

        <p>
          I'm currently completing a six-month internship at Liv-n, an
          innovative startup in the real estate management sector, as part of my
          final project for a Bachelor's-level (Bac +3/4) web development
          degree.
        </p>
        <br />
        <p>
          {" "}
          I joined the team with a real challenge: learning{" "}
          <span className="strong">PHP</span> and the CodeIgniter framework (v3
          & v4) on my own in order to contribute to their fullstack project — a
          challenge all the more exciting as I had just finished a{" "}
          <span className="strong">React</span> training program, which I{" "}
          <span className="strong"> personally financed</span> through a loan
          and completed with Le Réacteur. Impressed by my dedication and
          abilities, the team at Liv-n later entrusted me with the{" "}
          <span className="strong">frontend mobile development</span> of their
          application, using <span className="strong">React Native</span> for
          both Android and iOS platforms.{" "}
        </p>
        <br />
        <p>
          My passion for programming began during an initial training in web
          design. Since then, my interest in interface design and smooth user
          experiences has only grown. That's why today, I'm looking to join a
          tech team in the Lyon area as a{" "}
          <span className="strong">fullstack</span> developer.{" "}
          <span className="strong">Driven</span>,
          <span className="strong">self-taught</span>, and{" "}
          <span className="strong">team-oriented</span>, I put just as much care
          into writing clean code as I do into building strong, positive
          relationships.
        </p>

        {/* <div className="flex flex-wrap mt-5 gap-5 justify-around">
          <div className="w-20 aspect-square flex flex-col gap-1 ">
            <img src={jsLogo} alt="" className="w-full" />
            <p className="text-center text-xs ">Javascript</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={tsLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Typescript</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={reactLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">React</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img
              src={reactNativeLogo}
              alt=""
              className="w-full aspect-square"
            />
            <p className="text-center text-xs ">React Native</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={nodeLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Node.js</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={phpLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">PHP</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={cilogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">CodeIgniter</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={mongoDbLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Mongo DB</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img
              src={tailwindcssLogo}
              alt=""
              className="w-full aspect-square"
            />
            <p className="text-center text-xs ">Tailwind CSS</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={bootstapLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Bootstrap</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={htmlLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Html 5</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={cssLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Css 3</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={gitLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Git</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={dockerLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Docker</p>
          </div>
          <div className="w-20 aspect-square flex flex-col gap-1">
            <img src={figmaLogo} alt="" className="w-full aspect-square" />
            <p className="text-center text-xs ">Figma</p>
          </div>
        </div> */}
      </motion.div>
    </Section>
  );
});

WhoAmI.displayName = "WhoAmI";

export default WhoAmI;
