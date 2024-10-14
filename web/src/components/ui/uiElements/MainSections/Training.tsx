import Container from "@/components/ui/uiComponents/Container";
import SubContainer from "@/components/ui/uiComponents/SubContainer";
import React from "react";
import Video from "next-video";
import TestVideo from "@@/videos/test-video-2.mp4";
import Button from "@/components/ui/uiComponents/Button";
import Title from "@/components/ui/uiComponents/Title";

const Training = () => {
  return (
    <>
      <Title
        id={"training"}
        color="white"
        label={"Training"}
        className="bg-black"
      />
      <Container
        background="bg-secondaryLight"
        flexDirection="col"
        className="gap-28"
      >
        <SubContainer>
          <div className="flex flex-col px-10 py-5 items-baseline justify-center bg-white shadow-lg rounded-lg h-[100%]">
            <h1 className="text-4xl py-5 font-extrabold text-primary">
              Les Bases de la Boxe Anglaise
            </h1>
            <div className="text-md font-semibold text-primaryLight">
              Des entrainements axés sur l{"'"}apprentissage des points
              important de la boxe :
              <ul className="flex flex-col px-5 py-3 text-md">
                <li>Les Déplacements</li>
                <li>Les Positionnements</li>
                <li>La Cordination</li>
                <li>Les attaques</li>
                <li>La défense</li>
              </ul>
            </div>
            <p className="text-md font-semibold text-primary">
              Des cours individuels ou en groupe !
            </p>
            <div className="flex py-4 gap-5">
              <Button label={"En savoir plus !"} bgColor="primary" path="" />
              {/* <Button label={"S'inscrire !"} bgColor="secondaryDark" /> */}
            </div>
          </div>
          <div>
            <Video
              src={TestVideo}
              autoPlay
              loop
              preload="auto"
              controls={false}
              width={825}
            />
          </div>
        </SubContainer>
        <SubContainer flexReserse="rowReverse">
          <div className="flex flex-col px-10 py-5 items-baseline justify-center bg-white shadow-lg rounded-lg h-[100%]">
            <h1 className="text-4xl py-5 font-extrabold text-primary">
              Perfectionnement technico-tactique
            </h1>
            <div className="text-md font-semibold text-primaryLight">
              Des entrainements axés sur l{"'"}apprentissage des points
              important de la boxe :
              <ul className="flex flex-col px-5 py-3 text-md">
                <li>Les Déplacements</li>
                <li>Les Positionnements</li>
                <li>La Cordination</li>
                <li>Les attaques</li>
                <li>La défense</li>
              </ul>
            </div>
            <p className="text-md font-semibold text-primary">
              Des cours individuels ou en groupe !
            </p>
            <div className="flex py-4 gap-5">
              <Button label={"En savoir plus !"} bgColor="primary" path="" />
              {/* <Button label={"S'inscrire !"} bgColor="secondaryDark" /> */}
            </div>
          </div>
          <div>
            <Video
              src={TestVideo}
              autoPlay
              loop
              preload="auto"
              controls={false}
              width={825}
            />
          </div>
        </SubContainer>
        <SubContainer>
          <div className="flex flex-col px-10 py-5 items-baseline justify-center bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl py-5 font-extrabold text-primary">
              Sparring & interClub (
              <span className="text-secondary">Confirmés seulement</span>)
            </h1>
            <div className="text-md font-semibold text-primaryLight">
              Des entrainements axés sur l{"'"}apprentissage des points
              important de la boxe :
              <ul className="flex flex-col px-5 py-3 text-md">
                <li>Les Déplacements</li>
                <li>Les Positionnements</li>
                <li>La Cordination</li>
                <li>Les attaques</li>
                <li>La défense</li>
              </ul>
            </div>
            <p className="text-md font-semibold text-primary">
              Des cours individuels ou en groupe !
            </p>
            <div className="flex py-4 gap-5">
              <Button label={"En savoir plus !"} bgColor="primary" path="" />
              {/* <Button label={"S'inscrire !"} bgColor="secondaryDark" /> */}
            </div>
          </div>
          <div>
            <Video
              src={TestVideo}
              autoPlay
              loop
              preload="auto"
              controls={false}
              width={825}
            />
          </div>
        </SubContainer>
      </Container>
    </>
  );
};

export default Training;
