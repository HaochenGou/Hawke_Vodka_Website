"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _cartReducer = _interopRequireDefault(require("./redux/reducers/cartReducer"));

var _default = (0, _redux.createStore)(_cartReducer.default);

exports.default = _default;