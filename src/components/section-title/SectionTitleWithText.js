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
important.</h1>
         

          <p>
          Hawke Prohibition Distilleries is an indigenous- and female-owned business based in Sherwood Park, Alberta. We pride ourselves on crafting premium spirits using only the highest quality ingredients and our one-of-a-kind continuous distillation process to create a full range of premium alcohol spirits. We use organic and locally sourced ingredients whenever possible. There are no additives, essences, preservatives or artificial colors in any of our spirits. Our goal is to provide the finest quality, smoothest, award-winning spirits; in fact, our premier spirit, baby-X-vodka, won a gold medal at the Alberta Spirits Awards in 2021.<br></br><br></br>

Our lineup of premium spirits includes baby-X-vodka, our modern William’s London dry, Sir Periwinkle’s colour-changing gin, Lady Sophia Strawberry Hibiscus Gin, Scoundrel Spiced RumBum, and our newest Thick & Dirty Cream Liquor.{" "}
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
