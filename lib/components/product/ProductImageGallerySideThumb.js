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

var _reactLightgallery = require("react-lightgallery");

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductImageGalleryLeftThumb = function ProductImageGalleryLeftThumb(_ref) {
  var product = _ref.product,
      thumbPosition = _ref.thumbPosition;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      gallerySwiper = _useState2[0],
      getGallerySwiper = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      thumbnailSwiper = _useState4[0],
      getThumbnailSwiper = _useState4[1]; // effect for swiper slider synchronize


  (0, _react.useEffect)(function () {
    if (gallerySwiper !== null && gallerySwiper.controller && thumbnailSwiper !== null && thumbnailSwiper.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]); // swiper slider settings

  var gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true,
    effect: "fade"
  };
  var thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    direction: "vertical",
    breakpoints: {
      1200: {
        slidesPerView: 4,
        direction: "vertical"
      },
      992: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      768: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      640: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      320: {
        slidesPerView: 4,
        direction: "horizontal"
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "row row-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: " ".concat(thumbPosition && thumbPosition === "left" ? "col-xl-10 order-1 order-xl-2" : "col-xl-10")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-large-image-wrapper"
  }, product.discount || product.new ? /*#__PURE__*/_react.default.createElement("div", {
    className: "product-img-badges"
  }, product.discount ? /*#__PURE__*/_react.default.createElement("span", {
    className: "pink"
  }, "-", product.discount, "%") : "", product.new ? /*#__PURE__*/_react.default.createElement("span", {
    className: "purple"
  }, "New") : "") : "", /*#__PURE__*/_react.default.createElement(_reactLightgallery.LightgalleryProvider, null, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, gallerySwiperParams, product.image && product.image.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key
    }, /*#__PURE__*/_react.default.createElement(_reactLightgallery.LightgalleryItem, {
      group: "any",
      src: process.env.PUBLIC_URL + single
    }, /*#__PURE__*/_react.default.createElement("button", null, /*#__PURE__*/_react.default.createElement("i", {
      className: "pe-7s-expand1"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "single-image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: process.env.PUBLIC_URL + single,
      className: "img-fluid",
      alt: ""
    })));
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: " ".concat(thumbPosition && thumbPosition === "left" ? "col-xl-2 order-2 order-xl-1" : "col-xl-2")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-small-image-wrapper product-small-image-wrapper--side-thumb"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, thumbnailSwiperParams, product.image && product.image.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "single-image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: process.env.PUBLIC_URL + single,
      className: "img-fluid",
      alt: ""
    })));
  }))))));
};

ProductImageGalleryLeftThumb.propTypes = {
  product: _propTypes.default.object,
  thumbPosition: _propTypes.default.string
};
var _default = ProductImageGalleryLeftThumb;
exports.default = _default;