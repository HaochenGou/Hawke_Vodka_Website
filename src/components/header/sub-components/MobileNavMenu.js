import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const MobileNavMenu = ({ strings }) => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]} 
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop"}>
              {strings["shop"]}
            </Link>
            <ul>
              <li>
                <ul>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/cart"}>
                      {strings["cart"]}
                    </Link>
                  </li>
                  <li>
                  <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                    {strings["wishlist"]}
                  </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
                <Link to={process.env.PUBLIC_URL + "/about"}>
                  {strings["about_us"]}
                </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/recipes"}>
              {strings["recipes"]}
            </Link>
          </li>
          <li>
            <a href="https://baby-x-vodka.myshopify.com/account/login" rel="noopener noreferrer" target="_blank">
                      {strings["wholesale"]}
            </a>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/silk"}>
                        {strings["silk"]}
            </Link>
            </li>
            <li>
            <Link to={process.env.PUBLIC_URL + "/web"}>
                      {strings["web"]}
            </Link>
            </li>
        </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
