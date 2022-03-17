"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _currencyActions = require("../../redux/actions/currencyActions");

var _reduxMultilanguage = require("redux-multilanguage");

var _Logo = _interopRequireDefault(require("../../components/header/Logo"));

var _IconGroup = _interopRequireDefault(require("../../components/header/IconGroup"));

var _NavMenu = _interopRequireDefault(require("../../components/header/NavMenu"));

var _MobileMenu = _interopRequireDefault(require("../../components/header/MobileMenu"));

var _LanguageCurrencyChanger = _interopRequireDefault(require("../../components/header/sub-components/LanguageCurrencyChanger"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeaderTwo = function HeaderTwo(_ref) {
  var currency = _ref.currency,
      changeCurrency = _ref.changeCurrency,
      currentLanguageCode = _ref.currentLanguageCode,
      dispatch = _ref.dispatch;

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      headerTop = _useState4[0],
      setHeaderTop = _useState4[1];

  (0, _react.useEffect)(function () {
    var header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var handleScroll = function handleScroll() {
    setScroll(window.scrollY);
  };

  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header-area clearfix header-hm9 transparent-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-top-area d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-5 col-md-8 col-12"
  }, /*#__PURE__*/_react.default.createElement(_LanguageCurrencyChanger.default, {
    currency: currency,
    changeCurrency: changeCurrency,
    currentLanguageCode: currentLanguageCode,
    dispatch: dispatch
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-2 d-none d-lg-block text-center"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    imageUrl: "/assets/img/logo/logo.webp",
    logoClass: "logo-hm-9"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-5 col-md-4 col-12"
  }, /*#__PURE__*/_react.default.createElement(_IconGroup.default, null))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-bottom sticky-bar header-res-padding header-padding-2 ".concat(scroll > headerTop ? "stick" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 d-block d-lg-none"
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    imageUrl: "/assets/img/logo/logo.webp"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 d-block d-lg-none"
  }, /*#__PURE__*/_react.default.createElement(_IconGroup.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-xl-12 col-lg-12 d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement(_NavMenu.default, null))), /*#__PURE__*/_react.default.createElement(_MobileMenu.default, null))));
};

HeaderTwo.propTypes = {
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

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reduxMultilanguage.multilanguage)(HeaderTwo));

exports.default = _default;