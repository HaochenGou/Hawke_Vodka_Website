"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _HeaderOne = _interopRequireDefault(require("../wrappers/header/HeaderOne"));

var _FooterOne = _interopRequireDefault(require("../wrappers/footer/FooterOne"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LayoutOne = function LayoutOne(_ref) {
  var children = _ref.children,
      headerContainerClass = _ref.headerContainerClass,
      headerTop = _ref.headerTop,
      headerPaddingClass = _ref.headerPaddingClass;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_HeaderOne.default, {
    layout: headerContainerClass,
    top: headerTop,
    headerPaddingClass: headerPaddingClass
  }), children, /*#__PURE__*/_react.default.createElement(_FooterOne.default, {
    backgroundColorClass: "bg-gray",
    spaceTopClass: "pt-100",
    spaceBottomClass: "pb-70"
  }));
};

LayoutOne.propTypes = {
  children: _propTypes.default.array,
  headerContainerClass: _propTypes.default.string,
  headerPaddingClass: _propTypes.default.string,
  headerTop: _propTypes.default.string
};
var _default = LayoutOne;
exports.default = _default;