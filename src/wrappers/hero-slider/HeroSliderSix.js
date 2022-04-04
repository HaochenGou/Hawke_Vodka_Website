import React from "react";
import Swiper from "react-id-swiper";
import heroSliderData from "../../data/hero-sliders/hero-slider-six.json";
import HeroSliderSixSingle from "../../components/hero-slider/HeroSliderSixSingle.js";

const HeroSliderSix = () => {
  const params = {
    effect: "fade",
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
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
                <HeroSliderSixSingle
                  sliderClassName="swiper-slide"
                  data={single}
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderSix;
