import clsx from "clsx";
import React from "react";

const Card = ({ title, className = null, children }) => {
  return (
    <>
      <article
        className={clsx(
          `flex flex-col p-5 gap-3 border-2 shadow-md transition-all duration-300 hover:shadow-secondary  rounded-lg w-80 bg-white`,
          className
        )}
      >
        <h2 className="text-xl font-extrabold text-center py-3"> {title} </h2>
        <div className="flex flex-col gap-5 w-full"> {children} </div>
      </article>
    </>
  );
};

export default Card;
