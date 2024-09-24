"use client";

import SubContainer from "@/components/ui/uiComponents/SubContainer";
import React from "react";

const NotFound = () => {
  return (
    <>
      <SubContainer>
        <article className="flex flex-col justify-center items-center text-center mx-auto min-h-screen font-bold">
          <h1 className="text-3xl">
            La page que vous cherchez n{"'"}a pas été trouver
          </h1>
        </article>
      </SubContainer>
    </>
  );
};

export default NotFound;
