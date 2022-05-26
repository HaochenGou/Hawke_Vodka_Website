import React, { Fragment,useRef } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import { Demo } from "./wordcloud";
import { Stack } from "@mui/material";

import Carousel from './Carousel';
import Popup from "./Popup";
import usePictureInPicture from 'react-use-pip'

import { Card, Button} from "react-bootstrap";


const HomeElectronics = () => {
  const videoRef = useRef(null);
  const {
    isPictureInPictureActive,
    isPictureInPictureAvailable,
    togglePictureInPicture,
  } = usePictureInPicture(videoRef);

  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Prohibition Distilleries | Home</title>
        <meta
          name="description"
          content="home page of Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <LayoutTwo>
    
        {/* hero slider */}
        <p style={{margin: "250px"}}></p>
        <Demo/>
        <p style={{margin: "1000px"}}></p>
       
        

        <p style={{margin: "100px"}}></p>
        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90" />

        <Carousel/>
 
        <Popup/>
    

        <p style={{margin: "250px"}}></p>
        <Card className="bg-dark text-white">
        <Card.Img src="/assets/img/bg/bg-1.webp" alt="Card image"/>
        <Card.ImgOverlay>
        <Card.Title style={{fontSize:"30px"}}>Cocktail Recipes</Card.Title>
        <Button variant="primary"  size="lg" href={process.env.PUBLIC_URL + "/recipes"}>WATCH HOW TO MAKE</Button>
        </Card.ImgOverlay>
        </Card>
        
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
        <video ref={videoRef} controls loop width="0.1%">
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" />
          </video>
          {isPictureInPictureAvailable && (
          <button className="button"
            onClick={() => togglePictureInPicture(!isPictureInPictureActive)}
          >
          {isPictureInPictureActive ? 'Close' : 'Open'} Video
            </button>)}
        </div>
        
      </LayoutTwo>
  
    </Fragment>
   
  );
};

export default HomeElectronics;
