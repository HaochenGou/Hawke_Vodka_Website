"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromWishlist = exports.removeAllFromWishlist = exports.addToWishlist = exports.REMOVE_FROM_WISHLIST = exports.REMOVE_ALL_FROM_WISHLIST = exports.ADD_TO_WISHLIST = void 0;
var ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
exports.ADD_TO_WISHLIST = ADD_TO_WISHLIST;
var REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
exports.REMOVE_FROM_WISHLIST = REMOVE_FROM_WISHLIST;
var REMOVE_ALL_FROM_WISHLIST = "REMOVE_ALL_FROM_WISHLIST"; // add to wishlist

exports.REMOVE_ALL_FROM_WISHLIST = REMOVE_ALL_FROM_WISHLIST;

var addToWishlist = function addToWishlist(item, addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Added To Wishlist", {
        appearance: "success",
        autoDismiss: true
      });
    }

    dispatch({
      type: ADD_TO_WISHLIST,
      payload: item
    });
  };
}; // remove from wishlist


exports.addToWishlist = addToWishlist;

var removeFromWishlist = function removeFromWishlist(item, addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: item
    });
  };
}; //remove all from wishlist


exports.removeFromWishlist = removeFromWishlist;

var removeAllFromWishlist = function removeAllFromWishlist(addToast) {
  return function (dispatch) {
    if (addToast) {
      addToast("Removed All From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }

    dispatch({
      type: REMOVE_ALL_FROM_WISHLIST
    });
  };
};

exports.removeAllFromWishlist = removeAllFromWishlist;