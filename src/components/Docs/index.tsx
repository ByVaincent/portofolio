import React, { forwardRef } from "react";
import "./Docs.css";

interface DocsProps {
  className?: string;
}

const Docs = forwardRef<HTMLDivElement, DocsProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center p-8"
      id="docs"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Docs</h2>
      <div className="max-w-4xl mx-auto">{/* Documentation à venir */}</div>
    </section>
  );
});

Docs.displayName = "Docs";

export default Docs;
