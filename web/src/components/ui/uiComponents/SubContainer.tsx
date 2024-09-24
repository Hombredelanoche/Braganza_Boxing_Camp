import React from "react";
import { clsx } from "clsx";

const SubContainer = ({ children, className = "" }) => {
  const classProps =
    "flex max-lg:flex-col gap-10 p-10 m-10 shadow-md rounded-md items-center";
  return (
    <>
      <article
        className={clsx(
          classProps,

          className
        )}
      >
        {children}
      </article>
    </>
  );
};

export default SubContainer;
