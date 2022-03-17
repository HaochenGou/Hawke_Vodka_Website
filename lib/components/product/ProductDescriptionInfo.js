"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _product = require("../../helpers/product");

var _cartActions = require("../../redux/actions/cartActions");

var _wishlistActions = require("../../redux/actions/wishlistActions");

var _compareActions = require("../../redux/actions/compareActions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductDescriptionInfo = function ProductDescriptionInfo(_ref) {
  var product = _ref.product,
      discountedPrice = _ref.discountedPrice,
      currency = _ref.currency,
      finalDiscountedPrice = _ref.finalDiscountedPrice,
      finalProductPrice = _ref.finalProductPrice,
      cartItems = _ref.cartItems,
      wishlistItem = _ref.wishlistItem,
      compareItem = _ref.compareItem,
      addToast = _ref.addToast,
      addToCart = _ref.addToCart,
      addToWishlist = _ref.addToWishlist,
      addToCompare = _ref.addToCompare;

  var _useState = (0, _react.useState)(product.variation ? product.variation[0].color : ""),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedProductColor = _useState2[0],
      setSelectedProductColor = _useState2[1];

  var _useState3 = (0, _react.useState)(product.variation ? product.variation[0].size[0].name : ""),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selectedProductSize = _useState4[0],
      setSelectedProductSize = _useState4[1];

  var _useState5 = (0, _react.useState)(product.variation ? product.variation[0].size[0].stock : product.stock),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      productStock = _useState6[0],
      setProductStock = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      quantityCount = _useState8[0],
      setQuantityCount = _useState8[1];

  var productCartQty = (0, _product.getProductCartQty)(cartItems, product, selectedProductColor, selectedProductSize);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details-content ml-70"
  }, /*#__PURE__*/_react.default.createElement("h2", null, product.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details-price"
  }, discountedPrice !== null ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + finalProductPrice)) : /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + finalProductPrice, " ")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-list"
  }, /*#__PURE__*/_react.default.createElement("p", null, product.shortDescription)), product.affiliateLink ? /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-quality"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-cart btn-hover ml-0"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: product.affiliateLink,
    rel: "noopener noreferrer",
    target: "_blank"
  }, "Buy Now"))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-quality"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-plus-minus"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1);
    },
    className: "dec qtybutton"
  }, "-"), /*#__PURE__*/_react.default.createElement("input", {
    className: "cart-plus-minus-box",
    type: "text",
    value: quantityCount,
    readOnly: true
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setQuantityCount(quantityCount < productStock - productCartQty ? quantityCount + 1 : quantityCount);
    },
    className: "inc qtybutton"
  }, "+")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-cart btn-hover"
  }, productStock && productStock > 0 ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return addToCart(product, addToast, quantityCount, selectedProductColor, selectedProductSize);
    },
    disabled: productCartQty >= productStock
  }, " ", "Add To Cart", " ") : /*#__PURE__*/_react.default.createElement("button", {
    disabled: true
  }, "Out of Stock")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-wishlist"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: wishlistItem !== undefined ? "active" : "",
    disabled: wishlistItem !== undefined,
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    onClick: function onClick() {
      return addToWishlist(product, addToast);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-like"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-compare"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: compareItem !== undefined ? "active" : "",
    disabled: compareItem !== undefined,
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    onClick: function onClick() {
      return addToCompare(product, addToast);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-shuffle"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-social"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//facebook.com"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-facebook"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//pinterest.com"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-pinterest-p"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//twitter.com"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-twitter"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//linkedin.com"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-linkedin"
  }))))));
};

ProductDescriptionInfo.propTypes = {
  addToCart: _propTypes.default.func,
  addToCompare: _propTypes.default.func,
  addToWishlist: _propTypes.default.func,
  addToast: _propTypes.default.func,
  cartItems: _propTypes.default.array,
  compareItem: _propTypes.default.array,
  currency: _propTypes.default.object,
  discountedPrice: _propTypes.default.number,
  finalDiscountedPrice: _propTypes.default.number,
  finalProductPrice: _propTypes.default.number,
  product: _propTypes.default.object,
  wishlistItem: _propTypes.default.object
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(item, addToast, quantityCount, selectedProductColor, selectedProductSize) {
      dispatch((0, _cartActions.addToCart)(item, addToast, quantityCount, selectedProductColor, selectedProductSize));
    },
    addToWishlist: function addToWishlist(item, addToast) {
      dispatch((0, _wishlistActions.addToWishlist)(item, addToast));
    },
    addToCompare: function addToCompare(item, addToast) {
      dispatch((0, _compareActions.addToCompare)(item, addToast));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ProductDescriptionInfo);

exports.default = _default;