import BlockTitle from "@/components/ui/uiElements/BlockTitle";
import Container from "@/components/ui/uiElements/Container";
import TrainingCard from "@/components/ui/uiElements/TrainingCard";
import React from "react";

const Training = () => {
  return (
    <>
      <BlockTitle id="training" title="Training" />
      <Container>
        <TrainingCard title="Sparing">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id inventore
          provident quod, debitis ipsum modi odio labore corrupti eaque
          quibusdam, exercitationem suscipit quas nemo, nam alias? Deserunt
          porro ipsa voluptatum.
        </TrainingCard>
        <TrainingCard title="Technico-Tactique">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id inventore
          provident quod, debitis ipsum modi odio labore corrupti eaque
          quibusdam, exercitationem suscipit quas nemo, nam alias? Deserunt
          porro ipsa voluptatum.
        </TrainingCard>
        <TrainingCard title="Renfo-Spécifique">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id inventore
          provident quod, debitis ipsum modi odio labore corrupti eaque
          quibusdam, exercitationem suscipit quas nemo, nam alias? Deserunt
          porro ipsa voluptatum.
        </TrainingCard>
      </Container>
    </>
  );
};

export default Training;
