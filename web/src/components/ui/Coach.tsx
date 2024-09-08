import BlockTitle from "@/components/ui/uiElements/BlockTitle";
import Container from "@/components/ui/uiElements/Container";
import Image from "next/image";
import React from "react";

const Coach = () => {
  return (
    <>
      <BlockTitle id="coach" title="Coach" />
      <Container>
        <article>
          <Image
            src="/JM_Coach.jpg"
            width={1000}
            height={1000}
            alt="BraganzaBoxingCampCoachJM"
            className="rounded-lg shadow-lg "
          />
        </article>
        <article className="flex">
          <div className="flex max-lg:flex-col max-lg:justify-center sm:items-center">
            <div className="flex flex-col gap-2 ">
              <h4 className="text-2xl font-bold ">Jean-Michel Braganza</h4>
              <div className="text-sm font-bold">Coach - Boxe anglaise</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit earum dolorem dolorum laborum quis? Magnam, quas neque,
                quo officiis sequi laboriosam exercitationem a dignissimos esse
                iure optio natus, aspernatur excepturi.
              </p>
              <ul className="flex">
                <h2></h2>
              </ul>
            </div>
          </div>
        </article>
      </Container>
    </>
  );
};

export default Coach;
