"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _product = require("../../helpers/product");

var _ProductGridSingleTwo = _interopRequireDefault(require("../../components/product/ProductGridSingleTwo"));

var _cartActions = require("../../redux/actions/cartActions");

var _wishlistActions = require("../../redux/actions/wishlistActions");

var _compareActions = require("../../redux/actions/compareActions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductGridTwo = function ProductGridTwo(_ref) {
  var products = _ref.products,
      currency = _ref.currency,
      addToCart = _ref.addToCart,
      addToWishlist = _ref.addToWishlist,
      addToCompare = _ref.addToCompare,
      cartItems = _ref.cartItems,
      wishlistItems = _ref.wishlistItems,
      compareItems = _ref.compareItems,
      sliderClassName = _ref.sliderClassName,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductGridSingleTwo.default, {
      sliderClassName: sliderClassName,
      spaceBottomClass: spaceBottomClass,
      product: product,
      currency: currency,
      addToCart: addToCart,
      addToWishlist: addToWishlist,
      addToCompare: addToCompare,
      cartItem: cartItems.filter(function (cartItem) {
        return cartItem.id === product.id;
      })[0],
      wishlistItem: wishlistItems.filter(function (wishlistItem) {
        return wishlistItem.id === product.id;
      })[0],
      compareItem: compareItems.filter(function (compareItem) {
        return compareItem.id === product.id;
      })[0],
      key: product.id
    });
  }));
};

ProductGridTwo.propTypes = {
  addToCart: _propTypes.default.func,
  addToCompare: _propTypes.default.func,
  addToWishlist: _propTypes.default.func,
  cartItems: _propTypes.default.array,
  compareItems: _propTypes.default.array,
  currency: _propTypes.default.object,
  products: _propTypes.default.array,
  sliderClassName: _propTypes.default.string,
  spaceBottomClass: _propTypes.default.string,
  wishlistItems: _propTypes.default.array
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    products: (0, _product.getProducts)(state.productData.products, ownProps.category, ownProps.type, ownProps.limit),
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductGridTwo);

exports.default = _default;