"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactSpring3dCarousel = _interopRequireDefault(require("react-spring-3d-carousel"));

var _uuid = require("uuid");

var _reactSpring = require("react-spring");

require("./Carousel.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Example = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Example, _Component);

  var _super = _createSuper(Example);

  function Example() {
    var _this;

    (0, _classCallCheck2.default)(this, Example);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      config: _reactSpring.config.gentle
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "slides", [{
      key: (0, _uuid.v4)(),
      content: /*#__PURE__*/_react.default.createElement("a", {
        href: process.env.PUBLIC_URL + "/product/" + 37852889809047
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "380",
        height: "400",
        src: "/assets/img/Product1.webp",
        alt: "1"
      }))
    }, {
      key: (0, _uuid.v4)(),
      content: /*#__PURE__*/_react.default.createElement("a", {
        href: process.env.PUBLIC_URL + "/product/" + 41435485995159
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "380",
        height: "400",
        src: "/assets/img/Product2.webp",
        alt: "2"
      }))
    }, {
      key: (0, _uuid.v4)(),
      content: /*#__PURE__*/_react.default.createElement("a", {
        href: process.env.PUBLIC_URL + "/product/" + 41435507064983
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "380",
        height: "400",
        src: "/assets/img/Product3.webp",
        alt: "3"
      }))
    }, {
      key: (0, _uuid.v4)(),
      content: /*#__PURE__*/_react.default.createElement("a", {
        href: process.env.PUBLIC_URL + "/product/" + 37852889809047
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "380",
        height: "400",
        src: "/assets/img/Product1.webp",
        alt: "4"
      }))
    }, {
      key: (0, _uuid.v4)(),
      content: /*#__PURE__*/_react.default.createElement("a", {
        href: process.env.PUBLIC_URL + "/product/" + 41435485995159
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "380",
        height: "400",
        src: "/assets/img/Product2.webp",
        alt: "5"
      }))
    }, {
      key: (0, _uuid.v4)(),
      content: /*#__PURE__*/_react.default.createElement("a", {
        href: process.env.PUBLIC_URL + "/product/" + 41435507064983
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "380",
        height: "400",
        src: "/assets/img/Product3.webp",
        alt: "6"
      }))
    }].map(function (slide, index) {
      return _objectSpread(_objectSpread({}, slide), {}, {
        onClick: function onClick() {
          return _this.setState({
            goToSlide: index
          });
        }
      });
    }));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChangeInput", function (e) {
      _this.setState((0, _defineProperty2.default)({}, e.target.name, parseInt(e.target.value, 10) || 0));
    });
    return _this;
  }

  (0, _createClass2.default)(Example, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: "100%",
          height: "500px",
          backgroundImage: "url('/assets/img/test.jpg')"
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: "40%",
          height: "500px",
          margin: "0 auto",
          backgroundImage: "url('/assets/img/test.jpg')"
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        class: "startContainer"
      }, /*#__PURE__*/_react.default.createElement("form", {
        action: "/shop"
      }, /*#__PURE__*/_react.default.createElement("button", {
        class: "button pulseBox button3"
      }, "BUY"))), /*#__PURE__*/_react.default.createElement(_reactSpring3dCarousel.default, {
        slides: this.slides,
        goToSlide: this.state.goToSlide,
        offsetRadius: this.state.offsetRadius,
        showNavigation: this.state.showNavigation,
        animationConfig: this.state.config
      })));
    }
  }]);
  return Example;
}(_react.Component);

exports.default = Example;