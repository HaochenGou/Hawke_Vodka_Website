import PropTypes from "prop-types";
import React from "react";
import { Carousel } from "react-bootstrap";

const HeroSliderFiveSingle = () => {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/img/slider/slider-1.webp"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/img/slider/slider-2.webp"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/assets/img/slider/slider-3.webp"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
    
  );
};

HeroSliderFiveSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderFiveSingle;
