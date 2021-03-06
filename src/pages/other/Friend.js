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
import FriendMap from "./Map";
import { padding } from "@mui/system";


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
        <title>Hawke Prohibition Distilleries | where_to_buy </title>
        <meta
          name="description"
          content="About page of Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Where To Buy
      </BreadcrumbsItem>
     
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <p style={{margin: "100px"}}></p>
        <Stack spacing={5}>
        <Item>
        <div class="c">
          <input class="c" type="checkbox" id="faq-1"></input>
          <h1 class="a"><label class="c" for="faq-1">Sherwood Park</label></h1>
        <div class="p">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>
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
                <img class="canvas_img" src="assets/img/logo/1.webp" alt="logo" loading="lazy"/>
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
                <img class="canvas_img" src="assets/img/logo/2.webp" alt="logo" loading="lazy"/>
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
                <img class="canvas_img" src="assets/img/logo/3.svg" alt="logo" loading="lazy"/>
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
        
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://sherwoodparkmall.com/stores/sherwood-sherwood-park-safeway-liquor" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/4.webp" alt="logo"loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">SAFEWAY</strong>
                <span class="canvas_copy_details">LIQUOR</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://spkliquor.ca/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/5.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">SHWEWOOD PARK</strong>
                <strong class="canvas_copy_title">LIQUOR</strong>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://liquor.sobeys.com/stores/safeway-liquor-sherwood-park-mall/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/6.svg" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">Sobeys</strong>
                <strong class="canvas_copy_title">LIQUOR</strong>
              </div>
            </a>
          </div>
          </Item>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://liquor-exchange.business.site/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/9.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
              <strong class="canvas_copy_title">LIQUOR</strong>
                <span class="canvas_copy_details">EXCHANGE</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://www.facebook.com/liquorvault.ca/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/14.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">LIQUOR</strong>
                <span class="canvas_copy_details">Vault</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
            <div style={{fontSize:'20px',alignContent:'center'}}>
          <a href="https://www.facebook.com/GREAT-Liquor-106117591113442/" class="canvas" rel="noopener noreferrer" target="_blank">Great Liquor</a>
          </div>
          </Item>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>  
          <Item>
            <div style={{fontSize:'20px',alignContent:'center'}}>
          <a href="https://www.skipthedishes.com/maplewood-liquor-store" class="canvas" rel="noopener noreferrer" target="_blank">Maplewood Liquor Store</a>
          </div>
          </Item>
          <Item>
            <div style={{fontSize:'20px',alignContent:'center'}}>
          <a href="https://www.skipthedishes.com/sss-liquor" class="canvas" rel="noopener noreferrer" target="_blank">SSS Liquor</a>
          </div>
          </Item>
          <Item>
            <div style={{fontSize:'20px',alignContent:'center'}}>
          <a href="mailto:baselineliquor@shaw.ca" class="canvas" rel="noopener noreferrer" target="_blank">PRAIRIE LAND LIQUOR STORE</a>
          </div>
          </Item>
        </Stack> 
        </div>
        </div>
        </Item>
        <Item>
        <div class="c">
        <input class="c" type="checkbox" id="faq-3"></input>
        <h1 class="a"><label class="c" for="faq-3">North Edmonton</label></h1>
        <div class="p">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>
        
          <Item>
          <div class="canvas-wrapper">
            <a href="https://econoliquor.business.site/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/12.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">econo liquor</strong>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://www.bossliquor156.com/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/13.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">boss liquor</strong>
              </div>
            </a>
          </div>
          </Item>
        </Stack>
        </div>
        </div>
        </Item>
        <Item>
        <div class="c">
        <input class="c" type="checkbox" id="faq-2"></input>
        <h1 class="a"><label class="c" for="faq-2">South Edmonton</label></h1>
        <div class="p">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://sherbrookeliquor.com/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/10.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">SHERBROOKE</strong>
                <span class="canvas_copy_details">WINE, SPIRITS & OODLES OF BEER</span>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://www.sandylaneliquor.ca/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/11.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">sandy lane liquor</strong>
              </div>
            </a>
          </div>
          </Item>
        </Stack>
        
        </div>
        </div>
        </Item>
        <Item>
        <div class="c">
        <input class="c" type="checkbox" id="faq-4"></input>
        <h1 class="a"><label class="c" for="faq-4">Fort Saskatchewan</label></h1>
        <div class="p">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://www.spiritson101.com/craft-beer" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/15.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">spiritson 101</strong>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://www.facebook.com/econoliquor05/" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/16.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">Econo Liquor</strong>
              </div>
            </a>
          </div>
          </Item>
          <Item>
          <div class="canvas-wrapper">
            <a href="https://liquorhouse.ca/locations#FortSaskatchewan" class="canvas" rel="noopener noreferrer" target="_blank">
              <div class="canvas_border">
                <svg>
                  <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopcolor:'rgb(253,137,68)',stopopacity:'1'}}></stop><stop offset="100%" style={{stopcolor:'rgb(153,75,23)',stopopacity:'1'}}></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                  <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
              </div>
              <div class="canvas_img-wrapper">
                <img class="canvas_img" src="assets/img/logo/17.webp" alt="logo" loading="lazy"/>
              </div>
              <div class="canvas_copy canvas_copy--left">
                <strong class="canvas_copy_title">Liquor House</strong>
              </div>
            </a>
          </div>
          </Item>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 8 }}>
        <p className="canvas_front"></p>
          <Item>
            <div style={{fontSize:'20px',alignContent:'center'}}>
          <a href="https://www.facebook.com/pineviewliquor" class="canvas" rel="noopener noreferrer" target="_blank">Pineview Liquor</a>
          </div>
          </Item>
          <Item>
            <div style={{fontSize:'20px',alignContent:'center'}}>
          <a href="https://www.facebook.com/angiescoldbeerandliquorstore/" class="canvas" rel="noopener noreferrer" target="_blank">Angie???s Cold Beer & Liquor Store</a>
          </div>
          </Item>
        </Stack>
        </div>
        </div>
        </Item>
        
        </Stack>
       
        <div className="contact-area pt-100 pb-100">
          <div className="container">
             <div className="contact-map mb-10"> 
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1SkIbjQbA75bKSyYJZPXRqQiIHyzBMxY&ehbc=2E312F" width="100%" height="100%" title='friend map'></iframe>
             </div> 
          </div>
        </div>
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

Friend.propTypes = {
  location: PropTypes.object
};

export default Friend;
