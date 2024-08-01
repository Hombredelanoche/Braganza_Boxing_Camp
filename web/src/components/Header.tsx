import NavLinks from "@/components/ui/NavLinks";
import NavLogo from "@/components/ui/NavLogo";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center content-center md:max-w-5xl p-4 mx-auto shadow-sm rounded-sm">
        <NavLogo />
        <NavLinks />
      </header>
    </>
  );
};

export default Header;
