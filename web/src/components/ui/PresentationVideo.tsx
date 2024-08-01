import React from "react";
import Video from "next-video";
import presentation from "@@/videos/presentionVideo.mp4";
import Image from "next/image";

const PresentationVideo = () => {
  return (
    <>
      <section className="mb-10">
        <Video
          src={presentation}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="h-1/3"
        />
      </section>
    </>
  );
};

export default PresentationVideo;
