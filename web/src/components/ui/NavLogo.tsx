import Image from "next/image";
import React from "react";

const NavLogo = () => {
  return (
    <a href="/">
      <Image src="/LOGO_J.png" alt="logo" width={160} height={160} />
    </a>
  );
};

export default NavLogo;
