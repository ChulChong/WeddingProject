import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import { useMediaQuery } from "react-responsive";
import img6 from "/Users/chulchong/cs/wedding/src/util/bqbbb.jpg";
import img7 from "/Users/chulchong/cs/wedding/src/util/fwef.jpg";
import img8 from "/Users/chulchong/cs/wedding/src/util/qwgwqgn.jpg";
import img9 from "/Users/chulchong/cs/wedding/src/util/wqwqf.jpg";

const Gallery = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const items = [
    {
      // Another Image item:
      itemId: "img6",
      mediaUrl: img6,
      metaData: {
        type: "image",
        height: 0,
        width: 0,
        focalPoint: [30, 200],
      },
    },
    {
      // Another Image item:
      itemId: "img7",
      mediaUrl: img7,
      metaData: {
        type: "image",
        height: 300,
        width: 150,
        focalPoint: [0, 0],
      },
    },
    {
      // Another Image item:
      itemId: "img8",
      mediaUrl: img8,
      metaData: {
        type: "image",
        height: 0,
        width: 0,
        focalPoint: [10, 20],
      },
    },
    {
      // Another Image item:
      itemId: "img9",
      mediaUrl: img9,
      metaData: {
        type: "image",
        height: 100,
        width: 50,
        focalPoint: [0, 0],
      },
    },
  ];

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 0,
    collageDensity: "0.1",
    galleryMargin: 20,
    hoveringBehaviour: "NEVER_SHOW",
    scrollAnimation: "FADE_IN",
    imageHoverAnimation: "ZOOM_IN",
    gallerySize: 100,
    imagePlacementAnimation: "SLIDE",
  };

  const Mobileoptions = {
    galleryLayout: 0,
    collageDensity: "0.2",
    galleryMargin: 0,
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
        <div className="Gallery">
          <ProGallery
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
          />
        </div>
      )}
      {isTabletOrMobile && (
        <div className="Gallery">
          <ProGallery
            items={items}
            options={Mobileoptions}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
