import NavLinks from "@/components/ui/uiElements/NavLinks";
import NavLogo from "@/components/ui/uiElements/NavLogo";

const Header = () => {
  return (
    <>
      <header className="w-full flex items-center content-center justify-around px-5 shadow-sm rounded-md">
        <NavLogo />
        <NavLinks />
      </header>
    </>
  );
};

export default Header;
