import Button from "@/components/ui/uiComponents/Button";
import React from "react";

const NavCTA = () => {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex gap-3">
        <Button label={"S'inscrire"} bgColor="secondary" path="/sign-up" />
        <Button label={"Connexion"} bgColor="secondaryDark" path="/sign-in" />
        <Button label={"Profil"} bgColor="secondaryDark" path="/user/profile" />
      </ul>
    </nav>
  );
};

export default NavCTA;
