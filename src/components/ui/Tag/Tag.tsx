import type { ReactElement } from "react";
import "./tag.css";

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps): ReactElement => {
  return <div className="tag rounded-full px-4 py-2">{text}</div>;
};

export default Tag;
