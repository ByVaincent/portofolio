import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Section = forwardRef<
  HTMLElement,
  {
    children: React.ReactNode;
    classSup: string;
    id: string;
    isFirst?: boolean;
  }
>(({ children, classSup, id, isFirst }, ref) => {
  return (
    <motion.section
      className={`${isFirst ? "" : "mt-24"} ${classSup}`}
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
});

Section.displayName = "Section";

export default Section;
