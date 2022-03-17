"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _SectionTitleWithText = _interopRequireDefault(require("../../components/section-title/SectionTitleWithText"));

var _TextGridOne = _interopRequireDefault(require("../../wrappers/text-grid/TextGridOne"));

var _TeamMemberOne = _interopRequireDefault(require("../../wrappers/team-member/TeamMemberOne"));

var _BrandLogoSliderOne = _interopRequireDefault(require("../../wrappers/brand-logo/BrandLogoSliderOne"));

var _HeroSliderFive = _interopRequireDefault(require("../../wrappers/hero-slider/HeroSliderFive"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var About = function About(_ref) {
  var location = _ref.location;
  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | About us"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "About page of Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "About us"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement(_HeroSliderFive.default, null), /*#__PURE__*/_react.default.createElement(_SectionTitleWithText.default, {
    spaceTopClass: "pt-100",
    spaceBottomClass: "pb-95"
  }), /*#__PURE__*/_react.default.createElement(_TextGridOne.default, {
    spaceBottomClass: "pb-70"
  }), /*#__PURE__*/_react.default.createElement(_TeamMemberOne.default, {
    spaceTopClass: "pt-95",
    spaceBottomClass: "pb-70"
  }), /*#__PURE__*/_react.default.createElement(_BrandLogoSliderOne.default, {
    spaceBottomClass: "pb-70"
  })));
};

About.propTypes = {
  location: _propTypes.default.object
};
var _default = About;
exports.default = _default;