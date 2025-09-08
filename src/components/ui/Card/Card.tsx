import type { ReactElement } from "react";
import "./Card.css";
interface CardProps {
  imgSrc: string;
  title: string;
  tech: string;
  text: string;
  link: string;
  moreClass?: string;
}

const Card = ({
  imgSrc,
  title,
  tech,
  text,
  link,
  moreClass,
}: CardProps): ReactElement => {
  return (
    <div className={"w-full sm:w-1/2 md:w-1/3 px-2 mb-5" + moreClass}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card  border-2 rounded-xl p-4">
          <div className="w-full flex justify-center items-center h-50">
            <img
              src={imgSrc}
              alt=""
              className={imgSrc === "/public/fake-trip.png" ? "h-[70%]" : ""}
            />
          </div>
          <h3>{title}</h3>
          <h4>{tech}</h4>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
