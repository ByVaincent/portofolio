import { forwardRef } from "react";
import "./Contact.css";

interface ContactProps {
  className?: string;
}

const Contact = forwardRef<HTMLDivElement, ContactProps>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center p-8"
      id="contact"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
      <div className="max-w-4xl mx-auto">
        {/* Formulaire de contact à venir */}
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
