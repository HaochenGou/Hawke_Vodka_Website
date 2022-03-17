"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _LayoutTwo = _interopRequireDefault(require("../../layouts/LayoutTwo"));

var _HeroSliderThree = _interopRequireDefault(require("../../wrappers/hero-slider/HeroSliderThree"));

var _SectionTitleWithText = _interopRequireDefault(require("../../components/section-title/SectionTitleWithText"));

var _BannerThree = _interopRequireDefault(require("../../wrappers/banner/BannerThree"));

var _TestimonialOne = _interopRequireDefault(require("../../wrappers/testimonial/TestimonialOne"));

var _BrandLogoSliderOne = _interopRequireDefault(require("../../wrappers/brand-logo/BrandLogoSliderOne"));

var _Carousel = _interopRequireDefault(require("./Carousel"));

var _Popup = _interopRequireDefault(require("./Popup"));

var _reactUsePip = _interopRequireDefault(require("react-use-pip"));

var _reactBootstrap = require("react-bootstrap");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HomeElectronics = function HomeElectronics() {
  var videoRef = (0, _react.useRef)(null);

  var _usePictureInPicture = (0, _reactUsePip.default)(videoRef),
      isPictureInPictureActive = _usePictureInPicture.isPictureInPictureActive,
      isPictureInPictureAvailable = _usePictureInPicture.isPictureInPictureAvailable,
      togglePictureInPicture = _usePictureInPicture.togglePictureInPicture;

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Home"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "home page."
  })), /*#__PURE__*/_react.default.createElement(_LayoutTwo.default, null, /*#__PURE__*/_react.default.createElement(_HeroSliderThree.default, null), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/_react.default.createElement(_SectionTitleWithText.default, {
    spaceBottomClass: "pb-90"
  }), /*#__PURE__*/_react.default.createElement(_Carousel.default, null), /*#__PURE__*/_react.default.createElement(_Popup.default, null), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "250px"
    }
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card, {
    className: "bg-dark text-white"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Img, {
    src: "/assets/img/bg/bg-1.webp",
    alt: "Card image"
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.ImgOverlay, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Card.Title, {
    style: {
      fontSize: "30px"
    }
  }, "Cocktail Recipes"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    size: "lg",
    href: process.env.PUBLIC_URL + "/recipes"
  }, "WATCH HOW TO MAKE"))), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/_react.default.createElement(_BannerThree.default, {
    spaceBottomClass: "pb-100"
  }), /*#__PURE__*/_react.default.createElement(_TestimonialOne.default, {
    spaceTopClass: "pt-100",
    spaceBottomClass: "pb-95",
    spaceLeftClass: "ml-70",
    spaceRightClass: "mr-70",
    bgColorClass: "bg-gray-3"
  }), /*#__PURE__*/_react.default.createElement(_BrandLogoSliderOne.default, {
    spaceBottomClass: "pb-95",
    spaceTopClass: "pt-100"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("video", {
    ref: videoRef,
    controls: true,
    loop: true,
    width: "0.1%"
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  })), isPictureInPictureAvailable && /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: function onClick() {
      return togglePictureInPicture(!isPictureInPictureActive);
    }
  }, isPictureInPictureActive ? 'Close' : 'Open', " Video"))));
};

var _default = HomeElectronics;
exports.default = _default;