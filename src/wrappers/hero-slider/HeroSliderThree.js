import React from "react";
import Swiper from "react-id-swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-three.json";
import HeroSliderThreeSingle from "../../components/hero-slider/HeroSliderThreeSingle.js";
import { Demo } from "../../pages/home/wordcloud";

const HeroSliderThree = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 300,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    watchSlidesVisibility: true,
  };

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                
                <HeroSliderThreeSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
                
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderThree;
