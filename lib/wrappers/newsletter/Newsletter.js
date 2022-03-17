"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SubscribeEmail = _interopRequireDefault(require("../../components/newsletter/SubscribeEmail"));

var Newsletter = function Newsletter(_ref) {
  var bgColorClass = _ref.bgColorClass,
      spaceBottomClass = _ref.spaceBottomClass,
      spaceLeftClass = _ref.spaceLeftClass,
      spaceRightClass = _ref.spaceRightClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "subscribe-area ".concat(bgColorClass ? bgColorClass : "", " ").concat(spaceBottomClass ? spaceBottomClass : "", " ").concat(spaceLeftClass ? spaceLeftClass : "", "  ").concat(spaceRightClass ? spaceRightClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-8 col-lg-8 ml-auto mr-auto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "subscribe-style-2 text-center"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Subscribe "), /*#__PURE__*/_react.default.createElement("p", null, "Subscribe to our newsletter to receive news on update"), /*#__PURE__*/_react.default.createElement(_SubscribeEmail.default, {
    mailchimpUrl: "//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
  }))))));
};

Newsletter.propTypes = {
  bgColorClass: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string,
  spaceLeftClass: _propTypes.default.string,
  spaceRightClass: _propTypes.default.string
};
var _default = Newsletter;
exports.default = _default;