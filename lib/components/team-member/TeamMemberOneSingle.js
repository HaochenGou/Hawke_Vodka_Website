"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var TeamMemberOneSingle = function TeamMemberOneSingle(_ref) {
  var data = _ref.data,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-3 col-md-6 col-sm-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "team-wrapper ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "team-img"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: process.env.PUBLIC_URL + data.image,
    alt: data.alt,
    className: "img-fluid"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "team-action"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "facebook",
    href: data.fbLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-facebook"
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "twitter",
    href: data.twitterLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-twitter"
  })), /*#__PURE__*/_react.default.createElement("a", {
    className: "instagram",
    href: data.instagramLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-instagram"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "team-content text-center"
  }, /*#__PURE__*/_react.default.createElement("h4", null, data.name), /*#__PURE__*/_react.default.createElement("span", null, data.position, " "))));
};

TeamMemberOneSingle.propTypes = {
  data: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string
};
var _default = TeamMemberOneSingle;
exports.default = _default;