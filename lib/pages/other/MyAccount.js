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

var _Card = _interopRequireDefault(require("react-bootstrap/Card"));

var _Accordion = _interopRequireDefault(require("react-bootstrap/Accordion"));

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MyAccount = function MyAccount(_ref) {
  var location = _ref.location;
  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | My Account"), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "Compare page of flone Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "My Account"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "myaccount-area pb-80 pt-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-auto mr-auto col-lg-9"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "myaccount-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default, {
    defaultActiveKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: "single-my-account mb-20"
  }, /*#__PURE__*/_react.default.createElement(_Card.default.Header, {
    className: "panel-heading"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default.Toggle, {
    variant: "link",
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "panel-title"
  }, /*#__PURE__*/_react.default.createElement("span", null, "1 ."), " Edit your account information", " "))), /*#__PURE__*/_react.default.createElement(_Accordion.default.Collapse, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "myaccount-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "account-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "My Account Information"), /*#__PURE__*/_react.default.createElement("h5", null, "Your Personal Details")), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "First Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Last Name"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12 col-md-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Email Address"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Telephone"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Fax"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-back-btn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Continue"))))))), /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: "single-my-account mb-20"
  }, /*#__PURE__*/_react.default.createElement(_Card.default.Header, {
    className: "panel-heading"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default.Toggle, {
    variant: "link",
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "panel-title"
  }, /*#__PURE__*/_react.default.createElement("span", null, "2 ."), " Change your password"))), /*#__PURE__*/_react.default.createElement(_Accordion.default.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "myaccount-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "account-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Change Password"), /*#__PURE__*/_react.default.createElement("h5", null, "Your Password")), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12 col-md-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-12 col-md-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Password Confirm"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-back-btn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Continue"))))))), /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: "single-my-account mb-20"
  }, /*#__PURE__*/_react.default.createElement(_Card.default.Header, {
    className: "panel-heading"
  }, /*#__PURE__*/_react.default.createElement(_Accordion.default.Toggle, {
    variant: "link",
    eventKey: "2"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "panel-title"
  }, /*#__PURE__*/_react.default.createElement("span", null, "3 ."), " Modify your address book entries", " "))), /*#__PURE__*/_react.default.createElement(_Accordion.default.Collapse, {
    eventKey: "2"
  }, /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "myaccount-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "account-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Address Book Entries")), /*#__PURE__*/_react.default.createElement("div", {
    className: "entries-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "entries-info text-center"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Farhana hayder (shuvo) "), /*#__PURE__*/_react.default.createElement("p", null, "hastech "), /*#__PURE__*/_react.default.createElement("p", null, " Road#1 , Block#c "), /*#__PURE__*/_react.default.createElement("p", null, " Rampura. "), /*#__PURE__*/_react.default.createElement("p", null, "Dhaka "), /*#__PURE__*/_react.default.createElement("p", null, "Bangladesh "))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-lg-6 col-md-6 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "entries-edit-delete text-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "edit"
  }, "Edit"), /*#__PURE__*/_react.default.createElement("button", null, "Delete"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-back-btn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "billing-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit"
  }, "Continue")))))))))))))));
};

MyAccount.propTypes = {
  location: _propTypes.default.object
};
var _default = MyAccount;
exports.default = _default;