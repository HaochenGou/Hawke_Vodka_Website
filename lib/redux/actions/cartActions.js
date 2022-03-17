"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCart = exports.removeAllFromCart = exports.decrementQty = exports.cartItemStock = exports.addToCart = exports.REMOVE_FROM_CART = exports.REMOVE_ALL_FROM_CART = exports.DECREMENT_QTY = exports.ADD_TO_CART = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ADD_TO_CART = "ADD_TO_CART";
exports.ADD_TO_CART = ADD_TO_CART;
var DECREMENT_QTY = "DECREMENT_QTY";
exports.DECREMENT_QTY = DECREMENT_QTY;
var REMOVE_FROM_CART = "REMOVE_FROM_CART";
exports.REMOVE_FROM_CART = REMOVE_FROM_CART;
var REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART"; //add to cart

exports.REMOVE_ALL_FROM_CART = REMOVE_ALL_FROM_CART;

var addToCart = function addToCart(item, addToast, quantityCount, selectedProductColor, selectedProductSize) {
  return function (dispatch) {
    if (addToast) {
      addToast("Added To Cart", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: _objectSpread(_objectSpread({}, item), {}, {
        quantity: quantityCount,
        selectedProductColor: selectedProductColor ? selectedProductColor : item.selectedProductColor ? item.selectedProductColor : null,
        selectedProductSize: selectedProductSize ? selectedProductSize : item.selectedProductSize ? item.selectedProductSize : null
      })
    });
  };
}; //decrement from cart


exports.addToCart = addToCart;

var decrementQty = function decrementQty(item, addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true
      });
    }

    dispatch({
      type: DECREMENT_QTY,
      payload: item
    });
  };
}; //remove from cart


exports.decrementQty = decrementQty;

var removeFromCart = function removeFromCart(item, addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Removed From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    });
  };
}; //remove all from cart


exports.removeFromCart = removeFromCart;

var removeAllFromCart = function removeAllFromCart(addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: REMOVE_ALL_FROM_CART
    });
  };
}; // get stock of cart item


exports.removeAllFromCart = removeAllFromCart;

var cartItemStock = function cartItemStock(item, color, size) {
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation.filter(function (single) {
      return single.color === color;
    })[0].size.filter(function (single) {
      return single.name === size;
    })[0].stock;
  }
};

exports.cartItemStock = cartItemStock;