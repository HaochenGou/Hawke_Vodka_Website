"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactToastNotifications = require("react-toast-notifications");

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _reactRedux = require("react-redux");

var _product = require("../../helpers/product");

var _cartActions = require("../../redux/actions/cartActions");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Cart = function Cart(_ref) {
  var location = _ref.location,
      cartItems = _ref.cartItems,
      currency = _ref.currency,
      decrementQty = _ref.decrementQty,
      addToCart = _ref.addToCart,
      removeFromCart = _ref.removeFromCart,
      removeAllFromCart = _ref.removeAllFromCart;

  var _useState = (0, _react.useState)(1),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      quantityCount = _useState2[0];

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  var pathname = location.pathname;
  var cartTotalPrice = 0;
  var buylink = 'https://baby-x-vodka.myshopify.com/cart/';
  var buyurl = '?channel=buy_button';
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Cart"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Cart page of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Cart"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-main-area pt-90 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, cartItems && cartItems.length >= 1 ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "cart-page-title"
  }, "Your cart items"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-content table-responsive cart-table-content"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Image"), /*#__PURE__*/_react.default.createElement("th", null, "Product Name"), /*#__PURE__*/_react.default.createElement("th", null, "Unit Price"), /*#__PURE__*/_react.default.createElement("th", null, "Qty"), /*#__PURE__*/_react.default.createElement("th", null, "Subtotal"), /*#__PURE__*/_react.default.createElement("th", null, "action"))), /*#__PURE__*/_react.default.createElement("tbody", null, cartItems.map(function (cartItem, key) {
    var discountedPrice = (0, _product.getDiscountPrice)(cartItem.price, cartItem.discount);
    var finalProductPrice = (cartItem.price * currency.currencyRate).toFixed(2);
    var finalDiscountedPrice = (discountedPrice * currency.currencyRate).toFixed(2);
    buylink += cartItem.id + ':' + cartItem.quantity + ',';
    discountedPrice != null ? cartTotalPrice += finalDiscountedPrice * cartItem.quantity : cartTotalPrice += finalProductPrice * cartItem.quantity;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "product-thumbnail"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + cartItem.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid",
      src: process.env.PUBLIC_URL + cartItem.image[0],
      alt: cartItem.alt
    }))), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-name"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + cartItem.id
    }, cartItem.name), cartItem.selectedProductColor && cartItem.selectedProductSize ? /*#__PURE__*/_react.default.createElement("div", {
      className: "cart-item-variation"
    }, /*#__PURE__*/_react.default.createElement("span", null, "Color: ", cartItem.selectedProductColor), /*#__PURE__*/_react.default.createElement("span", null, "Size: ", cartItem.selectedProductSize)) : ""), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-price-cart"
    }, discountedPrice !== null ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "amount old"
    }, currency.currencySymbol + finalProductPrice), /*#__PURE__*/_react.default.createElement("span", {
      className: "amount"
    }, currency.currencySymbol + finalDiscountedPrice)) : /*#__PURE__*/_react.default.createElement("span", {
      className: "amount"
    }, currency.currencySymbol + finalProductPrice)), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-quantity"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "cart-plus-minus"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "dec qtybutton",
      onClick: function onClick() {
        return decrementQty(cartItem, addToast);
      }
    }, "-"), /*#__PURE__*/_react.default.createElement("input", {
      className: "cart-plus-minus-box",
      type: "text",
      value: cartItem.quantity,
      readOnly: true
    }), /*#__PURE__*/_react.default.createElement("button", {
      className: "inc qtybutton",
      onClick: function onClick() {
        return addToCart(cartItem, addToast, quantityCount);
      },
      disabled: cartItem !== undefined && cartItem.quantity && cartItem.quantity >= (0, _cartActions.cartItemStock)(cartItem, cartItem.selectedProductColor, cartItem.selectedProductSize)
    }, "+"))), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-subtotal"
    }, discountedPrice !== null ? currency.currencySymbol + (finalDiscountedPrice * cartItem.quantity).toFixed(2) : currency.currencySymbol + (finalProductPrice * cartItem.quantity).toFixed(2)), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-remove"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return removeFromCart(cartItem, addToast);
      }
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-times"
    }))));
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-shiping-update-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-shiping-update"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/shop"
  }, "Continue Shopping")), /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-clear"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return removeAllFromCart(addToast);
    }
  }, "Clear Shopping Cart"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-tax"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-wrap"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "cart-bottom-title section-bg-gray"
  }, "Estimate Shipping And Tax")), /*#__PURE__*/_react.default.createElement("div", {
    className: "tax-wrapper"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Enter your destination to get a shipping estimate."), /*#__PURE__*/_react.default.createElement("div", {
    className: "tax-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tax-select"
  }, /*#__PURE__*/_react.default.createElement("label", null, "* Country"), /*#__PURE__*/_react.default.createElement("select", {
    className: "email s-email s-wid"
  }, /*#__PURE__*/_react.default.createElement("option", null, "Bangladesh"), /*#__PURE__*/_react.default.createElement("option", null, "Albania"), /*#__PURE__*/_react.default.createElement("option", null, "\xC5land Islands"), /*#__PURE__*/_react.default.createElement("option", null, "Afghanistan"), /*#__PURE__*/_react.default.createElement("option", null, "Belgium"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tax-select"
  }, /*#__PURE__*/_react.default.createElement("label", null, "* Region / State"), /*#__PURE__*/_react.default.createElement("select", {
    className: "email s-email s-wid"
  }, /*#__PURE__*/_react.default.createElement("option", null, "Bangladesh"), /*#__PURE__*/_react.default.createElement("option", null, "Albania"), /*#__PURE__*/_react.default.createElement("option", null, "\xC5land Islands"), /*#__PURE__*/_react.default.createElement("option", null, "Afghanistan"), /*#__PURE__*/_react.default.createElement("option", null, "Belgium"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "tax-select"
  }, /*#__PURE__*/_react.default.createElement("label", null, "* Zip/Postal Code"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "cart-btn-2",
    type: "submit"
  }, "Get A Quote"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "discount-code-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-wrap"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "cart-bottom-title section-bg-gray"
  }, "Use Coupon Code")), /*#__PURE__*/_react.default.createElement("div", {
    className: "discount-code"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Enter your coupon code if you have one."), /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    required: true,
    name: "name"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "cart-btn-2",
    type: "submit"
  }, "Apply Coupon"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "grand-totall"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title-wrap"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "cart-bottom-title section-bg-gary-cart"
  }, "Cart Total")), /*#__PURE__*/_react.default.createElement("h5", null, "Total products", " ", /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + cartTotalPrice.toFixed(2))), /*#__PURE__*/_react.default.createElement("h4", {
    className: "grand-totall-title"
  }, "Grand Total", " ", /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + cartTotalPrice.toFixed(2))), /*#__PURE__*/_react.default.createElement("a", {
    href: buylink + buyurl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Proceed to Checkout"))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area text-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__icon mb-30"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-cart"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__text"
  }, "No items found in cart ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/shop"
  }, "Shop Now")))))))));
};

Cart.propTypes = {
  addToCart: _propTypes.default.func,
  cartItems: _propTypes.default.array,
  currency: _propTypes.default.object,
  decrementQty: _propTypes.default.func,
  location: _propTypes.default.object,
  removeAllFromCart: _propTypes.default.func,
  removeFromCart: _propTypes.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(item, addToast, quantityCount) {
      dispatch((0, _cartActions.addToCart)(item, addToast, quantityCount));
    },
    decrementQty: function decrementQty(item, addToast) {
      dispatch((0, _cartActions.decrementQty)(item, addToast));
    },
    removeFromCart: function removeFromCart(item, addToast) {
      dispatch((0, _cartActions.removeFromCart)(item, addToast));
    },
    removeAllFromCart: function removeAllFromCart(addToast) {
      dispatch((0, _cartActions.removeAllFromCart)(addToast));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cart);

exports.default = _default;