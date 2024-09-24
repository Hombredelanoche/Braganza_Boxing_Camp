import Button from "@/components/ui/uiComponents/Button";
import Container from "@/components/ui/uiComponents/Container";
import Image from "next/image";
import React from "react";

const PresentationPage = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col max-lg:items-center items-baseline justify-center">
          <div className="flex flex-col text-5xl font-bold text-primaryLight ">
            <h1>LE NOBLE ART</h1>
            <h2>
              A VOTRE{" "}
              <span className="text-secondary font-extrabold">RYTHME</span> !
            </h2>
            <div className="flex flex-col py-4">
              <p className="text-primaryLight text-sm font-bold">
                Des cours pour{" "}
                <span className="text-secondary font-extrabold">
                  tout les niveaux
                </span>{" "}
                !
              </p>
              <p className="text-primary text-sm font-bold">
                Une méthode d{"'"}entrainement baser sur{" "}
                <span className="text-secondary font-extrabold">
                  la technicité
                </span>{" "}
                !
              </p>
            </div>
            <div className="flex flex-col py-2 text-xs font-bold text-secondary">
              Premier cours offert
            </div>
          </div>
          <Button label={"Cours d'essai !"} />
        </div>
        <div>
          <Image
            src="/Match_Pro.jpg"
            width={500}
            height={600}
            alt="Image de présentation BBC"
            className="rounded-lg shadow-lg "
          />
        </div>
      </Container>
    </>
  );
};

export default PresentationPage;
