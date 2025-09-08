import type { ReactElement } from "react";
import "./Card.css";
import { FiAlertTriangle } from "react-icons/fi";
interface CardProps {
  imgSrc: string;
  title: string;
  tech: string;
  text: string;
  link: string;
  moreClass?: string;
  noResp?: boolean;
}

const Card = ({
  imgSrc,
  title,
  tech,
  text,
  link,
  moreClass,
  noResp,
}: CardProps): ReactElement => {
  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 px-2 mb-5 ${moreClass}`}>
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
          {noResp && (
            <div className="flex gap-2 color items-center mb-2 text-orange-400">
              <FiAlertTriangle />
              <h5>No responsive</h5>
            </div>
          )}
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
