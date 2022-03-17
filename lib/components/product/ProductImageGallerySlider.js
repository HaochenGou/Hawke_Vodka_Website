"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var ProductImageGallerySlider = function ProductImageGallerySlider(_ref) {
  var product = _ref.product;
  // swiper slider settings
  var gallerySwiperParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: function renderPrevButton() {
      return /*#__PURE__*/_react.default.createElement("button", {
        className: "swiper-button-prev ht-swiper-button-nav"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "pe-7s-angle-left"
      }));
    },
    renderNextButton: function renderNextButton() {
      return /*#__PURE__*/_react.default.createElement("button", {
        className: "swiper-button-next ht-swiper-button-nav"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "pe-7s-angle-right"
      }));
    },
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
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
    className: "product-large-image-wrapper product-large-image-wrapper--slider"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, gallerySwiperParams, product.image && product.image.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "single-image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: process.env.PUBLIC_URL + single,
      className: "img-fluid",
      alt: ""
    })));
  })));
};

ProductImageGallerySlider.propTypes = {
  product: _propTypes.default.object
};
var _default = ProductImageGallerySlider;
exports.default = _default;