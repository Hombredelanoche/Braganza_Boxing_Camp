"use client";
import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const defaultBg = {
  primary:
    "border-secondaryLight hover:bg-secondary hover:text-white transation-all",
  secondary: "border-primary hover:bg-primary hover:text-white transation-all",
  secondaryDark:
    "bg-primary border-primary hover:border-secondary text-white hover:bg-secondaryLight",
};

const defaultSize = {
  smallSize: "py-2 px-4",
  normalSize: "py-4 px-5",
  bigSize: "py-8 px-10",
};

const durationTiming = {
  quick: "duration-150",
  medium: "duration-300",
};

const Button = ({
  label,
  bgColor = "primary",
  size = "normalSize",
  duration = "medium",
  path,
  ...otherProps
}) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    if (path) {
      router.push(path);
    }
  };
  return (
    <>
      <button
        className={clsx(
          "border-2 rounded-lg text-sm font-extrabold shadow-md w-40 h-auto",
          defaultBg[bgColor],
          defaultSize[size],
          durationTiming[duration]
        )}
        onClick={handleClick}
        {...otherProps}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
