import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

const Videos = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div>
      {isDesktopOrLaptop && (
        <div>
          <div className="Youtubevideo">
            <div className="video">
              <ReactPlayer
                url={"https://youtu.be/as84W0cvHWk"}
                playing={false}
                width={"80vw"}
                height={"60vh"}
              ></ReactPlayer>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <div className="YoutubevideoMobile">
            <div className="video">
              <ReactPlayer
                url={"https://youtu.be/as84W0cvHWk"}
                playing={false}
                width={"90vw"}
                height={"20vh"}
              ></ReactPlayer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
