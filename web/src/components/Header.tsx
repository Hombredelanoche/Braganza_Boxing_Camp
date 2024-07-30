import NavLinks from "@/components/ui/NavLinks";
import NavLogo from "@/components/ui/NavLogo";

const Header = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center content-center gap-10 bg-secondary p-4">
        <NavLogo />
        <NavLinks />
      </header>
    </>
  );
};

export default Header;
