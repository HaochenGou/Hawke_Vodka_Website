"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactToastNotifications = require("react-toast-notifications");

var _product = require("../../../helpers/product");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MenuCart = function MenuCart(_ref) {
  var cartData = _ref.cartData,
      currency = _ref.currency,
      removeFromCart = _ref.removeFromCart;
  var cartTotalPrice = 0;

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shopping-cart-content"
  }, cartData && cartData.length > 0 ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("ul", null, cartData.map(function (single, key) {
    var discountedPrice = (0, _product.getDiscountPrice)(single.price, single.discount);
    var finalProductPrice = (single.price * currency.currencyRate).toFixed(2);
    var finalDiscountedPrice = (discountedPrice * currency.currencyRate).toFixed(2);
    discountedPrice != null ? cartTotalPrice += finalDiscountedPrice * single.quantity : cartTotalPrice += finalProductPrice * single.quantity;
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "single-shopping-cart",
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "shopping-cart-img"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + single.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "",
      src: process.env.PUBLIC_URL + single.image[0],
      className: "img-fluid"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "shopping-cart-title"
    }, /*#__PURE__*/_react.default.createElement("h4", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + single.id
    }, " ", single.name, " ")), /*#__PURE__*/_react.default.createElement("h6", null, "Qty: ", single.quantity), /*#__PURE__*/_react.default.createElement("span", null, discountedPrice !== null ? currency.currencySymbol + finalDiscountedPrice : currency.currencySymbol + finalProductPrice), single.selectedProductColor && single.selectedProductSize ? /*#__PURE__*/_react.default.createElement("div", {
      className: "cart-item-variation"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Color: ", single.selectedProductColor), /*#__PURE__*/_react.default.createElement("span", null, "Size: ", single.selectedProductSize)) : ""), /*#__PURE__*/_react.default.createElement("div", {
      className: "shopping-cart-delete"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return removeFromCart(single, addToast);
      }
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-times-circle"
    }))));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "shopping-cart-total"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Total :", " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "shop-total"
  }, currency.currencySymbol + cartTotalPrice.toFixed(2)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "shopping-cart-btn btn-hover text-center"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "default-btn",
    to: process.env.PUBLIC_URL + "/cart"
  }, "view cart"))) : /*#__PURE__*/_react.default.createElement("p", {
    className: "text-center"
  }, "No items added to cart"));
};

MenuCart.propTypes = {
  cartData: _propTypes.default.array,
  currency: _propTypes.default.object,
  removeFromCart: _propTypes.default.func
};
var _default = MenuCart;
exports.default = _default;