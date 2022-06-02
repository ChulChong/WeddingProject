/* eslint-disable */
import React from "react";
import { ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";
import img1 from "./IMG_1205.JPG";
import img2 from "./IMG_2021.jpg";
import img3 from "/Users/chulchong/cs/wedding/src/Components/IMG_2238.JPG";
import img4 from "/Users/chulchong/cs/wedding/src/Components/IMG2222.JPG";
import img5 from "/Users/chulchong/cs/wedding/src/Components/IMG_9622.jpg";
const Gallery = () => {
  const items = [
    {
      // Image item:
      itemId: "sample-id",
      mediaUrl: img1,
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "img2",
      mediaUrl: img2,
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "img3",
      mediaUrl: img3,
      metaData: {
        type: "image",
        height: 200,
        width: 100,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "img4",
      mediaUrl: img4,
      metaData: {
        type: "image",
        height: 0,
        width: 0,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
    {
      // Another Image item:
      itemId: "img5",
      mediaUrl: img5,
      metaData: {
        type: "image",
        height: 0,
        width: 0,
        title: "sample-title",
        description: "sample-description",
        focalPoint: [0, 0],
        link: {
          url: "http://example.com",
          target: "_blank",
        },
      },
    },
  ];

  // The options of the gallery (from the playground current state)
  const options = {
    galleryLayout: 0,
    collageDensity: "0.2",
    galleryMargin: 100,
    hoveringBehaviour: "NEVER_SHOW",
    scrollAnimation: "FADE_IN",
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
    <ProGallery
      items={items}
      options={options}
      container={container}
      eventsListener={eventsListener}
      scrollingElement={scrollingElement}
    />
  );
};

export default Gallery;
