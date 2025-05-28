import React from "react";

const Section = ({
  children,
  classSup,
  id,
}: {
  children: React.ReactNode;
  classSup: string;
  id: string;
}) => {
  return (
    <section className={classSup} id={id}>
      {children}
    </section>
  );
};

export default Section;
