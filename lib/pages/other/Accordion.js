"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SimpleAccordion;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));

var _AccordionSummary = _interopRequireDefault(require("@mui/material/AccordionSummary"));

var _AccordionDetails = _interopRequireDefault(require("@mui/material/AccordionDetails"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _styles = require("@mui/material/styles");

var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));

var _Paper = _interopRequireDefault(require("@mui/material/Paper"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function SimpleAccordion() {
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/1.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "BRAMBLE Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 2 oz. gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 oz. lemon juice", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBE oz. cr\xE8me de m\xFBre", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBD oz. simple syrup", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Garnish: Lemon wheel, blackberry"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "Combine the gin, lemon juice, and simple syrup with ice into a shaker and shake until chilled. Strain into a glass filled with crushed or pebble ice, then add the cr\xE8me de m\xFBre. Garnish with a lemon wheel and a blackberry."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/2.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "GIN & TONIC Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 25 ml William\u2019s London Dry Gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 75 ml ml Tonic Watere", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " lemon and a sprig of rosemary", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "1. Pour the gin followed by the tonic into a glass filled with ice.", /*#__PURE__*/React.createElement("br", null), "2. Serve with a slice of lemon and a sprig of rosemary."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/3.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "GIN FIZZ Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 2 oz. gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBE oz. simple syrup", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBE oz. heavy cream", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBD oz. lime juice", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBD oz. lemon juice", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 2 drops of orange flower water", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 egg white", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Club soda", /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "Combine all ingredients except for the soda into a cocktail shaker without ice and shake for fifteen to twenty seconds until the ingredients are thoroughly combined. Then add ice and shake for another fifteen to twenty seconds until fully diluted and chilled. Pour into a glass and slowly top with the soda water, creating a thick foam at the top of the glass. Optionally, add two drops of orange flower water to the top of the foam."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/4.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "GIN MARTINI Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 2 oz. gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 oz. dry vermouth", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Garnish: Lemon twist or olive"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "Combine all of the ingredients in a mixing glass and stir with ice until chilled. Strain into a chilled glass, and garnish with your choice of a lemon twist or olive."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/5.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: '40%'
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "NEGRONI Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 oz. gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 oz. Campari", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 oz. sweet vermouth", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Garnish: orange peel"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "To make a classic Negroni, mix equal parts gin, Campari, and sweet vermouth with ice. Strain over ice into a rocks glass and garnish with an orange twist."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/6.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: "40%"
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "PURPLE SUMMER KISS Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 2 oz. gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 oz. lemon juice", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBE oz. cr\xE8me de m\xFBre", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBD oz. simple syrup", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Garnish: Lemon wheel, blackberry"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "Combine the gin, lemon juice, and simple syrup with ice into a shaker and shake until chilled. Strain into a glass filled with crushed or pebble ice, then add the cr\xE8me de m\xFBre. Garnish with a lemon wheel and a blackberry."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/7.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: "40%"
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "TOM COLLINS Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 50 ml William\u2019s London Dry Gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 25 ml lemon juice", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 15 ml sugar syrup", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Soda water", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Lemon"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "1. Mix the gin, lemon juice and sugar syrup over ice.", /*#__PURE__*/React.createElement("br", null), "2. Pour into a tall glass and top with soda water.", /*#__PURE__*/React.createElement("br", null), "3. Garnish with a lemon slice.", /*#__PURE__*/React.createElement("br", null)))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }), /*#__PURE__*/React.createElement(_material.Stack, {
    direction: "row",
    spacing: 5
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement("img", {
    src: "assets/img/recipes/8.webp",
    alt: "recipes"
  })), /*#__PURE__*/React.createElement(_material.Stack, {
    style: {
      width: "40%"
    }
  }, /*#__PURE__*/React.createElement(_material.Stack, null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3498db",
      fontSize: "30px"
    }
  }, "WINKLE 75 Ingredients"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px"
    }
  }, " ", /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 1 oz. gin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " 2 oz. champagne", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBD oz. simple syrup", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " \xBD oz. lemon juice", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("i", {
    className: "fa fa-circle"
  }), " Garnish: Lemon twist"), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(_Accordion.default, null, /*#__PURE__*/React.createElement(_AccordionSummary.default, {
    expandIcon: /*#__PURE__*/React.createElement(_ExpandMore.default, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "25px"
  }, "Read More")), /*#__PURE__*/React.createElement(_AccordionDetails.default, null, /*#__PURE__*/React.createElement(_Typography.default, {
    fontSize: "20px"
  }, "Combine the lemon juice, simple syrup, and gin in a shaker and shake with ice. Strain into a chilled glass and top with champagne and a lemon twist."))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "100px"
    }
  }));
}