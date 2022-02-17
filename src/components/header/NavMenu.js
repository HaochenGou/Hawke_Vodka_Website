import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ({ strings }) => {
  return (
    <div className="main-menu">
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {strings["home"]} 
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-list-standard"}>
              {" "}
              {strings["shop"]} <i className="fa fa-angle-down" />{" "}
            </Link>
            <ul className="submenu">
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
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(NavMenu);
