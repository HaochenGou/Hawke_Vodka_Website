import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Our Commitment</h5>
          <p style={{margin: "100px"}}></p>
          <h1>We have distilled life down to what’s
important and how to move forward with
smiles and love in our hearts.</h1>
         

          <p>
          At Hawke Prohibition Distilleries and years behind us, we
have realized that life and business are one of the same.
Cool is everything, it means you live well, chase dreams and
elevate those around you. Enjoy, it’s smiles, love, embracing
all things positive. Have fun, with playful hearts the day-to-
day grind becomes bright and cheerful with pleasant
surprises around every corner.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
