import Button from "@/components/ui/uiComponents/Button";
import Image from "next/image";
import React from "react";

const PresentationPage = () => {
  return (
    <>
      <article className="flex justify-around px-20">
        <div className="flex flex-col items-baseline justify-center">
          <h1 className="flex flex-col text-5xl font-bold text-primaryLight ">
            <div>APPRENEZ LE NOBLE ART</div>
            <div>
              A VOTRE{" "}
              <span className="text-secondary font-extrabold">RYTHME</span> !
            </div>
            <div className="py-4 text-xs font-bold text-secondary">
              Premier cours offert
            </div>
          </h1>
          <Button label={"Rejoins-nous"} />
        </div>
        <div>
          <Image
            src="/Match_Pro.jpg"
            width={400}
            height={400}
            alt="Image de présentation BBC"
            className="rounded-lg shadow-md "
          />
        </div>
      </article>
    </>
  );
};

export default PresentationPage;
