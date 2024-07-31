import { navLinks } from "@/constants/constants";
import Link from "next/link";
import React, { useState } from "react";

const NavLinks = () => {
  const link = navLinks();

  return (
    <nav>
      <ul className="flex gap-14 text-sm font-semibold text-primary max-lg:hidden">
        {link.map((item) => (
          <li key={item.label}>
            <Link
              href={item.id}
              className="font-montserrat leading-normal text-md"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
