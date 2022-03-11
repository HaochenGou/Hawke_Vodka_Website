import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import "./Friend.css";
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const Friend = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Vodka | Friend </title>
        <meta
          name="description"
          content="About page of Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Friend
      </BreadcrumbsItem>
     
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <p style={{margin: "100px"}}></p>
        <Stack spacing={15}>
        <Stack direction="row" spacing={15}>
        <p style={{margin: "100px"}}></p>
          <Item>
          <div class="canvas-wrapper">
            <a href="http://www.crossroadsliquorstore.com/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/1.webp" alt="logo"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">CROSSROADS</strong>
                <span class="canvas_copy_details">LIQUOR</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://littleguyliquorstore.com/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/2.webp" alt="logo"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">Little</strong>
                <strong class="canvas_copy_title">Guy</strong>
                <span class="canvas_copy_details">WE LOVE CRAFT BEER</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://www.everythingwineandmore.ca/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/3.svg" alt="logo"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">everything</strong>
                <strong class="canvas_copy_title">WINE</strong>
                <span class="canvas_copy_details">AND MORE</span>
              </div>
            </a>
          </div>
          </Item>
        </Stack>
        <Stack direction="row" spacing={15}>
        <p style={{margin: "100px"}}></p>
          <Item>
          <div class="canvas-wrapper">
            <a href="http://www.crossroadsliquorstore.com/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/1.webp" alt="logo"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">CROSSROADS</strong>
                <span class="canvas_copy_details">LIQUOR</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://littleguyliquorstore.com/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/2.webp" alt="logo"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">Little</strong>
                <strong class="canvas_copy_title">Guy</strong>
                <span class="canvas_copy_details">WE LOVE CRAFT BEER</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://www.everythingwineandmore.ca/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/3.svg" alt="logo"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">everything</strong>
                <strong class="canvas_copy_title">WINE</strong>
                <span class="canvas_copy_details">AND MORE</span>
              </div>
            </a>
          </div>
          </Item>
        </Stack>

        </Stack>
       
        {/* brand logo slider */}
        <p style={{margin: "100px"}}></p>
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

Friend.propTypes = {
  location: PropTypes.object
};

export default Friend;
