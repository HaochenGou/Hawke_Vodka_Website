"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _LocationMap = _interopRequireDefault(require("../../components/contact/LocationMap"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Contact = function Contact(_ref) {
  var location = _ref.location;
  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Contact"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Contact of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Contact"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-area pt-100 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-map mb-10"
  }, /*#__PURE__*/_react.default.createElement(_LocationMap.default, {
    latitude: "53.536850",
    longitude: "-113.331281"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "custom-row-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-4 col-md-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-info-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "single-contact-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-phone"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-info-dec"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "tel://7804495331"
  }, "+1 780-449-5331")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "single-contact-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-globe"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-info-dec"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "mailto:info@hawkepro.com",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "info@hawkepro.com")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "single-contact-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-map-marker"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-info-dec"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://goo.gl/maps/7iedxhZNktvnBgH69",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "426 Kaska Road,Sherwood Park, Alberta T8A 4G8.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-social text-center"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Follow Us"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//facebook.com"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-facebook"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//pinterest.com"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-pinterest-p"
  }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "//twitter.com"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-twitter"
  }))))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-8 col-md-7"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-title mb-30"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Get In Touch")), /*#__PURE__*/_react.default.createElement("form", {
    className: "contact-form-style"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: "Name*",
    type: "text"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "email",
    placeholder: "Email*",
    type: "email"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("input", {
    name: "subject",
    placeholder: "Subject*",
    type: "text"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    name: "message",
    placeholder: "Your Massege*",
    defaultValue: ""
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "submit",
    type: "submit"
  }, "SEND")))), /*#__PURE__*/_react.default.createElement("p", {
    className: "form-messege"
  }))))))));
};

Contact.propTypes = {
  location: _propTypes.default.object
};
var _default = Contact;
exports.default = _default;