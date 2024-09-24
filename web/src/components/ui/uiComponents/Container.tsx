import React from "react";
import { clsx } from "clsx";

const colDirection = {
  col: "flex-col",
};

const Container = ({
  children,
  className = "",
  background = "bg-gray-50",
  flexDirection = "",
}) => {
  const classProps =
    "flex max-lg:flex-col max-lg:gap-10 justify-around px-20 py-32";
  return (
    <>
      <section
        className={clsx(
          classProps,
          background,
          colDirection[flexDirection],
          className
        )}
      >
        {children}
      </section>
    </>
  );
};

export default Container;
