import clsx from "clsx";
import React from "react";

const SeparationLine = ({ className = null, children, author }) => {
  return (
    <div
      className={clsx(
        `flex flex-col gap-5 w-full p-10 border-secondaryLight border-t-2 border-b-2 justify-center items-center`,
        className
      )}
    >
      <p> {children} </p>
      <p className="opacity-40 text-gray-400"> {author} </p>
    </div>
  );
};

export default SeparationLine;
