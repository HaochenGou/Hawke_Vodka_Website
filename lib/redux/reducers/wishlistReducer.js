"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _wishlistActions = require("../actions/wishlistActions");

var initState = [];

var wishlistReducer = function wishlistReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var wishlistItems = state,
      product = action.payload;

  switch (action.type) {
    case _wishlistActions.ADD_TO_WISHLIST:
      var wishlistItem = wishlistItems.filter(function (item) {
        return item.id === product.id;
      })[0];

      if (wishlistItem === undefined) {
        return [].concat((0, _toConsumableArray2.default)(wishlistItems), [product]);
      } else {
        return wishlistItems;
      }

    case _wishlistActions.REMOVE_FROM_WISHLIST:
      var remainingItems = function remainingItems(wishlistItems, product) {
        return wishlistItems.filter(function (wishlistItem) {
          return wishlistItem.id !== product.id;
        });
      };

      return remainingItems(wishlistItems, product);

    case _wishlistActions.REMOVE_ALL_FROM_WISHLIST:
      return wishlistItems.filter(function (item) {
        return false;
      });

    default:
      return wishlistItems;
  }
};

var _default = wishlistReducer;
exports.default = _default;