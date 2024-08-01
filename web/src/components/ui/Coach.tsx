import BlockTitle from "@/components/ui/uiElements/BlockTitle";
import Image from "next/image";
import React from "react";

const Coach = () => {
  return (
    <>
      <section id="coach" className="flex max-lg:flex-col gap-16 h-screen">
        <BlockTitle title={"Coach"}>
          Passionnés par la boxe anglaise, nos coachs sauront adapter les cours
          à tous les niveaux, que ce soit pour une initiation, des cours
          particuliers ou de la remise en forme, cela dans le respect des règles
          du noble art.
        </BlockTitle>

        <article className="flex h-fit shadow-sm rounded-md ">
          <div className="flex max-lg:flex-col max-lg:justify-center">
            <div className="flex flex-col gap-2 py-3 px-3 rounded-lg ">
              <h4 className="text-xl font-bold ">Jean-Michel Braganza</h4>
              <div className="text-sm">Coach</div>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit earum dolorem dolorum laborum quis? Magnam, quas neque,
                quo officiis sequi laboriosam exercitationem a dignissimos esse
                iure optio natus, aspernatur excepturi.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Coach;
