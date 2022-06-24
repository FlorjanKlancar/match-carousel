import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent({ children }: any) {
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      stopOnHover={false}
      preventMovementUntilSwipeScrollTolerance
      showThumbs={false}
      showStatus={false}
    >
      {children}
    </Carousel>
  );
}

export default CarouselComponent;
