"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var ScrollToTop = function ScrollToTop(props) {
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);
  });
  return props.children;
};

var _default = (0, _reactRouterDom.withRouter)(ScrollToTop);

exports.default = _default;