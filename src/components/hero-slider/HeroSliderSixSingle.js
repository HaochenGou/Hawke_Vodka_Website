import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderSixSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider single-slider-10 slider-height-8 bg-aqua ${
        sliderClassName ? sliderClassName : ""
      }`} style={{backgroundImage: "url('/assets/img/slider/slider-4.jpg')",backgroundrepeat: "no-repeat", backgroundsize: "100% 100%",alt:"background"}}
    >
      <div className="container">
        <div className="row" >
          
          <div className="col-12 col-sm-6 d-flex align-items-center">
            <div className="slider-content slider-content-10 slider-animated-2">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderSixSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderSixSingle;
