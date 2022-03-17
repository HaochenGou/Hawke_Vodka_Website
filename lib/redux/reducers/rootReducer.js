"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _currencyReducer = _interopRequireDefault(require("./currencyReducer"));

var _productReducer = _interopRequireDefault(require("./productReducer"));

var _cartReducer = _interopRequireDefault(require("./cartReducer"));

var _wishlistReducer = _interopRequireDefault(require("./wishlistReducer"));

var _compareReducer = _interopRequireDefault(require("./compareReducer"));

var _redux = require("redux");

var _reduxMultilanguage = require("redux-multilanguage");

var rootReducer = (0, _redux.combineReducers)({
  multilanguage: (0, _reduxMultilanguage.createMultilanguageReducer)({
    currentLanguageCode: "en"
  }),
  currencyData: _currencyReducer.default,
  productData: _productReducer.default,
  cartData: _cartReducer.default,
  wishlistData: _wishlistReducer.default,
  compareData: _compareReducer.default
});
var _default = rootReducer;
exports.default = _default;