import React, { forwardRef } from "react";
import "./Docs.css";
import Section from "../ui/Section";

interface DocsProps {}

const Docs = forwardRef<HTMLDivElement, DocsProps>((props, ref) => {
  return (
    <Section classSup="" id="whoami" ref={ref}>
      <div className="flex flex-col">
        <h2>Docs</h2>
        <a href="/cv-emploi.pdf" className="mt-5">
          <button className="downloadCv p-5 border-2 rounded-md w-50 ">
            Download my CV
          </button>
        </a>
      </div>
    </Section>
  );
});

Docs.displayName = "Docs";

export default Docs;
