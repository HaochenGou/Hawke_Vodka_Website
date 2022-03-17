"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _bannerTwo = _interopRequireDefault(require("../../data/banner/banner-two.json"));

var _BannerTwoSingle = _interopRequireDefault(require("../../components/banner/BannerTwoSingle.js"));

var BannerTwo = function BannerTwo(_ref) {
  var spaceTopClass = _ref.spaceTopClass,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-area ".concat(spaceTopClass ? spaceTopClass : "", " ").concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _bannerTwo.default && _bannerTwo.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_BannerTwoSingle.default, {
      data: single,
      key: key
    });
  }))));
};

BannerTwo.propTypes = {
  spaceBottomClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = BannerTwo;
exports.default = _default;