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

var _reactRouterDom = require("react-router-dom");

var _reactToastNotifications = require("react-toast-notifications");

var _product = require("../../helpers/product");

var _ProductModal = _interopRequireDefault(require("./ProductModal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductGridSingleThree = function ProductGridSingleThree(_ref) {
  var product = _ref.product,
      currency = _ref.currency,
      addToCart = _ref.addToCart,
      addToWishlist = _ref.addToWishlist,
      addToCompare = _ref.addToCompare,
      cartItem = _ref.cartItem,
      wishlistItem = _ref.wishlistItem,
      compareItem = _ref.compareItem,
      sliderClassName = _ref.sliderClassName,
      spaceBottomClass = _ref.spaceBottomClass;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      modalShow = _useState2[0],
      setModalShow = _useState2[1];

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  var discountedPrice = (0, _product.getDiscountPrice)(product.price, product.discount);
  var finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  var finalDiscountedPrice = +(discountedPrice * currency.currencyRate).toFixed(2);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "custom2-col-5 ".concat(sliderClassName ? sliderClassName : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-wrap-2 pro-glaucous-color ".concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-img"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/product/" + product.id
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "default-img",
    src: process.env.PUBLIC_URL + product.image[0],
    alt: ""
  }), product.image.length > 1 ? /*#__PURE__*/_react.default.createElement("img", {
    className: "hover-img",
    src: process.env.PUBLIC_URL + product.image[1],
    alt: ""
  }) : ""), product.discount || product.new ? /*#__PURE__*/_react.default.createElement("div", {
    className: "product-img-badges"
  }, product.discount ? /*#__PURE__*/_react.default.createElement("span", {
    className: "pink"
  }, "-", product.discount, "%") : "", product.new ? /*#__PURE__*/_react.default.createElement("span", {
    className: "purple"
  }, "New") : "") : "", /*#__PURE__*/_react.default.createElement("div", {
    className: "product-action-2"
  }, product.affiliateLink ? /*#__PURE__*/_react.default.createElement("a", {
    href: product.affiliateLink,
    rel: "noopener noreferrer",
    target: "_blank",
    title: "Buy now"
  }, " ", /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart"
  }), " ") : product.variation && product.variation.length >= 1 ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(process.env.PUBLIC_URL, "/product/").concat(product.id),
    title: "Select options"
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fa fa-cog"
  })) : product.stock && product.stock > 0 ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return addToCart(product, addToast);
    },
    className: cartItem !== undefined && cartItem.quantity > 0 ? "active" : "",
    disabled: cartItem !== undefined && cartItem.quantity > 0,
    title: cartItem !== undefined ? "Added to cart" : "Add to cart"
  }, " ", /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart"
  }), " ") : /*#__PURE__*/_react.default.createElement("button", {
    disabled: true,
    className: "active",
    title: "Out of stock"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-shopping-cart"
  })), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setModalShow(true);
    },
    title: "Quick View"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-eye"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: compareItem !== undefined ? "active" : "",
    disabled: compareItem !== undefined,
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    onClick: function onClick() {
      return addToCompare(product, addToast);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-retweet"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-content-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-price-wrap-2"
  }, /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/product/" + product.id
  }, product.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "price-2"
  }, discountedPrice !== null ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + finalDiscountedPrice), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "old"
  }, currency.currencySymbol + finalProductPrice)) : /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + finalProductPrice, " "))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-wishlist-2"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: wishlistItem !== undefined ? "active" : "",
    disabled: wishlistItem !== undefined,
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    onClick: function onClick() {
      return addToWishlist(product, addToast);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-heart-o"
  })))))), /*#__PURE__*/_react.default.createElement(_ProductModal.default, {
    show: modalShow,
    onHide: function onHide() {
      return setModalShow(false);
    },
    product: product,
    currency: currency,
    discountedprice: discountedPrice,
    finalproductprice: finalProductPrice,
    finaldiscountedprice: finalDiscountedPrice,
    cartitem: cartItem,
    wishlistitem: wishlistItem,
    compareitem: compareItem,
    addtocart: addToCart,
    addtowishlist: addToWishlist,
    addtocompare: addToCompare,
    addtoast: addToast
  }));
};

ProductGridSingleThree.propTypes = {
  addToCart: _propTypes.default.func,
  addToCompare: _propTypes.default.func,
  addToWishlist: _propTypes.default.func,
  cartItem: _propTypes.default.object,
  compareItem: _propTypes.default.object,
  currency: _propTypes.default.object,
  product: _propTypes.default.object,
  sliderClassName: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string,
  wishlistItem: _propTypes.default.object
};
var _default = ProductGridSingleThree;
exports.default = _default;