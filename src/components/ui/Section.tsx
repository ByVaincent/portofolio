import React, { forwardRef } from "react";

const Section = forwardRef<
  HTMLElement,
  {
    children: React.ReactNode;
    classSup: string;
    id: string;
  }
>(({ children, classSup, id }, ref) => {
  return (
    <section className={"mt-10 " + { classSup }} id={id} ref={ref}>
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;
