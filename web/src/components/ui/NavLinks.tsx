"use client";
import { navLinks } from "@/constants/constants";
import React, { useState } from "react";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(null);
  const link: NavLink = navLinks();

  const handleclick = (id: string) => {
    setActiveLink(id);
  };
  return (
    <nav>
      <ul className="flex gap-14 text-sm font-semibold text-primary max-lg:hidden">
        {link.map((item) => (
          <li key={item.label}>
            <a
              href={item.id}
              className="font-montserrat leading-normal text-md"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
