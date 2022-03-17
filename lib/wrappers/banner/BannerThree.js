"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _bannerThree = _interopRequireDefault(require("../../data/banner/banner-three.json"));

var _BannerThreeSingle = _interopRequireDefault(require("../../components/banner/BannerThreeSingle.js"));

var BannerThree = function BannerThree(_ref) {
  var spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "banner-area ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _bannerThree.default && _bannerThree.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_BannerThreeSingle.default, {
      data: single,
      key: key,
      spaceBottomClass: "mb-30"
    });
  }))));
};

BannerThree.propTypes = {
  spaceBottomClass: _propTypes.default.string
};
var _default = BannerThree;
exports.default = _default;