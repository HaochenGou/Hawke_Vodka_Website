"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _MobileSearch = _interopRequireDefault(require("./sub-components/MobileSearch"));

var _MobileNavMenu = _interopRequireDefault(require("./sub-components/MobileNavMenu"));

var _MobileWidgets = _interopRequireDefault(require("./sub-components/MobileWidgets"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MobileMenu = function MobileMenu() {
  (0, _react.useEffect)(function () {
    var offCanvasNav = document.querySelector("#offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    var anchorLinks = offCanvasNav.querySelectorAll("a");

    for (var i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    for (var _i = 0; _i < numMenuExpand; _i++) {
      menuExpand[_i].addEventListener("click", function (e) {
        sideMenuExpand(e);
      });
    }

    for (var _i2 = 0; _i2 < anchorLinks.length; _i2++) {
      anchorLinks[_i2].addEventListener("click", function () {
        closeMobileMenu();
      });
    }
  });

  var sideMenuExpand = function sideMenuExpand(e) {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  var closeMobileMenu = function closeMobileMenu() {
    var offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
    offcanvasMobileMenu.classList.remove("active");
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "offcanvas-mobile-menu",
    id: "offcanvas-mobile-menu"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "offcanvas-menu-close",
    id: "mobile-menu-close-trigger",
    onClick: function onClick() {
      return closeMobileMenu();
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "offcanvas-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "offcanvas-inner-content"
  }, /*#__PURE__*/_react.default.createElement(_MobileSearch.default, null), /*#__PURE__*/_react.default.createElement(_MobileNavMenu.default, null), /*#__PURE__*/_react.default.createElement(_MobileWidgets.default, null))));
};

var _default = MobileMenu;
exports.default = _default;