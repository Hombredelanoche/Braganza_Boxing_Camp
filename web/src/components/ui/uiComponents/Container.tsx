import React from "react";
import { clsx } from "clsx";

const Container = ({
  children,
  className = "",
  id = "",
  background = "bg-gray-50",
}) => {
  const classProps =
    "flex max-lg:flex-col max-lg:gap-10 justify-around px-20 py-32";
  return (
    <>
      <section className={clsx(classProps, background, className)}>
        {children}
      </section>
    </>
  );
};

export default Container;
