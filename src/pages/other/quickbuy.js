import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
// import ShopifyBuy from 'shopify-buy';


// const client = ShopifyBuy.buildClient({
//   domain: 'baby-x-vodka.myshopify.com',
//   storefrontAccessToken: '97b7d775564daddb58a8aca065adcf83',
// });

// const ui = ShopifyBuy.UI.init(client);

const Buy = ({location}) => {
  const { pathname } = location;
  // ui.createComponent('collection', {
  //   id: '283202879639',
  //   node: document.getElementById('collection-component-1646953377427'),});
  // componentDidMount() {
  //   const script = document.createElement("script");    script.async = true;    script.src = "https://some-scripturl.js";    this.div.appendChild(script);  }
  // render() {

  

   
  
  
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
        <div id='collection-component-1646953377427'></div>
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
