"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var _testimonialOne = _interopRequireDefault(require("../../data/testimonial/testimonial-one.json"));

var _TestimonialOneSingle = _interopRequireDefault(require("../../components/testimonial/TestimonialOneSingle.js"));

var TestimonialOne = function TestimonialOne(_ref) {
  var spaceTopClass = _ref.spaceTopClass,
      spaceBottomClass = _ref.spaceBottomClass,
      spaceLeftClass = _ref.spaceLeftClass,
      spaceRightClass = _ref.spaceRightClass,
      bgColorClass = _ref.bgColorClass;
  // swiper slider settings
  var settings = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonial-area ".concat(spaceTopClass ? spaceTopClass : "", "  ").concat(spaceBottomClass ? spaceBottomClass : "", " ").concat(spaceLeftClass ? spaceLeftClass : "", "  ").concat(spaceRightClass ? spaceRightClass : "", " ").concat(bgColorClass ? bgColorClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-10 ml-auto mr-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "testimonial-active nav-style-1 nav-testi-style"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, settings, _testimonialOne.default && _testimonialOne.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_TestimonialOneSingle.default, {
      data: single,
      key: key,
      sliderClass: "swiper-slide"
    });
  })))))));
};

TestimonialOne.propTypes = {
  bgColorClass: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string,
  spaceLeftClass: _propTypes.default.string,
  spaceRightClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = TestimonialOne;
exports.default = _default;