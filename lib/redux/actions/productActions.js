"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProducts = exports.FETCH_PRODUCTS_SUCCESS = void 0;
var FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
exports.FETCH_PRODUCTS_SUCCESS = FETCH_PRODUCTS_SUCCESS;

var fetchProductsSuccess = function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
}; // fetch products


var fetchProducts = function fetchProducts(products) {
  return function (dispatch) {
    dispatch(fetchProductsSuccess(products));
  };
};

exports.fetchProducts = fetchProducts;