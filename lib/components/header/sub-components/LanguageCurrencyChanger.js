"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reduxMultilanguage = require("redux-multilanguage");

var LanguageCurrencyChanger = function LanguageCurrencyChanger(_ref) {
  var currency = _ref.currency,
      changeCurrency = _ref.changeCurrency,
      currentLanguageCode = _ref.currentLanguageCode,
      dispatch = _ref.dispatch;

  var changeLanguageTrigger = function changeLanguageTrigger(e) {
    var languageCode = e.target.value;
    dispatch((0, _reduxMultilanguage.changeLanguage)(languageCode));
  };

  var changeCurrencyTrigger = function changeCurrencyTrigger(e) {
    var currencyName = e.target.value;
    changeCurrency(currencyName);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "language-currency-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "same-language-currency language-style"
  }, /*#__PURE__*/_react.default.createElement("span", null, currentLanguageCode === "en" ? "English" : currentLanguageCode === "fn" ? "French" : currentLanguageCode === "de" ? "Germany" : "", " ", /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-angle-down"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "lang-car-dropdown"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    value: "en",
    onClick: function onClick(e) {
      return changeLanguageTrigger(e);
    }
  }, "English")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    value: "fn",
    onClick: function onClick(e) {
      return changeLanguageTrigger(e);
    }
  }, "French"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "same-language-currency"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Call Us 780-449-5331")));
};

LanguageCurrencyChanger.propTypes = {
  changeCurrency: _propTypes.default.func,
  currency: _propTypes.default.object,
  currentLanguageCode: _propTypes.default.string,
  dispatch: _propTypes.default.func
};
var _default = LanguageCurrencyChanger;
exports.default = _default;