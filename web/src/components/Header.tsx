import Button from "@/components/ui/uiComponents/Button";
import NavLinks from "@/components/ui/uiElements/NavLinks";
import NavLogo from "@/components/ui/uiElements/NavLogo";

const Header = () => {
  return (
    <>
      <header className="w-full flex items-center content-center justify-around py-5 shadow-sm rounded-md">
        <NavLogo />
        <NavLinks />
        <Button label={"Lancez-toi"} />
      </header>
    </>
  );
};

export default Header;
