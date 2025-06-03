import React, { forwardRef } from "react";
import "./Docs.css";
import Section from "../ui/Section";

interface DocsProps {}

const Docs = forwardRef<HTMLDivElement, DocsProps>((props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="flex justify-between items-center flex-wrap">
        <h2>Docs</h2>
      </div>
    </Section>
  );
});

Docs.displayName = "Docs";

export default Docs;
