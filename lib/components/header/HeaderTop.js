"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reduxMultilanguage = require("redux-multilanguage");

var _reactRedux = require("react-redux");

var _currencyActions = require("../../redux/actions/currencyActions");

var _LanguageCurrencyChanger = _interopRequireDefault(require("./sub-components/LanguageCurrencyChanger"));

var HeaderTop = function HeaderTop(_ref) {
  var currency = _ref.currency,
      changeCurrency = _ref.changeCurrency,
      currentLanguageCode = _ref.currentLanguageCode,
      dispatch = _ref.dispatch,
      borderStyle = _ref.borderStyle;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "header-top-wap ".concat(borderStyle === "fluid-border" ? "border-bottom" : "")
  }, /*#__PURE__*/_react.default.createElement(_LanguageCurrencyChanger.default, {
    currency: currency,
    changeCurrency: changeCurrency,
    currentLanguageCode: currentLanguageCode,
    dispatch: dispatch
  }));
};

HeaderTop.propTypes = {
  borderStyle: _propTypes.default.string,
  changeCurrency: _propTypes.default.func,
  currency: _propTypes.default.object,
  currentLanguageCode: _propTypes.default.string,
  dispatch: _propTypes.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currency: state.currencyData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeCurrency: function changeCurrency(currencyName) {
      dispatch((0, _currencyActions.changeCurrency)(currencyName));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reduxMultilanguage.multilanguage)(HeaderTop));

exports.default = _default;