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

const About = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Vodka | About us</title>
        <meta
          name="description"
          content="About page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        About us
      </BreadcrumbsItem>
     
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <HeroSliderFive/>

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

  

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

       

        {/* team member */}
        <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;
