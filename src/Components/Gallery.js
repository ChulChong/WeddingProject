import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import { useMediaQuery } from "react-responsive";
import NewYork from "./NewYork";
import Montaluce from "./Montaluce";
import ReactPlayer from "react-player";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Gallery = () => {
  const isDesktop = useMediaQuery({ minWidth: 1758 });
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 1757 });
  const isMobile = useMediaQuery({ maxWidth: 575 });

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 0,
    collageDensity: "0.1",
    galleryMargin: 0,
    hoveringBehaviour: "NEVER_SHOW",
    scrollAnimation: "FADE_IN",
    imageHoverAnimation: "ZOOM_IN",
    gallerySize: 200,
    imagePlacementAnimation: "SLIDE",
  };
  const tabletoptions = {
    galleryLayout: 0,
    collageDensity: "0.1",
    galleryMargin: 0,
    hoveringBehaviour: "NEVER_SHOW",
    scrollAnimation: "FADE_IN",
    imageHoverAnimation: "ZOOM_IN",
    gallerySize: 100,
    imagePlacementAnimation: "SLIDE",
  };

  const Mobileoptions = {
    galleryLayout: 0,
    collageDensity: "0.1",
    galleryMargin: 10,
    hoveringBehaviour: "NEVER_SHOW",
    imageHoverAnimation: "ZOOM_IN",
    gallerySize: 100,
    imagePlacementAnimation: "SLIDE",
  };

  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <div>
      {isDesktop && (
        <div style={{ fontFamily: "JesofinSans", fontSize: "1rem" }}>
          <div>
            <Tabs defaultActiveKey="Brooklyn, NY" className="mb-3 Tabss" fill>
              <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
                <div
                  className="Gallery"
                  style={{ marginRight: 25, marginLeft: 25, marginBottom: 25 }}
                >
                  <ProGallery
                    items={NewYork}
                    options={options}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Dahlonega" title="Dahlonega, GA">
                <div
                  className="Gallery"
                  style={{ marginRight: 25, marginLeft: 25, marginBottom: 25 }}
                >
                  <ProGallery
                    items={Montaluce}
                    options={options}
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
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 30,
                    }}
                  >
                    Memories in Chicago,IL 12/4 - 12/6
                  </div>
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
            <Tabs defaultActiveKey="Brooklyn, NY" className="mb-3 Tabss" fill>
              <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
                <div
                  className="Gallery"
                  style={{ marginRight: 25, marginLeft: 25, marginBottom: 25 }}
                >
                  <ProGallery
                    items={NewYork}
                    options={tabletoptions}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Dahlonega" title="Dahlonega, GA">
                <div
                  className="Gallery"
                  style={{ marginRight: 25, marginLeft: 25, marginBottom: 25 }}
                >
                  <ProGallery
                    items={Montaluce}
                    options={tabletoptions}
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
                    ></ReactPlayer>
                  </div>
                  <div
                    className="footer"
                    style={{
                      marginTop: 30,
                      fontSize: "1rem",
                      marginBottom: 30,
                    }}
                  >
                    Memories in Chicago,IL 12/4 - 12/6
                  </div>
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
          <Tabs defaultActiveKey="Brooklyn, NY" className="mb-3 Tabss" fill>
            <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
              <div className="Gallery" style={{ marginTop: -20 }}>
                <ProGallery
                  items={NewYork}
                  options={Mobileoptions}
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
                  options={Mobileoptions}
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
                  ></ReactPlayer>
                </div>
                <div
                  className="footer"
                  style={{ marginTop: 30, fontSize: "1rem", marginBottom: 30 }}
                >
                  Memories in Chicago,IL 12/4 - 12/6
                </div>
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
