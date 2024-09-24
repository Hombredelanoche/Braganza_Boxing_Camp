import Copyright from "@/components/ui/uiElements/FooterElems/Copyright";
import LegalConditions from "@/components/ui/uiElements/FooterElems/LegalConditions";
import SocialMedias from "@/components/ui/uiElements/FooterElems/SocialMedias";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col ">
        <section className="flex max-lg:flex-col justify-between items-center text-center h-fit py-5 shadow-sm gap-10">
          <SocialMedias />
          <LegalConditions />
        </section>
        <section className="flex justify-center items-center text-center p-4 ">
          <Copyright />
        </section>
      </footer>
    </>
  );
};

export default Footer;
