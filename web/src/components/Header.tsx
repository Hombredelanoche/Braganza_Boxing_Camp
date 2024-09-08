import NavLinks from "@/components/ui/NavLinks";
import NavLogo from "@/components/ui/NavLogo";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center content-center py-5 px-10 mx-auto shadow-sm rounded-sm bg-black">
        <NavLogo />
        <NavLinks />
      </header>
    </>
  );
};

export default Header;
