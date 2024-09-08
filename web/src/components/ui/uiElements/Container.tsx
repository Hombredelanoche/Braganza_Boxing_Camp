import React from "react";
import { clsx } from "clsx";

const Container = ({ children, className = null }) => {
  const classProps =
    "flex max-lg:flex-col gap-16 h-fit p-10 shadow-sm rounded-md items-center";
  return (
    <>
      <section className={clsx(classProps, className)}>{children}</section>
    </>
  );
};

export default Container;
