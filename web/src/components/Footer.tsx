import LegalConditions from "@/components/ui/LegalConditions";
import SocialMedias from "@/components/ui/SocialMedias";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col">
        <section className="flex justify-between items-center text-center h-40 bg-gray-100">
          <SocialMedias />
          <LegalConditions />
        </section>
        <section className="flex"></section>
      </footer>
    </>
  );
};

export default Footer;
