import clsx from "clsx";
import Image from "next/image";
import React from "react";

const TrainingCard = ({ title, className = null, children }) => {
  return (
    <>
      <article
        className={clsx(
          `flex flex-col justify-center mx-auto items-center p-8 gap-3 border-2 shadow-sm rounded-lg w-80 hover:text-white hover:bg-black transition-all`,
          className
        )}
      >
        <h2 className="text-xl font-bold"> {title} </h2>
        <div> {children} </div>
      </article>
    </>
  );
};

export default TrainingCard;
