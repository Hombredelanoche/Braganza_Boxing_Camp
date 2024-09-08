import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const SocialMedias = () => {
  return (
    <>
      <article className="flex flex-col mx-auto gap-5">
        <h2 className="flex flex-col ">
          <Image src="/LOGO.png" alt="logoFooter" width={150} height={150} />
        </h2>
        <div className="flex gap-20 items-center align-middle text-center justify-center">
          <a href="https://www.tiktok.com/@braganzaboxing">
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-3xl hover:text-secondary transition-colors "
            />
          </a>
          <a href="https://www.instagram.com/braganzaboxing/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-3xl hover:text-secondary p-2 transition-colors"
            />
          </a>
        </div>
      </article>
    </>
  );
};

export default SocialMedias;
