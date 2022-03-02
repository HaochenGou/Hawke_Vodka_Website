import PropTypes from "prop-types";
import React from "react";

const HeroSliderFiveSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res ${
        sliderClass ? sliderClass : ""
      }`}  style={{ backgroundImage: "url('/assets/img/slider/slider-1.webp')",backgroundrepeat: "no-repeat", backgroundsize: "100% 100%",alt:"background"}}  
    >
     {/* <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7 ml-auto">
            <div className="slider-content-2 slider-content-fruits slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
            </div>
          </div>
        </div>
      </div> */}
    </div> 
  );
};

HeroSliderFiveSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderFiveSingle;
