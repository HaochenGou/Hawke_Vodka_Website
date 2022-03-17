"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactToastNotifications = require("react-toast-notifications");

var _reactStickyEl = _interopRequireDefault(require("react-sticky-el"));

var _product = require("../../helpers/product");

var _ProductDescriptionInfo = _interopRequireDefault(require("../../components/product/ProductDescriptionInfo"));

var _ProductImageGallerySticky = _interopRequireDefault(require("../../components/product/ProductImageGallerySticky"));

var ProductImageDescriptionSticky = function ProductImageDescriptionSticky(_ref) {
  var spaceTopClass = _ref.spaceTopClass,
      spaceBottomClass = _ref.spaceBottomClass,
      product = _ref.product,
      currency = _ref.currency,
      cartItems = _ref.cartItems,
      wishlistItems = _ref.wishlistItems,
      compareItems = _ref.compareItems;
  var wishlistItem = wishlistItems.filter(function (wishlistItem) {
    return wishlistItem.id === product.id;
  })[0];
  var compareItem = compareItems.filter(function (compareItem) {
    return compareItem.id === product.id;
  })[0];

  var _useToasts = (0, _reactToastNotifications.useToasts)(),
      addToast = _useToasts.addToast;

  var discountedPrice = (0, _product.getDiscountPrice)(product.price, product.discount);
  var finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
  var finalDiscountedPrice = +(discountedPrice * currency.currencyRate).toFixed(2);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "shop-area ".concat(spaceTopClass ? spaceTopClass : "", " ").concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_ProductImageGallerySticky.default, {
    product: product
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_reactStickyEl.default, {
    boundaryElement: ".shop-area",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductDescriptionInfo.default, {
    product: product,
    discountedPrice: discountedPrice,
    currency: currency,
    finalDiscountedPrice: finalDiscountedPrice,
    finalProductPrice: finalProductPrice,
    cartItems: cartItems,
    wishlistItem: wishlistItem,
    compareItem: compareItem,
    addToast: addToast
  }))))));
};

ProductImageDescriptionSticky.propTypes = {
  cartItems: _propTypes.default.array,
  compareItems: _propTypes.default.array,
  currency: _propTypes.default.object,
  product: _propTypes.default.object,
  spaceBottomClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string,
  wishlistItems: _propTypes.default.array
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ProductImageDescriptionSticky);

exports.default = _default;