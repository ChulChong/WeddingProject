import React from "react";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
export const Videos = () => (
  <div className="Youtubevideo2">
    <Container className="video">
      <ReactPlayer
        url={"https://youtu.be/as84W0cvHWk"}
        playing={false}
        width={"600px"}
        height={"257px"}
      ></ReactPlayer>
    </Container>
    <Container className="video">
      <ReactPlayer
        url={"https://youtu.be/SMCXox0xsIY"}
        playing={false}
        width={"600px"}
        height={"257px"}
      ></ReactPlayer>
    </Container>
    <Container className="video">
      <ReactPlayer
        url={"https://youtu.be/6y3guFOkm8Y"}
        playing={false}
        width={"600px"}
        height={"257px"}
      ></ReactPlayer>
    </Container>
  </div>
);
