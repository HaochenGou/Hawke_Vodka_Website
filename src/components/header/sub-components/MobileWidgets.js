import React from "react";

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://7804495331" target="_blank" rel="noopener noreferrer">(780) 449 5331 </a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@hawkepro.com" target="_blank" rel="noopener noreferrer">info@hawkepro.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        <a href="//twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="//instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="//facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="//pinterest.com" target="_blank" rel="noopener noreferrer" title="Pinterest">
          <i className="fa fa-pinterest"></i>
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
