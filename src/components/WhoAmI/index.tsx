import "./WhoAmI.css";
import Section from "../ui/Section";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import linkedin from "../../../public/linkedin_logo.svg";
import github from "../../../public/git_hub_logo_white.png";
import jsLogo from "../../../public/js_logo.svg";
import tsLogo from "../../../public/ts_logo.svg";
import reactLogo from "../../../public/react_logo.svg";
import reactNativeLogo from "../../../public/reactnative_logo.svg";
import nodeLogo from "../../../public/nodejs_logo.svg";
import mongoDbLogo from "../../../public/mongodb_icon.svg";
import htmlLogo from "../../../public/html5_logo.svg";
import cssLogo from "../../../public/Css3logo_2.svg";

interface WhoAmIProps {}

const WhoAmI = forwardRef<HTMLDivElement, WhoAmIProps>((props, ref) => {
  return (
    <Section classSup="w-full" id="whoami" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className=" justify-between items-center flex-wrap">
          <h2>Who I am</h2>
          <div className="flex justify-between  mb-5 px-5">
            <div className="">
              <h3>Vincent Jacquelin</h3>
              <div className="flex items-center gap-4 mt-5 flex-wrap">
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
            <div className="w-[200px] aspect-square rounded-full overflow-hidden border-2border-[#3c4487]pt-2">
              <img
                src="/pict.png"
                alt="Photo de Vincent Jacquelin"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <p>
          I'm currently completing a six-month internship at Liv-n, an
          innovative startup in the real estate management sector, as part of my
          final project for a Bachelor's-level (Bac +3/4) web development
          degree. I joined the team with a real challenge: learning PHP and the
          CodeIgniter framework (v3 & v4) on my own in order to contribute to
          their fullstack project — a challenge all the more exciting as I had
          just finished a React training program, which I personally financed
          through a loan and completed with Le Réacteur. Impressed by my
          dedication and abilities, the team at Liv-n later entrusted me with
          the frontend mobile development of their application, using React
          Native for both Android and iOS platforms. My passion for programming
          began during an initial training in web design. Since then, my
          interest in interface design and smooth user experiences has only
          grown. That's why today, I'm looking to join a tech team in the Lyon
          area as a frontend developer. Driven, self-taught, and team-oriented,
          I put just as much care into writing clean code as I do into building
          strong, positive relationships.
        </p>

        <div className="flex flex-wrap mt-5">
          <div className="w-1/4 sm:w-1/8 flex justify-between items-center">
            <img src={jsLogo} alt="" className="w-full p-2" />
          </div>
          <div className="w-1/4 sm:w-1/8 flex justify-between items-center">
            <img src={tsLogo} alt="" className="w-full p-2" />
          </div>
          <div className="w-1/4 sm:w-1/8 flex justify-between items-center">
            <img src={reactLogo} alt="" className="w-full p-2" />
          </div>
          <div className="w-1/4 sm:w-1/8 flex justify-between items-center">
            <img src={reactNativeLogo} alt="" className="w-full p-2" />
          </div>
          <div className="w-1/4 sm:w-1/8 flex justify-between items-center">
            <img src={nodeLogo} alt="" className="w-full p-2" />
          </div>
          <div className="w-1/4 sm:w-1/8 flex justify-between items-center">
            <img src={mongoDbLogo} alt="" className="w-full p-2" />
          </div>
          <div className="w-1/4 sm:w-1/8 flex justify-between items-center">
            <img src={htmlLogo} alt="" className="w-full p-2" />
          </div>
          <div className="w-1/5 sm:w-1/9 flex justify-between items-center">
            <img src={cssLogo} alt="" className="w-full p-2" />
          </div>
        </div>
      </motion.div>
    </Section>
  );
});

WhoAmI.displayName = "WhoAmI";

export default WhoAmI;
