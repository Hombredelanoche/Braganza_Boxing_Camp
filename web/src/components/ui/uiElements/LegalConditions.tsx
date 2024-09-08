import { legalConditionsLinks } from "@/constants/constants";
import { LegalConditionsLinksProps } from "@/services/interfaces";
import Link from "next/link";
import React from "react";

const LegalConditions = () => {
  const link: LegalConditionsLinksProps[] = legalConditionsLinks();
  return (
    <>
      <article className="mx-auto ">
        <ul className="flex flex-col text-left max-lg:text-center">
          {link.map((items) => (
            <li
              key={items.title}
              className="text-sm opacity-40 transition-all hover:text-black hover:opacity-100 "
            >
              <Link href={items.href} title={items.title}>
                {items.name}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default LegalConditions;
