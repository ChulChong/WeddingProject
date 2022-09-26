import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import { useMediaQuery } from "react-responsive";
import Imgitems from "./Imgitem";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Gallery = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 0,
    collageDensity: "0.1",
    galleryMargin: 30,
    hoveringBehaviour: "NEVER_SHOW",
    scrollAnimation: "FADE_IN",
    imageHoverAnimation: "ZOOM_IN",
    gallerySize: 100,
    imagePlacementAnimation: "SLIDE",
  };

  const Mobileoptions = {
    galleryLayout: 0,
    collageDensity: "0.2",
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
      {isDesktopOrLaptop && (
        <div style={{ fontFamily: "JesofinSans", fontSize: "1rem" }}>
          <div>
            <Tabs defaultActiveKey="Brooklyn, NY" className="mb-3 Tabss" fill>
              <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
                <div
                  className="Gallery"
                  style={{ marginTop: -40, marginRight: 25 }}
                >
                  <ProGallery
                    items={Imgitems}
                    options={options}
                    container={container}
                    eventsListener={eventsListener}
                    scrollingElement={scrollingElement}
                  />
                </div>
              </Tab>
              <Tab eventKey="Montaluce Winery" title="Montaluce Winery, GA">
                <div style={{ textAlign: "center", margin: 300 }}>
                  Will be updated!
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
      {isTabletOrMobile && (
        <div style={{ fontFamily: "JesofinSans", fontSize: "1rem" }}>
          <Tabs defaultActiveKey="Brooklyn, NY" className="mb-3 Tabss" fill>
            <Tab eventKey="Brooklyn, NY" title="Brooklyn, NY">
              <div className="Gallery" style={{ marginTop: -20 }}>
                <ProGallery
                  items={Imgitems}
                  options={Mobileoptions}
                  container={container}
                  eventsListener={eventsListener}
                  scrollingElement={scrollingElement}
                />
              </div>
            </Tab>
            <Tab eventKey="Montaluce Winery" title="Montaluce Winery, GA">
              <div style={{ textAlign: "center", margin: 100 }}>
                Will be updated!
              </div>
            </Tab>
          </Tabs>{" "}
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
