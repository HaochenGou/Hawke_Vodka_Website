import React, { Fragment,useRef } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { Link } from "react-router-dom";
import Carousel from './Carousel';
import ReactPlayer from "react-player";
import usePictureInPicture from 'react-use-pip'

const HomeElectronics = () => {
  const videoRef = useRef(null)
  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture(videoRef)
  
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

        <p style={{margin: "250px"}}></p>
        <div style={{width: "100%", height: "512px",backgroundImage: "url('/assets/img/bg/bg-1.jpg')"}}>
          <h1 style={{paddingLeft: "800px", paddingTop:"35px", fontSize:"50px",color:"white", fontfamily: "Cormorant Garamond"}}>Cocktail Recipes</h1>
          <div style={{paddingLeft: "1500px", paddingTop:"300px" }}>
            <div className="slider-content-7 slider-animated-1">
              <div className="slider-btn-9 btn-hover">
                  <Link
                    className="animated"
                    to={process.env.PUBLIC_URL + "/recipes"}
                  >
                    LEARN MORE
                  </Link>
              </div>       
            </div> 
            </div>      
        </div>
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
        <div className="container">
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width='30%' height="30%" pip= {true}/>
          {isPictureInPictureAvailable && (
          <button id = "button1"
            onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
          >
          {isPictureInPictureActive ? 'Disable' : 'Enable'} background Music
            </button>)}
        </div>
        
      </LayoutTwo>
  
    </Fragment>
   
  );
};

export default HomeElectronics;
