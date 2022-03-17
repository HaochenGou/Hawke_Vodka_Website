"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _reactRedux = require("react-redux");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _ProductDescriptionTab = _interopRequireDefault(require("../../wrappers/product/ProductDescriptionTab"));

var _ProductImageDescription = _interopRequireDefault(require("../../wrappers/product/ProductImageDescription"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductFixedImage = function ProductFixedImage(_ref) {
  var location = _ref.location,
      product = _ref.product;
  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Product Page"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Product page of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/shop"
  }, "Shop"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Shop Product"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement(_ProductImageDescription.default, {
    spaceTopClass: "pt-100",
    spaceBottomClass: "pb-100",
    product: product,
    galleryType: "fixedImage"
  }), /*#__PURE__*/_react.default.createElement(_ProductDescriptionTab.default, {
    spaceBottomClass: "pb-90",
    productFullDesc: product.fullDescription
  })));
};

ProductFixedImage.propTypes = {
  location: _propTypes.default.object,
  product: _propTypes.default.object
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var productId = ownProps.match.params.id;
  return {
    product: state.productData.products.filter(function (single) {
      return single.id === productId;
    })[0]
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ProductFixedImage);

exports.default = _default;