"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _MenuCart = _interopRequireDefault(require("./sub-components/MenuCart"));

var _cartActions = require("../../redux/actions/cartActions");

var IconGroup = function IconGroup(_ref) {
  var currency = _ref.currency,
      cartData = _ref.cartData,
      wishlistData = _ref.wishlistData,
      compareData = _ref.compareData,
      removeFromCart = _ref.removeFromCart;

  var handleClick = function handleClick(e) {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  var triggerMobileMenu = function triggerMobileMenu() {
    var offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
    offcanvasMobileMenu.classList.add("active");
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "header-right-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "same-style header-search d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "search-active",
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-search"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-content"
  }, /*#__PURE__*/_react.default.createElement("form", {
    action: "#"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "button-search"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-search"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "same-style account-setting d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "account-setting-active",
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-user"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "account-dropdown"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/login-register"
  }, "Login")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/login-register"
  }, "Register")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/my-account"
  }, "my account"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "same-style header-compare"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/compare"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-shuffle"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-style"
  }, compareData && compareData.length ? compareData.length : 0))), /*#__PURE__*/_react.default.createElement("div", {
    className: "same-style header-wishlist"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: process.env.PUBLIC_URL + "/wishlist"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-like"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-style"
  }, wishlistData && wishlistData.length ? wishlistData.length : 0))), /*#__PURE__*/_react.default.createElement("div", {
    className: "same-style cart-wrap d-none d-lg-block"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "icon-cart",
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-shopbag"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-style"
  }, cartData && cartData.length ? cartData.length : 0)), /*#__PURE__*/_react.default.createElement(_MenuCart.default, {
    cartData: cartData,
    currency: currency,
    removeFromCart: removeFromCart
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "same-style cart-wrap d-block d-lg-none"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "icon-cart",
    to: process.env.PUBLIC_URL + "/cart"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-shopbag"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "count-style"
  }, cartData && cartData.length ? cartData.length : 0))), /*#__PURE__*/_react.default.createElement("div", {
    className: "same-style mobile-off-canvas d-block d-lg-none"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "mobile-aside-button",
    onClick: function onClick() {
      return triggerMobileMenu();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-menu"
  }))));
};

IconGroup.propTypes = {
  cartData: _propTypes.default.array,
  compareData: _propTypes.default.array,
  currency: _propTypes.default.object,
  removeFromCart: _propTypes.default.func,
  wishlistData: _propTypes.default.array
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: function removeFromCart(item, addToast) {
      dispatch((0, _cartActions.removeFromCart)(item, addToast));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(IconGroup);

exports.default = _default;