"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCompare = exports.addToCompare = exports.REMOVE_FROM_COMPARE = exports.ADD_TO_COMPARE = void 0;
var ADD_TO_COMPARE = "ADD_TO_COMPARE";
exports.ADD_TO_COMPARE = ADD_TO_COMPARE;
var REMOVE_FROM_COMPARE = "REMOVE_FROM_COMPARE"; // add to compare

exports.REMOVE_FROM_COMPARE = REMOVE_FROM_COMPARE;

var addToCompare = function addToCompare(item, addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Added To Compare", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_COMPARE,
      payload: item
    });
  };
}; // remove from compare


exports.addToCompare = addToCompare;

var removeFromCompare = function removeFromCompare(item, addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Removed From Compare", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: REMOVE_FROM_COMPARE,
      payload: item
    });
  };
};

exports.removeFromCompare = removeFromCompare;