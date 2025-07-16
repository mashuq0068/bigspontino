import React from "react";
import ContactHero from "./components/ContactHero";
import ContactMethods from "./components/ContactMethods";

const ContactLocation = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="">
        <ContactHero />
        <ContactMethods />
      </main>
    </div>
  );
};

export default ContactLocation;
