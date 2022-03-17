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

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactRedux = require("react-redux");

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _product = require("../../helpers/product");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Checkout = function Checkout(_ref) {
  var location = _ref.location,
      cartItems = _ref.cartItems,
      currency = _ref.currency;
  var pathname = location.pathname;
  var cartTotalPrice = 0;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Checkout"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Checkout page of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Checkout"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkout-area pt-95 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, cartItems && cartItems.length >= 1 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-7"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info-wrap"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Billing Details"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "First Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Last Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Company Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-select mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Country"), /*#__PURE__*/_react.default.createElement("select", null, /*#__PURE__*/_react.default.createElement("option", null, "Select a country"), /*#__PURE__*/_react.default.createElement("option", null, "Azerbaijan"), /*#__PURE__*/_react.default.createElement("option", null, "Bahamas"), /*#__PURE__*/_react.default.createElement("option", null, "Bahrain"), /*#__PURE__*/_react.default.createElement("option", null, "Bangladesh"), /*#__PURE__*/_react.default.createElement("option", null, "Barbados")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Street Address"), /*#__PURE__*/_react.default.createElement("input", {
    className: "billing-address",
    placeholder: "House number and street name",
    type: "text"
  }), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "Apartment, suite, unit etc.",
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Town / City"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "State / County"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Postcode / ZIP"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Phone"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info mb-20"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Email Address"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "additional-info-wrap"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Additional information"), /*#__PURE__*/_react.default.createElement("div", {
    className: "additional-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Order notes"), /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: "Notes about your order, e.g. special notes for delivery. ",
    name: "message",
    defaultValue: ""
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "your-order-area"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Your order"), /*#__PURE__*/_react.default.createElement("div", {
    className: "your-order-wrap gray-bg-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "your-order-product-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "your-order-top"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Product"), /*#__PURE__*/_react.default.createElement("li", null, "Total"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "your-order-middle"
  }, /*#__PURE__*/_react.default.createElement("ul", null, cartItems.map(function (cartItem, key) {
    var discountedPrice = (0, _product.getDiscountPrice)(cartItem.price, cartItem.discount);
    var finalProductPrice = (cartItem.price * currency.currencyRate).toFixed(2);
    var finalDiscountedPrice = (discountedPrice * currency.currencyRate).toFixed(2);
    discountedPrice != null ? cartTotalPrice += finalDiscountedPrice * cartItem.quantity : cartTotalPrice += finalProductPrice * cartItem.quantity;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "order-middle-left"
    }, cartItem.name, " X ", cartItem.quantity), " ", /*#__PURE__*/_react.default.createElement("span", {
      className: "order-price"
    }, discountedPrice !== null ? currency.currencySymbol + (finalDiscountedPrice * cartItem.quantity).toFixed(2) : currency.currencySymbol + (finalProductPrice * cartItem.quantity).toFixed(2)));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "your-order-bottom"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: "your-order-shipping"
  }, "Shipping"), /*#__PURE__*/_react.default.createElement("li", null, "Free shipping"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "your-order-total"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", {
    className: "order-total"
  }, "Total"), /*#__PURE__*/_react.default.createElement("li", null, currency.currencySymbol + cartTotalPrice.toFixed(2))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "payment-method"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "place-order mt-25"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn-hover"
  }, "Place Order"))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area text-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__icon mb-30"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-cash"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__text"
  }, "No items found in cart to checkout ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/shop"
  }, "Shop Now")))))))));
};

Checkout.propTypes = {
  cartItems: _propTypes.default.array,
  currency: _propTypes.default.object,
  location: _propTypes.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Checkout);

exports.default = _default;