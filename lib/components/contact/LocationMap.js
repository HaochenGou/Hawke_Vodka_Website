"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _googleMapsReact = require("google-maps-react");

var _propTypes = require("prop-types");

var FooterMap = function FooterMap(props) {
  var mapStyles = {
    width: "100%",
    height: "100%"
  };
  return /*#__PURE__*/_react.default.createElement(_googleMapsReact.Map, {
    google: props.google,
    zoom: 10,
    style: mapStyles,
    initialCenter: {
      lat: props.latitude,
      lng: props.longitude
    }
  }, /*#__PURE__*/_react.default.createElement(_googleMapsReact.Marker, {
    position: {
      lat: props.latitude,
      lng: props.longitude
    },
    icon: {
      url: "".concat(process.env.PUBLIC_URL + "/assets/img/icon-img/2.png")
    },
    animation: props.google.maps.Animation.BOUNCE
  }));
};

FooterMap.propTypes = {
  google: _propTypes.PropTypes.object,
  latitude: _propTypes.PropTypes.string,
  longitude: _propTypes.PropTypes.string
};

var _default = (0, _googleMapsReact.GoogleApiWrapper)({
  apiKey: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws"
})(FooterMap);

exports.default = _default;