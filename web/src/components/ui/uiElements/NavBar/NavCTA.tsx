import Button from "@/components/ui/uiComponents/Button";
import React from "react";

const NavCTA = () => {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex gap-3">
        <Button label={"Se connecter"} bgColor="secondary" />
        <Button label={"Nous contacter"} bgColor="secondaryDark" />
      </ul>
    </nav>
  );
};

export default NavCTA;
