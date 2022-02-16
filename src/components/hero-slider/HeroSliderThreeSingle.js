import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import './HeroSlider.css';

const HeroSliderThreeSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`slider-height-7 bg-glaucous d-flex align-items-center ${
        sliderClass ? sliderClass : ""
      }`}
    >
      <section>
            <video autoPlay muted loop className="videoStyle">
              <source src="/assets/img/background.webm" type ="video/webm"></source>
            </video>
        </section> 
      <div className="container">
        <div className="row align-items-left slider-h9-mrg">
        <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-singleimg-hm9 slider-animated-1">
              <img
                className="animated"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content-7 slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn-9 btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </div>
  );
};

HeroSliderThreeSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderThreeSingle;
