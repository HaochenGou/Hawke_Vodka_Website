import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HeaderTwo from "../wrappers/header/HeaderTwo";
import FooterOne from "../wrappers/footer/FooterOne";

const LayoutTwo = ({ children, footerBgClass,headerTop }) => {
  return (
    <Fragment>
      <HeaderTwo 
      top={headerTop}
      />
      {children}
      <FooterOne
        backgroundColorClass={footerBgClass ? footerBgClass : "bg-gray"}
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
    </Fragment>
  );
};

LayoutTwo.propTypes = {
  children: PropTypes.array,
  footerBgClass: PropTypes.string
};

export default LayoutTwo;
