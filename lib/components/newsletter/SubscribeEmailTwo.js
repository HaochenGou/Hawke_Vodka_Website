"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactMailchimpSubscribe = _interopRequireDefault(require("react-mailchimp-subscribe"));

var CustomForm = function CustomForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      onValidated = _ref.onValidated,
      spaceTopClass = _ref.spaceTopClass;
  var email;

  var submit = function submit() {
    email && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value
    });
    var emailInput = document.getElementById("mc-form-email");
    emailInput.value = "";
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "subscribe-form-3 ".concat(spaceTopClass ? spaceTopClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mc-form"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    id: "mc-form-email",
    className: "email",
    ref: function ref(node) {
      return email = node;
    },
    type: "email",
    placeholder: "Youe Email Addres"
  })), status === "sending" && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "#3498db",
      fontSize: "12px"
    }
  }, "sending..."), status === "error" && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "#e74c3c",
      fontSize: "12px"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), status === "success" && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: "#2ecc71",
      fontSize: "12px"
    },
    dangerouslySetInnerHTML: {
      __html: message
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "clear-3 green-subscribe"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: submit
  }, "SUBSCRIBE"))));
};

var SubscribeEmailTwo = function SubscribeEmailTwo(_ref2) {
  var mailchimpUrl = _ref2.mailchimpUrl,
      spaceTopClass = _ref2.spaceTopClass;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactMailchimpSubscribe.default, {
    url: mailchimpUrl,
    render: function render(_ref3) {
      var subscribe = _ref3.subscribe,
          status = _ref3.status,
          message = _ref3.message;
      return /*#__PURE__*/_react.default.createElement(CustomForm, {
        status: status,
        message: message,
        onValidated: function onValidated(formData) {
          return subscribe(formData);
        },
        spaceTopClass: spaceTopClass
      });
    }
  }));
};

SubscribeEmailTwo.propTypes = {
  mailchimpUrl: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = SubscribeEmailTwo;
exports.default = _default;