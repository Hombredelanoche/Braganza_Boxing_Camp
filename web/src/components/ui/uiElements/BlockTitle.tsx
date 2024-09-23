import React from "react";

const BlockTitle = ({ id, title }) => {
  return (
    <>
      <article className="flex w-full justify-start">
        <h1
          id={id}
          className="text-5xl font-bold border-black bg-black text-white rounded-md p-5 w-fit"
        >
          {title}
        </h1>
      </article>
    </>
  );
};

export default BlockTitle;
