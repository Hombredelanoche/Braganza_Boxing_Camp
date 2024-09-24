import React from "react";
import { clsx } from "clsx";

const flexDirection = {
  rowReverse: "flex-row-reverse",
  colReserse: "flex-col-reverse",
};

const SubContainer = ({ children, className = "", flexReserse = "" }) => {
  const classProps = "flex max-lg:flex-col gap-10 justify-around items-center";
  return (
    <>
      <article
        className={clsx(classProps, flexDirection[flexReserse], className)}
      >
        {children}
      </article>
    </>
  );
};

export default SubContainer;
