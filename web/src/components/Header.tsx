import NavLinks from "@/components/ui/uiElements/NavLinks";
import NavLogo from "@/components/ui/uiElements/NavLogo";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center content-center px-10 mx-auto shadow-sm rounded-sm">
        <NavLogo />
        <NavLinks />
      </header>
    </>
  );
};

export default Header;
