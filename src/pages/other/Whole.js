import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";


const Wholesale = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Vodka | Shop Sign </title>
        <meta
          name="description"
          content="About page of Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Wholesale
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

Wholesale.propTypes = {
  location: PropTypes.object
};

export default Wholesale;
