"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactScroll = require("react-scroll");

var _FooterCopyright = _interopRequireDefault(require("../../components/footer/FooterCopyright"));

var _FooterNewsletter = _interopRequireDefault(require("../../components/footer/FooterNewsletter"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FooterOne = function FooterOne(_ref) {
  var backgroundColorClass = _ref.backgroundColorClass,
      spaceTopClass = _ref.spaceTopClass,
      spaceBottomClass = _ref.spaceBottomClass;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      top = _useState4[0],
      setTop = _useState4[1];

  (0, _react.useEffect)(function () {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var scrollToTop = function scrollToTop() {
    _reactScroll.animateScroll.scrollToTop();
  };

  var handleScroll = function handleScroll() {
    setScroll(window.scrollY);
  };

  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer-area ".concat(backgroundColorClass ? backgroundColorClass : "", " ").concat(spaceTopClass ? spaceTopClass : "", " ").concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-2 col-sm-4"
  }, /*#__PURE__*/_react.default.createElement(_FooterCopyright.default, {
    footerLogo: "/assets/img/logo/logo.webp",
    spaceBottomClass: "mb-30"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-2 col-md-4 col-sm-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-widget mb-30 ml-30"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "CONTACT US")), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-list"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/about"
  }, "About us")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://goo.gl/maps/7iedxhZNktvnBgH69",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "426 Kaska Road,Sherwood Park, Alberta T8A 4G8.")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:info@hawkepro.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "info@hawkepro.com")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "tel://7804495331",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "+1 780-449-5331")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-2 col-md-4 col-sm-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-widget mb-30 ml-50"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "USEFUL LINKS")), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-list"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "#/"
  }, "Track Your Order")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "#/"
  }, "Support Policy")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "#/"
  }, "FAQs")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-2 col-md-6 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-widget mb-30 ml-75"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "FOLLOW US")), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-list"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//www.facebook.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Facebook")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//www.twitter.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Twitter")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//www.instagram.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Instagram")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//www.youtube.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Youtube")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//www.tiktok.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "TikTok")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement(_FooterNewsletter.default, {
    spaceBottomClass: "mb-30",
    spaceLeftClass: "ml-70"
  })))), /*#__PURE__*/_react.default.createElement("button", {
    className: "scroll-top ".concat(scroll > top ? "show" : ""),
    onClick: function onClick() {
      return scrollToTop();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-angle-double-up"
  })));
};

FooterOne.propTypes = {
  backgroundColorClass: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = FooterOne;
exports.default = _default;