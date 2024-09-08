import BlockTitle from "@/components/ui/uiElements/BlockTitle";
import Calendar from "@/components/ui/uiElements/Calendar";
import Container from "@/components/ui/uiElements/Container";
import React from "react";

const Planning = () => {
  return (
    <>
      <BlockTitle id="planning" title="Planning" />
      <Container>
        <Calendar />
      </Container>
    </>
  );
};

export default Planning;
