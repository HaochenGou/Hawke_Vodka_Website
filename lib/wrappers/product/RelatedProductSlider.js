"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var _SectionTitle = _interopRequireDefault(require("../../components/section-title/SectionTitle"));

var _ProductGrid = _interopRequireDefault(require("./ProductGrid"));

var RelatedProductSlider = function RelatedProductSlider(_ref) {
  var spaceBottomClass = _ref.spaceBottomClass,
      category = _ref.category;
  var settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "related-product-area ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_SectionTitle.default, {
    titleText: "Related Products",
    positionClass: "text-center",
    spaceClass: "mb-50"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, settings, /*#__PURE__*/_react.default.createElement(_ProductGrid.default, {
    category: category,
    limit: 6,
    sliderClassName: "swiper-slide"
  })))));
};

RelatedProductSlider.propTypes = {
  category: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string
};
var _default = RelatedProductSlider;
exports.default = _default;