"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("./Popup.css");

var _material = require("@mui/material");

var _Logo = _interopRequireDefault(require("../../components/header/Logo"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Popup = function Popup(props) {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isShow = _useState2[0],
      setIsShow = _useState2[1];

  var showcase = window.localStorage.getItem("show") === null;

  function toggle() {
    setIsShow(!isShow);
    document.getElementById("pop").style.visibility = "hidden";
    window.localStorage.setItem("show", JSON.stringify(isShow));
  }

  return /*#__PURE__*/_react.default.createElement("div", null, showcase && /*#__PURE__*/_react.default.createElement("div", {
    id: "pop",
    style: {
      visibility: 'visible'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-box"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("b", {
    className: "brand"
  }, "Hawke Prohibition Distilleries"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "20px"
    }
  }), /*#__PURE__*/_react.default.createElement(_Logo.default, {
    imageUrl: "/assets/img/logo/logo.webp",
    logoClass: "logo-hm-9"
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "20px"
    }
  }), /*#__PURE__*/_react.default.createElement("b", {
    className: "title"
  }, "Are you of legal drinking alcohol age?"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "40px"
    }
  }), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    justifyContent: "center",
    direction: "row",
    spacing: 5,
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    size: "large",
    onClick: toggle
  }, "Yes"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    size: "large",
    href: "https://www.drinksmart.com/"
  }, "No"), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "40px"
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "word"
  }, "By click the ", /*#__PURE__*/_react.default.createElement("b", null, "YES"), " button, you certify that you are of legal drinking alcohol age in the state in which you reside")))));
};

var _default = Popup;
exports.default = _default;