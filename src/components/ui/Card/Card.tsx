import type { ReactElement } from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  tech: string;
  text: string;
}

const Card = ({ imgSrc, title, tech, text }: CardProps): ReactElement => {
  return (
    <div>
      <img src={imgSrc} alt="" />
      <h3>{title}</h3>
      <h4>{tech}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Card;
