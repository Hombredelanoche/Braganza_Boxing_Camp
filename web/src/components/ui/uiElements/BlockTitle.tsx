import React from "react";

const BlockTitle = ({ id, title }) => {
  return (
    <>
      <article className="flex w-full justify-start">
        <h1
          id={id}
          className="text-4xl font-bold w-full p-5 border-b-2 border-black"
        >
          {title}
        </h1>
      </article>
    </>
  );
};

export default BlockTitle;
