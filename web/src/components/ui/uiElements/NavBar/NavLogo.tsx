import Image from "next/image";
import React from "react";

const NavLogo = () => {
  return (
    <a href="/">
      <Image src="/LOGO.png" alt="logo" width={275} height={275} />
    </a>
  );
};

export default NavLogo;
