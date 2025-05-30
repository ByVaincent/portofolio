import React, { forwardRef } from "react";
import "./Docs.css";
import Section from "../ui/Section";

interface DocsProps {}

const Docs = forwardRef<HTMLDivElement, DocsProps>((props, ref) => {
  return (
    <Section
      classSup="min-h-screen flex flex-col justify-center items-center p-8"
      id="docs"
      ref={ref}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Docs</h2>
      <div className="max-w-4xl mx-auto">{/* Documentation à venir */}</div>
    </Section>
  );
});

Docs.displayName = "Docs";

export default Docs;
