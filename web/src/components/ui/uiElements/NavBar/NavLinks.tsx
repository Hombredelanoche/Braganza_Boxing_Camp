import Button from "@/components/ui/uiComponents/Button";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const link = navLinks();

  return (
    <>
      <nav className="max-lg:hidden">
        <ul className="flex gap-8 ">
          {link.map((item) => (
            <li key={item.label}>
              <Link
                href={item.id}
                className="leading-normal font-semibold text-sm hover:font-bold hover:text-secondaryLight hover:border-b-2 hover:border-red-500 transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;
