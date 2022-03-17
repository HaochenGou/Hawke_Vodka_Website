"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SubscribeEmail = _interopRequireDefault(require("./sub-components/SubscribeEmail"));

var FooterNewsletter = function FooterNewsletter(_ref) {
  var spaceBottomClass = _ref.spaceBottomClass,
      spaceLeftClass = _ref.spaceLeftClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-widget ".concat(spaceBottomClass ? spaceBottomClass : "", " ").concat(spaceLeftClass ? spaceLeftClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-title"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "SUBSCRIBE")), /*#__PURE__*/_react.default.createElement("div", {
    className: "subscribe-style"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Get E-mail updates about our latest shop and special offers."), /*#__PURE__*/_react.default.createElement(_SubscribeEmail.default, {
    mailchimpUrl: "//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
  })));
};

FooterNewsletter.propTypes = {
  spaceBottomClass: _propTypes.default.string,
  spaceLeftClass: _propTypes.default.string
};
var _default = FooterNewsletter;
exports.default = _default;