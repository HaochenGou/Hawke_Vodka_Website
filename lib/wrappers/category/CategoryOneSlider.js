"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var _categoryOne = _interopRequireDefault(require("../../data/category/category-one.json"));

var _CategoryOneSingle = _interopRequireDefault(require("../../components/category/CategoryOneSingle.js"));

var CategoryOneSlider = function CategoryOneSlider(_ref) {
  var spaceBottomClass = _ref.spaceBottomClass;
  // swiper slider settings
  var settings = {
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "collections-area ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "collection-wrap-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "collection-active-2"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, settings, _categoryOne.default && _categoryOne.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_CategoryOneSingle.default, {
      data: single,
      key: key,
      sliderClass: "swiper-slide"
    });
  }))))));
};

CategoryOneSlider.propTypes = {
  spaceBottomClass: _propTypes.default.string
};
var _default = CategoryOneSlider;
exports.default = _default;