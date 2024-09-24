import NavCTA from "@/components/ui/uiElements/NavBar/NavCTA";
import NavLinks from "@/components/ui/uiElements/NavBar/NavLinks";
import NavLogo from "@/components/ui/uiElements/NavBar/NavLogo";

const Header = () => {
  return (
    <>
      <header className="w-full flex items-center content-center justify-around py-5 shadow-sm rounded-md">
        <NavLogo />
        <NavLinks />
        <NavCTA />
      </header>
    </>
  );
};

export default Header;
