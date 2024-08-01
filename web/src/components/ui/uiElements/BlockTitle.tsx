import React from "react";

const BlockTitle = ({ title, children }) => {
  return (
    <>
      <article className="flex flex-col h-fit gap-2 w-2/3">
        <h1 className="text-4xl w-fit"> {title} </h1>
        <p className="text-sm">{children}</p>
      </article>
    </>
  );
};

export default BlockTitle;
