"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var _BrandLogoOneSingle = _interopRequireDefault(require("../../components/brand-logo/BrandLogoOneSingle"));

var _brandLogoOne = _interopRequireDefault(require("../../data/brand-logos/brand-logo-one.json"));

var BrandLogoSliderOne = function BrandLogoSliderOne(_ref) {
  var spaceBottomClass = _ref.spaceBottomClass,
      spaceTopClass = _ref.spaceTopClass;
  var settings = {
    loop: true,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "brand-logo-area ".concat(spaceBottomClass ? spaceBottomClass : "", "  ").concat(spaceTopClass ? spaceTopClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "brand-logo-active"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, settings, _brandLogoOne.default && _brandLogoOne.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_BrandLogoOneSingle.default, {
      data: single,
      key: key,
      sliderClassName: "swiper-slide",
      spaceBottomClass: "mb-30"
    });
  })))));
};

BrandLogoSliderOne.propTypes = {
  spaceBottomClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = BrandLogoSliderOne;
exports.default = _default;