import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import HeroSliderTwo from "../../wrappers/hero-slider/HeroSliderTwo";
import SimpleAccordion from "./Accordion";


const Recipes = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Prohibition Distilleries | Recipes</title>
        <meta
          name="description"
          content="Recipes page of Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Recipes
      </BreadcrumbsItem>
     
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <HeroSliderTwo/>
        <p style={{margin: "100px"}}></p>
        <div className="container">
          <div className="row">
            <SimpleAccordion/>
          </div>
        </div>
        <p style={{margin: "100px"}}></p>


      </LayoutOne>
    </Fragment>
  );
};

Recipes.propTypes = {
  location: PropTypes.object
};

export default Recipes;
