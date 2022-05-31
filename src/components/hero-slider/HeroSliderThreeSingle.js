import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './HeroSlider.css';
import ReactPlayer from "react-player/file";
import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, TrackballControls } from '@react-three/drei';

const HeroSliderThreeSingle = ({ data, sliderClass }) => {
  return (
    
    <div
      className={`slider-height-7 bg-glaucous d-flex align-items-center  ${
        sliderClass ? sliderClass : ""
      }`} style={{}}
    >
      
      <Container fluid>
            {/* <video autoplay="autoplay" loop="loop" defaultMuted playsinline className="videoStyle" id="content-desktop" >
              <source src="/assets/img/background.mp4" type ="video/mp4" alt="backgroud"></source>
            </video> 
            <div className="player" id="content-mobile"  >
            <ReactPlayer
              url={[{src:"/assets/img/background.mp4", type:"video/mp4"}]}
              className='react-player'
              playing
              loop
              playsinline
              muted
              width = "100%"
              height="100%"
            /> 
            </div>   */}
            <p style={{margin: "10px"}}></p>
            <div className="container" id="content-desktop2">
            
          
        <div className="row align-items-left slider-h9-mrg">
        <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-singleimg-hm9 slider-animated-1">
            <Link
                to={process.env.PUBLIC_URL +"/product/" + 42145440301207}>
              <img
                className="animated"
                src='/assets/img/97.png'
                alt="baby-x-vodka-97"
                loading="lazy"
              />
              </Link>
              <Link
                to={process.env.PUBLIC_URL +"/product/" + 42145440301207}>
                <img
                className="animated"
                src='/assets/img/7.png'
                alt="baby-x-vodka-97"
                loading="lazy"
              />
              </Link>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-content-7 slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <div className="slider-btn-9 btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL +"/product/" + 42145440301207}
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>      
        </div>
      </div>
      <div className="mobilebg" id="content-mobile2" >
      <div className="container">
        <div className="row align-items-left slider-h9-mrg">
        <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-singleimg-hm9 slider-animated-1">
              <img
                className="animated"
                // src={process.env.PUBLIC_URL + data.image}
                src='/assets/img/97.png'
                alt=""
                loading="lazy"
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
                  to={process.env.PUBLIC_URL + "/product/" + 41435507064983}
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>      
        </div>
      </div>
      </div>
      </Container> 
      
      
      
    </div>
  );
};

HeroSliderThreeSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderThreeSingle;
