import "./Technologies.css";
import Section from "../ui/Section";
import { forwardRef } from "react";
import { motion } from "framer-motion";
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

interface TechnologiesProps {}

const Technologies = forwardRef<HTMLDivElement, TechnologiesProps>(
  (_props, ref) => {
    return (
      <Section classSup="w-full" id="technologies" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" ">Technologies</h2>
          <div className="flex flex-wrap mt-5 gap-5 justify-around">
            <div className="w-20 aspect-square flex flex-col gap-1 ">
              <img src={jsLogo} alt="Javascript logo" className="w-full" />
              <p className="text-center text-xs ">Javascript</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={tsLogo}
                alt="Typescript logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Typescript</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={reactLogo}
                alt="React logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">React</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={reactNativeLogo}
                alt="React Native logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">React Native</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={nodeLogo}
                alt="Node.js logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Node.js</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={phpLogo}
                alt="PHP logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">PHP</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={cilogo}
                alt="CodeIgniter logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">CodeIgniter</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={mongoDbLogo}
                alt="Mongo DB logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Mongo DB</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={tailwindcssLogo}
                alt="Tailwind CSS logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Tailwind CSS</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={bootstapLogo}
                alt="Bootstrap logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Bootstrap</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={htmlLogo}
                alt="HTML5 logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Html 5</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={cssLogo}
                alt="CSS3 logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Css 3</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={gitLogo}
                alt="Git logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Git</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={dockerLogo}
                alt="Docker logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Docker</p>
            </div>
            <div className="w-20 aspect-square flex flex-col gap-1">
              <img
                src={figmaLogo}
                alt="Figma logo"
                className="w-full aspect-square"
              />
              <p className="text-center text-xs ">Figma</p>
            </div>
          </div>
        </motion.div>
      </Section>
    );
  }
);

Technologies.displayName = "Technologies";

export default Technologies;
