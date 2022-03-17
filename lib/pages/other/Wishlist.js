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

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _reactRedux = require("react-redux");

var _product = require("../../helpers/product");

var _wishlistActions = require("../../redux/actions/wishlistActions");

var _cartActions = require("../../redux/actions/cartActions");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Wishlist = function Wishlist(_ref) {
  var location = _ref.location,
      cartItems = _ref.cartItems,
      currency = _ref.currency,
      addToCart = _ref.addToCart,
      wishlistItems = _ref.wishlistItems,
      removeFromWishlist = _ref.removeFromWishlist,
      removeAllFromWishlist = _ref.removeAllFromWishlist;

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Wishlist"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Wishlist page of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Wishlist"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-main-area pt-90 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, wishlistItems && wishlistItems.length >= 1 ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", {
    className: "cart-page-title"
  }, "Your wishlist items"), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-content table-responsive cart-table-content"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Image"), /*#__PURE__*/_react.default.createElement("th", null, "Product Name"), /*#__PURE__*/_react.default.createElement("th", null, "Unit Price"), /*#__PURE__*/_react.default.createElement("th", null, "Add To Cart"), /*#__PURE__*/_react.default.createElement("th", null, "action"))), /*#__PURE__*/_react.default.createElement("tbody", null, wishlistItems.map(function (wishlistItem, key) {
    var discountedPrice = (0, _product.getDiscountPrice)(wishlistItem.price, wishlistItem.discount);
    var finalProductPrice = (wishlistItem.price * currency.currencyRate).toFixed(2);
    var finalDiscountedPrice = (discountedPrice * currency.currencyRate).toFixed(2);
    var cartItem = cartItems.filter(function (item) {
      return item.id === wishlistItem.id;
    })[0];
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "product-thumbnail"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + wishlistItem.id
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid",
      src: process.env.PUBLIC_URL + wishlistItem.image[0],
      alt: wishlistItem.alt
    }))), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-name text-center"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + wishlistItem.id
    }, wishlistItem.name)), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-price-cart"
    }, discountedPrice !== null ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "amount old"
    }, currency.currencySymbol + finalProductPrice), /*#__PURE__*/_react.default.createElement("span", {
      className: "amount"
    }, currency.currencySymbol + finalDiscountedPrice)) : /*#__PURE__*/_react.default.createElement("span", {
      className: "amount"
    }, currency.currencySymbol + finalProductPrice)), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-wishlist-cart"
    }, wishlistItem.affiliateLink ? /*#__PURE__*/_react.default.createElement("a", {
      href: wishlistItem.affiliateLink,
      rel: "noopener noreferrer",
      target: "_blank"
    }, " ", "Buy now", " ") : wishlistItem.variation && wishlistItem.variation.length >= 1 ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "".concat(process.env.PUBLIC_URL, "/product/").concat(wishlistItem.id)
    }, "Select option") : wishlistItem.stock && wishlistItem.stock > 0 ? /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return addToCart(wishlistItem, addToast);
      },
      className: cartItem !== undefined && cartItem.quantity > 0 ? "active" : "",
      disabled: cartItem !== undefined && cartItem.quantity > 0,
      title: wishlistItem !== undefined ? "Added to cart" : "Add to cart"
    }, cartItem !== undefined && cartItem.quantity > 0 ? "Added" : "Add to cart") : /*#__PURE__*/_react.default.createElement("button", {
      disabled: true,
      className: "active"
    }, "Out of stock")), /*#__PURE__*/_react.default.createElement("td", {
      className: "product-remove"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return removeFromWishlist(wishlistItem, addToast);
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
    to: process.env.PUBLIC_URL + "/shop-grid-standard"
  }, "Continue Shopping")), /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-clear"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return removeAllFromWishlist(addToast);
    }
  }, "Clear Wishlist")))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area text-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__icon mb-30"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-like"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__text"
  }, "No items found in wishlist ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/shop"
  }, "Add Items")))))))));
};

Wishlist.propTypes = {
  addToCart: _propTypes.default.func,
  cartItems: _propTypes.default.array,
  currency: _propTypes.default.object,
  location: _propTypes.default.object,
  removeAllFromWishlist: _propTypes.default.func,
  removeFromWishlist: _propTypes.default.func,
  wishlistItems: _propTypes.default.array
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    currency: state.currencyData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(item, addToast, quantityCount) {
      dispatch((0, _cartActions.addToCart)(item, addToast, quantityCount));
    },
    addToWishlist: function addToWishlist(item, addToast, quantityCount) {
      dispatch((0, _wishlistActions.addToWishlist)(item, addToast, quantityCount));
    },
    removeFromWishlist: function removeFromWishlist(item, addToast, quantityCount) {
      dispatch((0, _wishlistActions.removeFromWishlist)(item, addToast, quantityCount));
    },
    removeAllFromWishlist: function removeAllFromWishlist(addToast) {
      dispatch((0, _wishlistActions.removeAllFromWishlist)(addToast));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Wishlist);

exports.default = _default;