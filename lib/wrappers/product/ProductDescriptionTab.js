"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Tab = _interopRequireDefault(require("react-bootstrap/Tab"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

var ProductDescriptionTab = function ProductDescriptionTab(_ref) {
  var spaceBottomClass = _ref.spaceBottomClass,
      productFullDesc = _ref.productFullDesc;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "description-review-area ".concat(spaceBottomClass)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "description-review-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_Tab.default.Container, {
    defaultActiveKey: "productDescription"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default, {
    variant: "pills",
    className: "description-review-topbar"
  }, /*#__PURE__*/_react.default.createElement(_Nav.default.Item, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    eventKey: "productDescription"
  }, "Description"))), /*#__PURE__*/_react.default.createElement(_Tab.default.Content, {
    className: "description-review-bottom"
  }, /*#__PURE__*/_react.default.createElement(_Tab.default.Pane, {
    eventKey: "productDescription"
  }, productFullDesc))))));
};

ProductDescriptionTab.propTypes = {
  productFullDesc: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string
};
var _default = ProductDescriptionTab;
exports.default = _default;