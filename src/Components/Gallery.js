import React from "react";
import { ProGallery } from "pro-gallery";
import { flattenObject } from "pro-gallery-lib";
import "pro-gallery/dist/statics/main.css";
import { useMediaQuery } from "react-responsive";
import NewYork from "./NewYork";
import Montaluce from "./Montaluce";
import Wedding from "./Wedding";
import Paris from "./Paris";
import ReactPlayer from "react-player";
import { Tab, Tabs } from "react-bootstrap";
import "./Gallery.css";

const Gallery = () => {
  const isDesktop = useMediaQuery({ minWidth: 1758 });
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 1757 });
  const isMobile = useMediaQuery({ maxWidth: 575 });

  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 1,
        gallerySpacing: 25,
      },
      targetItemSize: {
        value: 100,
      },
    },
    behaviourParams: {
      item: {
        overlay: {
          hoveringBehaviour: "NEVER_SHOW",
        },
        content: {
          hoverAnimation: "COLOR_IN",
          loader: "COLOR",
        },
      },
      gallery: {
        scrollAnimation: "SLIDE_UP",
      },
    },
  };

  const Mobileoptions = {
    layoutParams: {
      structure: {
        galleryLayout: 1, // FIX: Should be a number
        gallerySpacing: 10,
      },
      targetItemSize: {
        value: 80, // FIX: Should be a number
      },
    },
    behaviourParams: {
      item: {
        overlay: {
          hoveringBehaviour: "NEVER_SHOW",
        },
        content: { hoverAnimation: "COLOR_IN", loader: "COLOR" },
      },
      gallery: {
        scrollAnimation: "SLIDE_UP",
      },
    },
  };

  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  const scrollingElement = window;

  return (
    <div>
      {isDesktop && (
        <div style={{ fontFamily: "JesofinSans", fontSize: "1rem" }}>
          <div>
            <Tabs defaultActiveKey="Paris" className="mb-3 Tabs" fill>
              <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={NewYork}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Dahlonega" title="Dahlonega, GA">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={Montaluce}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Wedding" title="Wedding, GA">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={Wedding}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Chicago" title="Chicago, IL">
                {" "}
                <div className="Youtubevideo">
                  <div className="video">
                    <ReactPlayer
                      url={"https://youtu.be/as84W0cvHWk"}
                      playing={false}
                      width={"80vw"}
                      height={"60vh"}
                      onPlaybackQualityChange={"hd1080"}
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 50,
                    }}
                  ></div>
                </div>
              </Tab>
              <Tab eventKey="Honeymoon" title="Playa del Carmen, MX">
                <div className="Youtubevideo">
                  <div className="video">
                    <ReactPlayer
                      url={
                        "https://www.youtube.com/watch?v=en_t86EbLKc&ab_channel=ChulChong"
                      }
                      playing={false}
                      width={"80vw"}
                      height={"60vh"}
                      onPlaybackQualityChange={"hd1080"}
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 50,
                    }}
                  ></div>
                </div>
              </Tab>
              <Tab eventKey="Paris" title="Paris, FR">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={Paris}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
                <div className="Youtubevideo">
                  <div className="video">
                    <ReactPlayer
                      url={
                        "https://www.youtube.com/watch?v=en_t86EbLKc&ab_channel=ChulChong"
                      }
                      playing={false}
                      width={"80vw"}
                      height={"60vh"}
                      onPlaybackQualityChange={"hd1080"}
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 50,
                    }}
                  ></div>
                </div>
              </Tab>
            </Tabs>
          </div>{" "}
          <div className="footer">
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
      {isTablet && (
        <div style={{ fontFamily: "JesofinSans", fontSize: "1rem" }}>
          <div>
            <Tabs defaultActiveKey="Paris" className="mb-3 Tabs" fill>
              <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={NewYork}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Dahlonega" title="Dahlonega, GA">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={Montaluce}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Wedding" title="Wedding, GA">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={Wedding}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Chicago" title="Chicago, IL">
                {" "}
                <div className="Youtubevideo">
                  <div className="video">
                    <ReactPlayer
                      url={"https://youtu.be/as84W0cvHWk"}
                      playing={false}
                      width={"80vw"}
                      height={"60vh"}
                      onPlaybackQualityChange={"hd1080"}
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 50,
                    }}
                  ></div>
                </div>
              </Tab>
              <Tab eventKey="Honeymoon" title="Playa del Carmen, MX">
                <div className="Youtubevideo">
                  <div className="video">
                    <ReactPlayer
                      url={
                        "https://www.youtube.com/watch?v=en_t86EbLKc&ab_channel=ChulChong"
                      }
                      playing={false}
                      width={"80vw"}
                      height={"60vh"}
                      onPlaybackQualityChange={"hd1080"}
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 50,
                    }}
                  ></div>
                </div>
              </Tab>
              <Tab eventKey="Paris" title="Paris, FR">
                <div className="Gallery" style={{ marginBottom: 25 }}>
                  <ProGallery
                    items={Paris}
                    options={flattenObject(options)}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
                <div className="Youtubevideo">
                  <div className="video">
                    <ReactPlayer
                      url={"https://www.youtube.com/watch?v=hopYhw8PWXc"}
                      playing={false}
                      width={"80vw"}
                      height={"60vh"}
                      onPlaybackQualityChange={"hd1080"}
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 50,
                    }}
                  ></div>
                </div>
              </Tab>
            </Tabs>
          </div>{" "}
          <div className="footer">
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
      {isMobile && (
        <div style={{ fontFamily: "JesofinSans", fontSize: "1rem" }}>
          <Tabs defaultActiveKey="Paris" className="mb-3 " fill>
            <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
              <div className="Gallery" style={{ marginTop: -20 }}>
                <ProGallery
                  items={NewYork}
                  options={flattenObject(Mobileoptions)}
                  container={container}
                  eventsListener={eventsListener}
                  scrollingElement={scrollingElement}
                />
              </div>
            </Tab>
            <Tab eventKey="Wedding" title="Wedding, GA">
              <div className="Gallery" style={{ marginTop: -20 }}>
                <ProGallery
                  items={Wedding}
                  options={flattenObject(Mobileoptions)}
                  container={container}
                  eventsListener={eventsListener}
                  scrollingElement={scrollingElement}
                />
              </div>
            </Tab>
            <Tab eventKey="Dahlonega" title="Dahlonega, GA">
              <div className="Gallery" style={{ marginTop: -20 }}>
                <ProGallery
                  items={Montaluce}
                  options={flattenObject(Mobileoptions)}
                  container={container}
                  eventsListener={eventsListener}
                  scrollingElement={scrollingElement}
                />
              </div>
            </Tab>
            <Tab eventKey="Chicago" title="Chicago, IL">
              <div className="YoutubevideoMobile">
                <div className="video">
                  <ReactPlayer
                    url={"https://youtu.be/as84W0cvHWk"}
                    playing={false}
                    width={"90vw"}
                    height={"20vh"}
                    onPlaybackQualityChange={"hd1080"}
                  ></ReactPlayer>
                </div>
                <div
                  className="footer"
                  style={{ marginTop: 30, fontSize: "1rem", marginBottom: 30 }}
                ></div>
              </div>
            </Tab>
            <Tab eventKey="HoneyMoon" title="Playa del Carmen, MX">
              <div className="YoutubevideoMobile">
                <div className="video">
                  <ReactPlayer
                    url={
                      "https://www.youtube.com/watch?v=en_t86EbLKc&ab_channel=ChulChong"
                    }
                    playing={false}
                    width={"90vw"}
                    height={"20vh"}
                    onPlaybackQualityChange={"hd1080"}
                  ></ReactPlayer>
                </div>
                <div
                  className="footer"
                  style={{ marginTop: 30, fontSize: "1rem", marginBottom: 30 }}
                ></div>
              </div>
            </Tab>
            <Tab eventKey="Paris" title="Paris, FR">
              <div className="Gallery" style={{ marginTop: -20 }}>
                <ProGallery
                  items={Paris}
                  options={flattenObject(Mobileoptions)}
                  container={container}
                  eventsListener={eventsListener}
                  scrollingElement={scrollingElement}
                />
              </div>
            </Tab>
          </Tabs>
          <div className="footermobile">
            <div>Copyright© 2022 Chul Chong</div>
            <div>Designed by Hannah Bae</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
