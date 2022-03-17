"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _uuid = require("uuid");

var _cartActions = require("../actions/cartActions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initState = [];

var cartReducer = function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var cartItems = state,
      product = action.payload;

  switch (action.type) {
    case _cartActions.ADD_TO_CART:
      // for non variant products
      if (product.variation === undefined) {
        var cartItem = cartItems.filter(function (item) {
          return item.id === product.id;
        })[0];

        if (cartItem === undefined) {
          return [].concat((0, _toConsumableArray2.default)(cartItems), [_objectSpread(_objectSpread({}, product), {}, {
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: (0, _uuid.v4)()
          })]);
        } else {
          return cartItems.map(function (item) {
            return item.cartItemId === cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
              quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1
            }) : item;
          });
        } // for variant products

      } else {
        var _cartItem = cartItems.filter(function (item) {
          return item.id === product.id && product.selectedProductColor && product.selectedProductColor === item.selectedProductColor && product.selectedProductSize && product.selectedProductSize === item.selectedProductSize && (product.cartItemId ? product.cartItemId === item.cartItemId : true);
        })[0];

        if (_cartItem === undefined) {
          return [].concat((0, _toConsumableArray2.default)(cartItems), [_objectSpread(_objectSpread({}, product), {}, {
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: (0, _uuid.v4)()
          })]);
        } else if (_cartItem !== undefined && (_cartItem.selectedProductColor !== product.selectedProductColor || _cartItem.selectedProductSize !== product.selectedProductSize)) {
          return [].concat((0, _toConsumableArray2.default)(cartItems), [_objectSpread(_objectSpread({}, product), {}, {
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: (0, _uuid.v4)()
          })]);
        } else {
          return cartItems.map(function (item) {
            return item.cartItemId === _cartItem.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
              quantity: product.quantity ? item.quantity + product.quantity : item.quantity + 1,
              selectedProductColor: product.selectedProductColor,
              selectedProductSize: product.selectedProductSize
            }) : item;
          });
        }
      }

    case _cartActions.DECREMENT_QTY:
      if (product.quantity === 1) {
        var _remainingItems = function _remainingItems(cartItems, product) {
          return cartItems.filter(function (cartItem) {
            return cartItem.cartItemId !== product.cartItemId;
          });
        };

        return _remainingItems(cartItems, product);
      } else {
        return cartItems.map(function (item) {
          return item.cartItemId === product.cartItemId ? _objectSpread(_objectSpread({}, item), {}, {
            quantity: item.quantity - 1
          }) : item;
        });
      }

    case _cartActions.REMOVE_FROM_CART:
      var remainingItems = function remainingItems(cartItems, product) {
        return cartItems.filter(function (cartItem) {
          return cartItem.cartItemId !== product.cartItemId;
        });
      };

      return remainingItems(cartItems, product);

    case _cartActions.REMOVE_ALL_FROM_CART:
      return cartItems.filter(function (item) {
        return false;
      });

    default:
      return state;
  }
};

var _default = cartReducer;
exports.default = _default;