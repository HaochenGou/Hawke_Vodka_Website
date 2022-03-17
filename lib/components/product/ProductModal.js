"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactIdSwiper = _interopRequireDefault(require("react-id-swiper"));

var _product = require("../../helpers/product");

var _reactBootstrap = require("react-bootstrap");

var _ProductRating = _interopRequireDefault(require("./sub-components/ProductRating"));

var _reactRedux = require("react-redux");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ProductModal(props) {
  var product = props.product;
  var currency = props.currency;
  var discountedprice = props.discountedprice;
  var finalproductprice = props.finalproductprice;
  var finaldiscountedprice = props.finaldiscountedprice;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      gallerySwiper = _useState2[0],
      getGallerySwiper = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      thumbnailSwiper = _useState4[0],
      getThumbnailSwiper = _useState4[1];

  var _useState5 = (0, _react.useState)(product.variation ? product.variation[0].color : ""),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selectedProductColor = _useState6[0],
      setSelectedProductColor = _useState6[1];

  var _useState7 = (0, _react.useState)(product.variation ? product.variation[0].size[0].name : ""),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      selectedProductSize = _useState8[0],
      setSelectedProductSize = _useState8[1];

  var _useState9 = (0, _react.useState)(product.variation ? product.variation[0].size[0].stock : product.stock),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      productStock = _useState10[0],
      setProductStock = _useState10[1];

  var _useState11 = (0, _react.useState)(1),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      quantityCount = _useState12[0],
      setQuantityCount = _useState12[1];

  var wishlistItem = props.wishlistitem;
  var compareItem = props.compareitem;
  var addToCart = props.addtocart;
  var addToWishlist = props.addtowishlist;
  var addToCompare = props.addtocompare;
  var addToast = props.addtoast;
  var cartItems = props.cartitems;
  var productCartQty = (0, _product.getProductCartQty)(cartItems, product, selectedProductColor, selectedProductSize);
  (0, _react.useEffect)(function () {
    if (gallerySwiper !== null && gallerySwiper.controller && thumbnailSwiper !== null && thumbnailSwiper.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);
  var gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    loopedSlides: 4,
    loop: true
  };
  var thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    loopedSlides: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: function renderPrevButton() {
      return /*#__PURE__*/_react.default.createElement("button", {
        className: "swiper-button-prev ht-swiper-button-nav"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "pe-7s-angle-left"
      }));
    },
    renderNextButton: function renderNextButton() {
      return /*#__PURE__*/_react.default.createElement("button", {
        className: "swiper-button-next ht-swiper-button-nav"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "pe-7s-angle-right"
      }));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: props.show,
    onHide: props.onHide,
    className: "product-quickview-modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-5 col-sm-12 col-xs-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-large-image-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, gallerySwiperParams, product.image && product.image.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "single-image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: process.env.PUBLIC_URL + single,
      className: "img-fluid",
      alt: ""
    })));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-small-image-wrapper mt-15"
  }, /*#__PURE__*/_react.default.createElement(_reactIdSwiper.default, thumbnailSwiperParams, product.image && product.image.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "single-image"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: process.env.PUBLIC_URL + single,
      className: "img-fluid",
      alt: ""
    })));
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-7 col-sm-12 col-xs-12"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details-content quickview-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, product.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-details-price"
  }, discountedprice !== null ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + finaldiscountedprice), " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "old"
  }, currency.currencySymbol + finalproductprice)) : /*#__PURE__*/_react.default.createElement("span", null, currency.currencySymbol + finalproductprice, " ")), product.rating && product.rating > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-rating-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-rating"
  }, /*#__PURE__*/_react.default.createElement(_ProductRating.default, {
    ratingValue: product.rating
  }))) : "", /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-list"
  }, /*#__PURE__*/_react.default.createElement("p", null, product.shortDescription)), product.variation ? /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-size-color"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-color-wrap"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Color"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-color-content"
  }, product.variation.map(function (single, key) {
    return /*#__PURE__*/_react.default.createElement("label", {
      className: "pro-details-color-content--single ".concat(single.color),
      key: key
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "radio",
      value: single.color,
      name: "product-color",
      checked: single.color === selectedProductColor ? "checked" : "",
      onChange: function onChange() {
        setSelectedProductColor(single.color);
        setSelectedProductSize(single.size[0].name);
        setProductStock(single.size[0].stock);
        setQuantityCount(1);
      }
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "checkmark"
    }));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-size"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Size"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-size-content"
  }, product.variation && product.variation.map(function (single) {
    return single.color === selectedProductColor ? single.size.map(function (singleSize, key) {
      return /*#__PURE__*/_react.default.createElement("label", {
        className: "pro-details-size-content--single",
        key: key
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        value: singleSize.name,
        checked: singleSize.name === selectedProductSize ? "checked" : "",
        onChange: function onChange() {
          setSelectedProductSize(singleSize.name);
          setProductStock(singleSize.stock);
          setQuantityCount(1);
        }
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "size-name"
      }, singleSize.name));
    }) : "";
  })))) : "", product.affiliateLink ? /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-quality"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-cart btn-hover"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: product.affiliateLink,
    rel: "noopener noreferrer",
    target: "_blank"
  }, "Buy Now"))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-quality"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-plus-minus"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1);
    },
    className: "dec qtybutton"
  }, "-"), /*#__PURE__*/_react.default.createElement("input", {
    className: "cart-plus-minus-box",
    type: "text",
    value: quantityCount,
    readOnly: true
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setQuantityCount(quantityCount < productStock - productCartQty ? quantityCount + 1 : quantityCount);
    },
    className: "inc qtybutton"
  }, "+")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-cart btn-hover"
  }, productStock && productStock > 0 ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return addToCart(product, addToast, quantityCount, selectedProductColor, selectedProductSize);
    },
    disabled: productCartQty >= productStock
  }, " ", "Add To Cart", " ") : /*#__PURE__*/_react.default.createElement("button", {
    disabled: true
  }, "Out of Stock")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-wishlist"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: wishlistItem !== undefined ? "active" : "",
    disabled: wishlistItem !== undefined,
    title: wishlistItem !== undefined ? "Added to wishlist" : "Add to wishlist",
    onClick: function onClick() {
      return addToWishlist(product, addToast);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-like"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pro-details-compare"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: compareItem !== undefined ? "active" : "",
    disabled: compareItem !== undefined,
    title: compareItem !== undefined ? "Added to compare" : "Add to compare",
    onClick: function onClick() {
      return addToCompare(product, addToast);
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "pe-7s-shuffle"
  }))))))))));
}

ProductModal.propTypes = {
  addtoast: _propTypes.default.func,
  addtocart: _propTypes.default.func,
  addtocompare: _propTypes.default.func,
  addtowishlist: _propTypes.default.func,
  cartitems: _propTypes.default.array,
  compareitem: _propTypes.default.object,
  currency: _propTypes.default.object,
  discountedprice: _propTypes.default.number,
  finaldiscountedprice: _propTypes.default.number,
  finalproductprice: _propTypes.default.number,
  onHide: _propTypes.default.func,
  product: _propTypes.default.object,
  show: _propTypes.default.bool,
  wishlistitem: _propTypes.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cartitems: state.cartData
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ProductModal);

exports.default = _default;