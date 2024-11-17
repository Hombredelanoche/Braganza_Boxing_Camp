import Button from "@/components/ui/uiComponents/Button";
import React from "react";

const NavCTA = () => {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex gap-3">
        <Button label={"Se connecter"} bgColor="secondary" path="/sign-up" />
        <Button
          label={"Nous contacter"}
          bgColor="secondaryDark"
          path="/contactUs"
        />
      </ul>
    </nav>
  );
};

export default NavCTA;
