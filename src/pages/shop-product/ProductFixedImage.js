import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import HeroSliderSix from "../../wrappers/hero-slider/HeroSliderSix";
import HeroSliderSeven from "../../wrappers/hero-slider/HeroSliderSeven";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";


const ProductFixedImage = ({ location, product }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Prohibition Distilleries | Product Page</title>
        <meta
          name="description"
          content="Product page of Hawke Prohibition Distilleries."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/shop"}>Shop</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        {/* {product.id == "41907321995415" &&(<HeroSliderSix/>)}

        {product.id == "41873399251095" &&(<HeroSliderSeven/>)}

        {product.id == "37852889809047" &&(<HeroSliderEight/>)}

        {product.id == "41435507064983" &&(<HeroSliderNine/>)}

        {product.id == "41435485995159" &&(<HeroSliderTen/>)} */}
        
     
        

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
          galleryType="fixedImage"
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
        />
        

        {/* related product slider */}
      </LayoutOne>
    </Fragment>
  );
};

ProductFixedImage.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(
      single => single.id === productId
    )[0]
  };
};

export default connect(mapStateToProps)(ProductFixedImage);
