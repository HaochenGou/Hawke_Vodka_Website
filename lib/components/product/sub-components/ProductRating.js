"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProductRating = function ProductRating(_ref) {
  var ratingValue = _ref.ratingValue;
  var rating = [];

  for (var i = 0; i < 5; i++) {
    rating.push( /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-star-o",
      key: i
    }));
  }

  if (ratingValue && ratingValue > 0) {
    for (var _i = 0; _i <= ratingValue - 1; _i++) {
      rating[_i] = /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-star-o yellow",
        key: _i
      });
    }
  }

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, rating);
};

ProductRating.propTypes = {
  ratingValue: _propTypes.default.number
};
var _default = ProductRating;
exports.default = _default;