"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _currencyActions = require("../actions/currencyActions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var initState = {
  currencySymbol: "$",
  currencyName: "USD",
  currencyRate: 1
};

var currencyReducer = function currencyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _currencyActions.CHANGE_CURRENCY) {
    var currencyName = action.payload.currencyName;

    if (currencyName === "USD") {
      return _objectSpread(_objectSpread({}, state), {}, {
        currencySymbol: "$",
        currencyRate: action.payload.currencyRate,
        currencyName: currencyName
      });
    }

    if (currencyName === "EUR") {
      return _objectSpread(_objectSpread({}, state), {}, {
        currencySymbol: "€",
        currencyRate: action.payload.currencyRate,
        currencyName: currencyName
      });
    }

    if (currencyName === "GBP") {
      return _objectSpread(_objectSpread({}, state), {}, {
        currencySymbol: "£",
        currencyRate: action.payload.currencyRate,
        currencyName: currencyName
      });
    }
  }

  return state;
};

var _default = currencyReducer;
exports.default = _default;