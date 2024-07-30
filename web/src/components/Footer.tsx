import ContactMe from "@/components/ui/ContactMe";
import SocialMedias from "@/components/ui/SocialMedias";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-gray-300">
        <section className="flex justify-between h-11]">
          <SocialMedias />
          <ContactMe />
        </section>
      </footer>
    </>
  );
};

export default Footer;
