import React from "react";

const BlockTitle = ({ id, title }) => {
  return (
    <>
      <article className="flex w-full justify-start">
        <h1
          id={id}
          className="text-6xl font-bold w-full p-5 border-b-2 border-red-500"
        >
          {title}
        </h1>
      </article>
    </>
  );
};

export default BlockTitle;
