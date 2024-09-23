import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMedias = () => {
  return (
    <>
      <article className="flex flex-col mx-auto gap-5">
        <h2 className="flex flex-col justify-center items-center">
          <Image src="/LOGO.png" alt="logoFooter" width={100} height={100} />
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
