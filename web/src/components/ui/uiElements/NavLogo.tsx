import Image from "next/image";
import React from "react";

const NavLogo = () => {
  return (
    <a href="/">
      <Image src="/BBC_LOGO.jpg" alt="logo" width={200} height={200} />
    </a>
  );
};

export default NavLogo;
