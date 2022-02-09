import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import Carousel from './Carousel';

const HomeElectronics = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Vodka | Home</title>
        <meta
          name="description"
          content="home page."
        />
      </MetaTags>
      <LayoutTwo>
        {/* hero slider */}
        <HeroSliderThree />

        <p style={{margin: "100px"}}></p>
        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90" />


        <Carousel/>

        <p style={{margin: "100px"}}></p>
        {/* banner */}
        <BannerThree spaceBottomClass="pb-100" />


        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeElectronics;
