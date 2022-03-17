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

var _Logo = _interopRequireDefault(require("../../components/header/Logo"));

var _NavMenu = _interopRequireDefault(require("../../components/header/NavMenu"));

var _IconGroup = _interopRequireDefault(require("../../components/header/IconGroup"));

var _MobileMenu = _interopRequireDefault(require("../../components/header/MobileMenu"));

var _HeaderTop = _interopRequireDefault(require("../../components/header/HeaderTop"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeaderOne = function HeaderOne(_ref) {
  var layout = _ref.layout,
      top = _ref.top,
      borderStyle = _ref.borderStyle,
      headerPaddingClass = _ref.headerPaddingClass;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      headerTop = _useState4[0],
      setHeaderTop = _useState4[1];

  (0, _react.useEffect)(function () {
    var header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var handleScroll = function handleScroll() {
    setScroll(window.scrollY);
  };

  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header-area clearfix"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(headerPaddingClass ? headerPaddingClass : "", " ").concat(top === "visible" ? "d-none d-lg-block" : "d-none", " header-top-area ").concat(borderStyle === "fluid-border" ? "border-none" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: layout === "container-fluid" ? layout : "container"
  }, /*#__PURE__*/_react.default.createElement(_HeaderTop.default, {
    borderStyle: borderStyle
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: " ".concat(headerPaddingClass ? headerPaddingClass : "", " sticky-bar header-res-padding clearfix ").concat(scroll > headerTop ? "stick" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: layout === "container-fluid" ? layout : "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-2 col-lg-2 col-md-6 col-4"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    imageUrl: "/assets/img/logo/logo.webp",
    logoClass: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-8 col-lg-8 d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement(_NavMenu.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-2 col-lg-2 col-md-6 col-8"
  }, /*#__PURE__*/_react.default.createElement(_IconGroup.default, null)))), /*#__PURE__*/_react.default.createElement(_MobileMenu.default, null)));
};

HeaderOne.propTypes = {
  borderStyle: _propTypes.default.string,
  headerPaddingClass: _propTypes.default.string,
  layout: _propTypes.default.string,
  top: _propTypes.default.string
};
var _default = HeaderOne;
exports.default = _default;