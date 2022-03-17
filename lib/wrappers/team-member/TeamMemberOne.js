"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SectionTitleTwo = _interopRequireDefault(require("../../components/section-title/SectionTitleTwo"));

var _teamMemberOne = _interopRequireDefault(require("../../data/team-members/team-member-one.json"));

var _TeamMemberOneSingle = _interopRequireDefault(require("../../components/team-member/TeamMemberOneSingle"));

var TeamMemberOne = function TeamMemberOne(_ref) {
  var spaceTopClass = _ref.spaceTopClass,
      spaceBottomClass = _ref.spaceBottomClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "team-area ".concat(spaceTopClass ? spaceTopClass : "", " ").concat(spaceBottomClass ? spaceBottomClass : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_SectionTitleTwo.default, {
    titleText: "Team Members",
    subTitleText: "Lorem ipsum dolor sit amet conse ctetu.",
    positionClass: "text-center",
    spaceClass: "mb-60"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, _teamMemberOne.default && _teamMemberOne.default.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement(_TeamMemberOneSingle.default, {
      data: single,
      spaceBottomClass: "mb-30",
      key: key
    });
  }))));
};

TeamMemberOne.propTypes = {
  spaceBottomClass: _propTypes.default.string,
  spaceTopClass: _propTypes.default.string
};
var _default = TeamMemberOne;
exports.default = _default;