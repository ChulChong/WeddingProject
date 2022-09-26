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
            <div
              className="footer"
              style={{ marginTop: 20, fontSize: "1rem", marginBottom: -10 }}
            >
              Memories in Chicago,IL 12/4 - 12/6
            </div>
            <div className="video">
              <ReactPlayer
                url={"https://youtu.be/as84W0cvHWk"}
                playing={false}
                width={"80vw"}
                height={"60vh"}
              ></ReactPlayer>
            </div>
            <div className="footer" style={{ marginTop: 20, fontSize: "1rem" }}>
              Memories in Chicago,IL 12/4 - 12/6
            </div>
            <div className="footer" style={{ marginTop: 20 }}>
              <div>Copyright© 2022 Chul Chong</div>
              <div>Designed by Hannah Bae</div>
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
            <div
              className="footer"
              style={{ marginTop: 20, fontSize: "1rem", marginBottom: -10 }}
            >
              Memories in Chicago,IL 12/4 - 12/6
            </div>
            <div className="video">
              <ReactPlayer
                url={"https://youtu.be/as84W0cvHWk"}
                playing={false}
                width={"90vw"}
                height={"20vh"}
              ></ReactPlayer>
            </div>
            <div className="footer" style={{ marginTop: 20, fontSize: "1rem" }}>
              Memories in Chicago,IL 12/4 - 12/6
            </div>
          </div>
          <div className="footermobile" style={{ marginTop: 20 }}>
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
