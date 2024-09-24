import clsx from "clsx";
import React from "react";

const Card = ({ title, className = null, children }) => {
  return (
    <>
      <article
        className={clsx(
          `flex flex-col justify-center mx-auto items-center text-center p-5 gap-3 border-2 shadow-sm rounded-lg w-80 bg-white hover:text-white hover:bg-black transition-all`,
          className
        )}
      >
        <h2 className="text-xl font-bold"> {title} </h2>
        <div> {children} </div>
      </article>
    </>
  );
};

export default Card;
