import Button from "@/components/ui/uiComponents/Button";
import Card from "@/components/ui/uiComponents/Card";
import Container from "@/components/ui/uiComponents/Container";
import Title from "@/components/ui/uiComponents/Title";

import React from "react";

const Offers = () => {
  return (
    <>
      <Title id={"offers"} label={"Nos offres"} color="black" />
      <Container background="bg-primary" className="max-lg:items-center">
        <Card title="Mercredi">
          <div className="flex">
            <p>Lieu</p>
            <p>Boxium</p>
          </div>
          <div className="flex">Heure</div>
          <p>Description</p>
          <div className="flex">Prix</div>
          <Button label={"S'inscrire"} bgColor="primary" />
        </Card>
      </Container>
    </>
  );
};

export default Offers;
