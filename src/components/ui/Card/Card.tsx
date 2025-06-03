import type { ReactElement } from "react";
import "./Card.css";
interface CardProps {
  imgSrc: string;
  title: string;
  tech: string;
  text: string;
  link: string;
}

const Card = ({ imgSrc, title, tech, text, link }: CardProps): ReactElement => {
  return (
    <a href="">
      <div className="card w-[320px] border-2 rounded-xl p-4">
        <div className="w-full flex justify-center items-center h-50">
          <img src={imgSrc} alt="" />
        </div>
        <h3>{title}</h3>
        <h4>{tech}</h4>
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Card;
