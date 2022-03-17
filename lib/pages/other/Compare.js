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

var _cartActions = require("../../redux/actions/cartActions");

var _compareActions = require("../../redux/actions/compareActions");

var _product = require("../../helpers/product");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _ProductRating = _interopRequireDefault(require("../../components/product/sub-components/ProductRating"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Compare = function Compare(_ref) {
  var location = _ref.location,
      cartItems = _ref.cartItems,
      compareItems = _ref.compareItems,
      addToCart = _ref.addToCart,
      removeFromCompare = _ref.removeFromCompare,
      currency = _ref.currency;
  var pathname = location.pathname;

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Compare"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Compare page of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Compare"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "compare-main-area pt-90 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, compareItems && compareItems.length >= 1 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "compare-page-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "compare-table table-responsive"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "table table-bordered mb-0"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "title-column"
  }, "Product Info"), compareItems.map(function (compareItem, key) {
    var cartItem = cartItems.filter(function (item) {
      return item.id === compareItem.id;
    })[0];
    return /*#__PURE__*/_react.default.createElement("td", {
      className: "product-image-title",
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "compare-remove"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return removeFromCompare(compareItem, addToast);
      }
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "pe-7s-trash"
    }))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + compareItem.id,
      className: "image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "img-fluid",
      src: process.env.PUBLIC_URL + compareItem.image[0],
      alt: compareItem.alt
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "product-title"
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: process.env.PUBLIC_URL + "/product/" + compareItem.id
    }, compareItem.name)), /*#__PURE__*/_react.default.createElement("div", {
      className: "compare-btn"
    }, compareItem.affiliateLink ? /*#__PURE__*/_react.default.createElement("a", {
      href: compareItem.affiliateLink,
      rel: "noopener noreferrer",
      target: "_blank"
    }, " ", "Buy now", " ") : compareItem.variation && compareItem.variation.length >= 1 ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: "".concat(process.env.PUBLIC_URL, "/product/").concat(compareItem.id)
    }, "Select Option") : compareItem.stock && compareItem.stock > 0 ? /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return addToCart(compareItem, addToast);
      },
      className: cartItem !== undefined && cartItem.quantity > 0 ? "active" : "",
      disabled: cartItem !== undefined && cartItem.quantity > 0,
      title: compareItem !== undefined ? "Added to cart" : "Add to cart"
    }, cartItem !== undefined && cartItem.quantity > 0 ? "Added" : "Add to cart") : /*#__PURE__*/_react.default.createElement("button", {
      disabled: true,
      className: "active"
    }, "Out of Stock")));
  })), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "title-column"
  }, "Price"), compareItems.map(function (compareItem, key) {
    var discountedPrice = (0, _product.getDiscountPrice)(compareItem.price, compareItem.discount);
    var finalProductPrice = (compareItem.price * currency.currencyRate).toFixed(2);
    var finalDiscountedPrice = (discountedPrice * currency.currencyRate).toFixed(2);
    return /*#__PURE__*/_react.default.createElement("td", {
      className: "product-price",
      key: key
    }, discountedPrice !== null ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "amount old"
    }, currency.currencySymbol + finalProductPrice), /*#__PURE__*/_react.default.createElement("span", {
      className: "amount"
    }, currency.currencySymbol + finalDiscountedPrice)) : /*#__PURE__*/_react.default.createElement("span", {
      className: "amount"
    }, currency.currencySymbol + finalProductPrice));
  })), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "title-column"
  }, "Description"), compareItems.map(function (compareItem, key) {
    return /*#__PURE__*/_react.default.createElement("td", {
      className: "product-desc",
      key: key
    }, /*#__PURE__*/_react.default.createElement("p", null, compareItem.shortDescription ? compareItem.shortDescription : "N/A"));
  })), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "title-column"
  }, "Rating"), compareItems.map(function (compareItem, key) {
    return /*#__PURE__*/_react.default.createElement("td", {
      className: "product-rating",
      key: key
    }, /*#__PURE__*/_react.default.createElement(_ProductRating.default, {
      ratingValue: compareItem.rating
    }));
  })))))))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area text-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__icon mb-30"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-shuffle"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "item-empty-area__text"
  }, "No items found in compare ", /*#__PURE__*/_react.default.createElement("br", null), " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/shop"
  }, "Add Items")))))))));
};

Compare.propTypes = {
  addToCart: _propTypes.default.func,
  cartItems: _propTypes.default.array,
  compareItems: _propTypes.default.array,
  currency: _propTypes.default.object,
  location: _propTypes.default.object,
  removeFromCompare: _propTypes.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartItems: state.cartData,
    compareItems: state.compareData,
    currency: state.currencyData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(item, addToast, quantityCount) {
      dispatch((0, _cartActions.addToCart)(item, addToast, quantityCount));
    },
    removeFromCompare: function removeFromCompare(item, addToast) {
      dispatch((0, _compareActions.removeFromCompare)(item, addToast));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Compare);

exports.default = _default;