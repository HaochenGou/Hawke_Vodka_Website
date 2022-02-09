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
          <h5>Who Are We</h5>
          <h1>Welcome To Hawke Prohibition Distilleries</h1>
          <p>
          Our Distillery first serviced the Sherwood Park area, then onto
					Edmonton and surrounding. Then Calgary and Southern Alberta and can
					Proudly say, the fine people of Saskatchewan now are tasting our award
					winning baby-X-vodka. We plan on being an international brand built,
					loved, designed right here in small town Alberta. Hawke Prohibition
					Distilleries offers An Alberta Spirit Awards gold metal baby-X-vodka.
					Williams London Dry Gin as well as our new star Sir Peri Winkle's
					purple gin. Each spirit and every spirit moving forward will always be
					considerate history and the alchemy that goes with the process. We
					absolutely love what we do and we invite our beloved customers to
					continue this journey with us.{" "}
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
