import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import HeroSliderFive from "../../wrappers/hero-slider/HeroSliderFive";

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
       
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

Friend.propTypes = {
  location: PropTypes.object
};

export default Friend;
