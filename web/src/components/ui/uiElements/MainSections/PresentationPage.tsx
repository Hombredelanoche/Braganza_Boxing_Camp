import Button from "@/components/ui/uiComponents/Button";
import Container from "@/components/ui/uiComponents/Container";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PresentationPage = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col max-lg:items-center items-baseline justify-center">
          <div className="flex flex-col max-lg:items-center text-6xl font-extrabold text-primaryLight ">
            <h1>LE NOBLE ART</h1>
            <h2>
              A VOTRE{" "}
              <span className="text-secondary font-extrabold">RYTHME</span> !
            </h2>
            <div className="flex flex-col max-lg:items-center py-2">
              <p className="text-primaryLight text-lg font-bold">
                Des cours pour{" "}
                <span className="text-secondary font-extrabold">
                  tout les niveaux
                </span>{" "}
                !
              </p>
              <p className="text-primary text-lg font-bold">
                Une méthode d{"'"}entrainement baser sur{" "}
                <span className="text-secondary font-extrabold">
                  la technicité
                </span>{" "}
                !
              </p>
            </div>
            <div className="flex flex-col py-2 text-base font-bold text-secondary">
              Premier cours offert
            </div>
          </div>
          <Button label={"S'inscrire !"} />
        </div>
        <div className="flex flex-col max-lg:items-center items-baseline justify-center">
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
