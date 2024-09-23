import React from "react";
import clsx from "clsx";

const Button = ({ label }) => {
  return (
    <>
      <button
        className={clsx(
          "py-4 px-5 border-2 border-secondaryLight rounded-lg text-sm font-bold hover:bg-secondary hover:text-white transation-all"
        )}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
