"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeCurrency = exports.CHANGE_CURRENCY = void 0;

var _axios = _interopRequireDefault(require("axios"));

var CHANGE_CURRENCY = "CHANGE_CURRENCY";
exports.CHANGE_CURRENCY = CHANGE_CURRENCY;

var changeCurrency = function changeCurrency(currencyName) {
  return function (dispatch) {
    _axios.default.get("https://api.exchangeratesapi.io/latest?base=USD").then(function (response) {
      var rates = response.data.rates;
      var currencyRate = 0;

      for (var rate in rates) {
        if (rate === currencyName) {
          currencyRate = rates[rate];
        }
      }

      dispatch({
        type: CHANGE_CURRENCY,
        payload: {
          currencyName: currencyName,
          currencyRate: currencyRate
        }
      });
    }).catch(function (err) {
      console.log("Error: ", err);
    });
  };
};

exports.changeCurrency = changeCurrency;