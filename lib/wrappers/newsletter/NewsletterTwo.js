"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SubscribeEmailTwo = _interopRequireDefault(require("../../components/newsletter/SubscribeEmailTwo"));

var NewsletterTwo = function NewsletterTwo(_ref) {
  var spaceTopClass = _ref.spaceTopClass,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "subscribe-area-3 ".concat(spaceTopClass ? spaceTopClass : "", " ").concat(spaceBottomClass ? spaceBottomClass : "", " ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-5 col-lg-7 col-md-10 ml-auto mr-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "subscribe-style-3 text-center"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Subscribe "), /*#__PURE__*/_react.default.createElement("p", null, "Subscribe to our newsletter to receive news on update"), /*#__PURE__*/_react.default.createElement(_SubscribeEmailTwo.default, {
    mailchimpUrl: "//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",
    spaceTopClass: "mt-35"
  }))))));
};

NewsletterTwo.propTypes = {
  spaceBottomClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = NewsletterTwo;
exports.default = _default;