import React from "react";
import { clsx } from "clsx";

const Container = ({ children, className = "" }) => {
  const classProps =
    "flex max-lg:flex-col gap-16 h-fit p-10 m-10 shadow-md rounded-md items-center bg-gray-50";
  return (
    <>
      <section
        className={clsx(
          classProps,

          className
        )}
      >
        {children}
      </section>
    </>
  );
};

export default Container;
