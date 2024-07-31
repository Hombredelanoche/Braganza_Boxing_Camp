import React from "react";
import Video from "next-video";
import presentation from "@@/videos/presentionVideo.mp4";

const PresentationVideo = () => {
  return (
    <>
      <section>
        <Video
          src={presentation}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      </section>
    </>
  );
};

export default PresentationVideo;
