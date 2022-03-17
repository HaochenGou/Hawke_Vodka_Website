"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactMetaTags = _interopRequireDefault(require("react-meta-tags"));

var _reactBreadcrumbsDynamic = require("react-breadcrumbs-dynamic");

var _LayoutOne = _interopRequireDefault(require("../../layouts/LayoutOne"));

var _Breadcrumb = _interopRequireDefault(require("../../wrappers/breadcrumb/Breadcrumb"));

var _BrandLogoSliderOne = _interopRequireDefault(require("../../wrappers/brand-logo/BrandLogoSliderOne"));

require("./Friend.css");

var _material = require("@mui/material");

var _styles = require("@mui/material/styles");

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

var _LocationMap = _interopRequireDefault(require("../../components/contact/LocationMap"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Item = (0, _styles.styled)(_Paper.default)(function (_ref) {
  var theme = _ref.theme;
  return _objectSpread(_objectSpread({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
  }, theme.typography.body2), {}, {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  });
});

var Friend = function Friend(_ref2) {
  var location = _ref2.location;
  var pathname = location.pathname;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactMetaTags.default, null, /*#__PURE__*/_react.default.createElement("title", null, "Hawke Vodka | Friend "), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: "About page of Hawke Prohibition Distilleries."
  })), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + "/"
  }, "Home"), /*#__PURE__*/_react.default.createElement(_reactBreadcrumbsDynamic.BreadcrumbsItem, {
    to: process.env.PUBLIC_URL + pathname
  }, "Friend"), /*#__PURE__*/_react.default.createElement(_LayoutOne.default, {
    headerTop: "visible"
  }, /*#__PURE__*/_react.default.createElement(_Breadcrumb.default, null), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    spacing: 15
  }, /*#__PURE__*/_react.default.createElement(_material.Stack, {
    direction: "row",
    spacing: 15
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas-wrapper"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://www.crossroadsliquorstore.com/",
    class: "canvas",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_border"
  }, /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-orange",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    style: {
      stopcolor: 'rgb(253,137,68)',
      stopopacity: '1'
    }
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    style: {
      stopcolor: 'rgb(153,75,23)',
      stopopacity: '1'
    }
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-red",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    "stop-color": "#D34F48"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    "stop-color": "#772522"
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    id: "rect-grad",
    class: "rect-gradient",
    fill: "none",
    stroke: "url(#grad-orange)",
    "stroke-linecap": "square",
    "stroke-width": "4",
    "stroke-miterlimit": "30",
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "canvas_img",
    src: "assets/img/logo/1.webp",
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_copy canvas_copy--left"
  }, /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "CROSSROADS"), /*#__PURE__*/_react.default.createElement("span", {
    class: "canvas_copy_details"
  }, "LIQUOR"))))), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas-wrapper"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://littleguyliquorstore.com/",
    class: "canvas",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_border"
  }, /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-orange",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    style: {
      stopcolor: 'rgb(253,137,68)',
      stopopacity: '1'
    }
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    style: {
      stopcolor: 'rgb(153,75,23)',
      stopopacity: '1'
    }
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-red",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    "stop-color": "#D34F48"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    "stop-color": "#772522"
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    id: "rect-grad",
    class: "rect-gradient",
    fill: "none",
    stroke: "url(#grad-orange)",
    "stroke-linecap": "square",
    "stroke-width": "4",
    "stroke-miterlimit": "30",
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "canvas_img",
    src: "assets/img/logo/2.webp",
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_copy canvas_copy--left"
  }, /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "Little"), /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "Guy"), /*#__PURE__*/_react.default.createElement("span", {
    class: "canvas_copy_details"
  }, "WE LOVE CRAFT BEER"))))), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas-wrapper"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.everythingwineandmore.ca/",
    class: "canvas",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_border"
  }, /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-orange",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    style: {
      stopcolor: 'rgb(253,137,68)',
      stopopacity: '1'
    }
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    style: {
      stopcolor: 'rgb(153,75,23)',
      stopopacity: '1'
    }
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-red",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    "stop-color": "#D34F48"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    "stop-color": "#772522"
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    id: "rect-grad",
    class: "rect-gradient",
    fill: "none",
    stroke: "url(#grad-orange)",
    "stroke-linecap": "square",
    "stroke-width": "4",
    "stroke-miterlimit": "30",
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "canvas_img",
    src: "assets/img/logo/3.svg",
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_copy canvas_copy--left"
  }, /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "everything"), /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "WINE"), /*#__PURE__*/_react.default.createElement("span", {
    class: "canvas_copy_details"
  }, "AND MORE")))))), /*#__PURE__*/_react.default.createElement(_material.Stack, {
    direction: "row",
    spacing: 15
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas-wrapper"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://sherwoodparkmall.com/stores/sherwood-sherwood-park-safeway-liquor",
    class: "canvas",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_border"
  }, /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-orange",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    style: {
      stopcolor: 'rgb(253,137,68)',
      stopopacity: '1'
    }
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    style: {
      stopcolor: 'rgb(153,75,23)',
      stopopacity: '1'
    }
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-red",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    "stop-color": "#D34F48"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    "stop-color": "#772522"
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    id: "rect-grad",
    class: "rect-gradient",
    fill: "none",
    stroke: "url(#grad-orange)",
    "stroke-linecap": "square",
    "stroke-width": "4",
    "stroke-miterlimit": "30",
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "canvas_img",
    src: "assets/img/logo/4.webp",
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_copy canvas_copy--left"
  }, /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "SAFEWAY"), /*#__PURE__*/_react.default.createElement("span", {
    class: "canvas_copy_details"
  }, "LIQUOR"))))), /*#__PURE__*/_react.default.createElement(Item, null, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas-wrapper"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://spkliquor.ca/",
    class: "canvas",
    rel: "noopener noreferrer",
    target: "_blank"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_border"
  }, /*#__PURE__*/_react.default.createElement("svg", null, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-orange",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    style: {
      stopcolor: 'rgb(253,137,68)',
      stopopacity: '1'
    }
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    style: {
      stopcolor: 'rgb(153,75,23)',
      stopopacity: '1'
    }
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "grad-red",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0%",
    "stop-color": "#D34F48"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "100%",
    "stop-color": "#772522"
  }))), /*#__PURE__*/_react.default.createElement("rect", {
    id: "rect-grad",
    class: "rect-gradient",
    fill: "none",
    stroke: "url(#grad-orange)",
    "stroke-linecap": "square",
    "stroke-width": "4",
    "stroke-miterlimit": "30",
    width: "100%",
    height: "100%"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_img-wrapper"
  }, /*#__PURE__*/_react.default.createElement("img", {
    class: "canvas_img",
    src: "assets/img/logo/5.webp",
    alt: "logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    class: "canvas_copy canvas_copy--left"
  }, /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "SHWEWOOD PARK"), /*#__PURE__*/_react.default.createElement("strong", {
    class: "canvas_copy_title"
  }, "LIQUOR"))))))), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-area pt-100 pb-100"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "contact-map mb-10"
  }, /*#__PURE__*/_react.default.createElement(_LocationMap.default, {
    latitude: "53.540202",
    longitude: "-113.320967"
  })))), /*#__PURE__*/_react.default.createElement(_BrandLogoSliderOne.default, {
    spaceBottomClass: "pb-70"
  })));
};

Friend.propTypes = {
  location: _propTypes.default.object
};
var _default = Friend;
exports.default = _default;