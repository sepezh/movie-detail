import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PosterCarousel = () => {
  return (
    <Carousel autoPlay={true}>
      <div>
        <div>
          <h2 style={{ textAlign: "left" }}>Tenet</h2>
          <p style={{ textAlign: "left" }}>year</p>
        </div>
        <img alt="tenet" src="/img/102963.jpg" />
      </div>
      <div>
        <div>
          <h2 style={{ textAlign: "left" }}>Coda</h2>
          <p style={{ textAlign: "left" }}>year</p>
        </div>
        <img alt="coda" src="/img/4Tz8V8aRim8cFgKEWprSUjBy8tY.jpg" />
      </div>
    </Carousel>
  );
};

export default PosterCarousel;
