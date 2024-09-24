import clsx from "clsx";
import React from "react";

const titleColor = {
  primary: "text-primary",
  secondaryLight: "text-secondaryLight",
  white: "text-white",
};

const Title = ({ label, id, color = "white", className = "" }) => {
  return (
    <h1
      id={id}
      className={clsx(
        "flex py-10 px-8 font-extrabold mx-auto text-6xl",
        titleColor[color],
        className
      )}
    >
      {label}
    </h1>
  );
};

export default Title;
