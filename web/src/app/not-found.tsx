"use client";

import Container from "@/components/ui/uiElements/Container";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Container>
        <article className="flex flex-col justify-center items-center text-center mx-auto min-h-screen font-bold">
          <h1 className="text-3xl text-white">
            La page que vous cherchez n{"'"}a pas été trouver
          </h1>
        </article>
      </Container>
    </>
  );
};

export default NotFound;
