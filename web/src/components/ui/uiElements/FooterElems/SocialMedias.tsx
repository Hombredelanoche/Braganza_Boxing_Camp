import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMedias = () => {
  return (
    <>
      <article className="flex flex-col justify-center items-center mx-auto gap-10">
        <h2>
          <Image src="/LOGO.png" alt="logoFooter" width={150} height={150} />
        </h2>
        <div className="flex gap-14 items-center align-middle text-center justify-center">
          <SocialIcon
            url="https://www.tiktok.com/@braganzaboxing"
            label="BraganzaBoxingCamp_TiktokMedia"
          />

          <SocialIcon
            url="https://www.instagram.com/braganzaboxing/"
            label="BraganzaBoxingCamp_InstagramMedia"
          />
        </div>
      </article>
    </>
  );
};

export default SocialMedias;
