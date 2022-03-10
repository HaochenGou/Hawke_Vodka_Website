import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import Client from "shopify-buy";
import Shopify from "@shopify/shopify-api";




const Buy = ({ location }) => {
  const { pathname } = location;
  const client = Client.buildClient({
    domain: 'baby-x-vodka.myshopify.com',
    apiKey: '97b7d775564daddb58a8aca065adcf83',
  });
   
  
  
  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Vodka | WholeSale buy </title>
        <meta
          name="description"
          content="About page of Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Buy
      </BreadcrumbsItem>
     
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        
       
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

Buy.propTypes = {
  location: PropTypes.object
};

export default Buy;
