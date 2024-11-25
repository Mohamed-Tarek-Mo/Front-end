import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

import contact_hero from "../assets/contact_hero.jpg";

export default function Contact() {
  return (
    <div>
      <Hero
        cName="w-100 position-relative"
        heroImg={contact_hero}
        title="Contact"
        url="/"
      ></Hero>
      <ContactForm></ContactForm>
    </div>
  );
}
