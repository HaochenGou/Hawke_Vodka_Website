"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _compareActions = require("../actions/compareActions");

var initState = [];

var compareReducer = function compareReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var compareItems = state,
      product = action.payload;

  switch (action.type) {
    case _compareActions.ADD_TO_COMPARE:
      var compareItem = compareItems.filter(function (item) {
        return item.id === product.id;
      })[0];

      if (compareItem === undefined) {
        return [].concat((0, _toConsumableArray2.default)(compareItems), [product]);
      } else {
        return compareItems;
      }

    case _compareActions.REMOVE_FROM_COMPARE:
      var remainingItems = function remainingItems(compareItems, product) {
        return compareItems.filter(function (compareItem) {
          return compareItem.id !== product.id;
        });
      };

      return remainingItems(compareItems, product);

    default:
      return compareItems;
  }
};

var _default = compareReducer;
exports.default = _default;