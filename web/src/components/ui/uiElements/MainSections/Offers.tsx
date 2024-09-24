import Button from "@/components/ui/uiComponents/Button";
import Card from "@/components/ui/uiComponents/Card";
import Container from "@/components/ui/uiComponents/Container";
import Title from "@/components/ui/uiComponents/Title";
import React from "react";

const Offers = () => {
  return (
    <>
      <Title id={"offers"} label={"Nos offres"} color="black" />
      <Container background="bg-primary">
        <Card title="Basics Offer">
          <Button label={"Valider"} bgColor="secondary" />
        </Card>
        <Card title="Silver Offer">
          <Button label={"Valider"} bgColor="secondary" />
        </Card>
        <Card title="Gold Offer">
          <Button label={"Valider"} bgColor="secondary" />
        </Card>
      </Container>
    </>
  );
};

export default Offers;
