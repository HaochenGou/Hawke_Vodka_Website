"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleShopTopFilter = exports.setActiveSort = exports.setActiveLayout = exports.getUniqueTags = exports.getUniqueSizes = exports.getUniqueColors = exports.getUniqueCategories = exports.getSortedProducts = exports.getProductsUniqueSizes = exports.getProducts = exports.getProductCartQty = exports.getDiscountPrice = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

// get products
var getProducts = function getProducts(products, category, type, limit) {
  var finalProducts = category ? products.filter(function (product) {
    return product.category.filter(function (single) {
      return single === category;
    })[0];
  }) : products;

  if (type && type === "new") {
    var newProducts = finalProducts.filter(function (single) {
      return single.new;
    });
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }

  if (type && type === "bestSeller") {
    return finalProducts.sort(function (a, b) {
      return b.saleCount - a.saleCount;
    }).slice(0, limit ? limit : finalProducts.length);
  }

  if (type && type === "saleItems") {
    return finalProducts.filter(function (single) {
      return single.discount && single.discount > 0;
    });
  }

  return finalProducts.slice(0, limit ? limit : finalProducts.length);
}; // get product discount price


exports.getProducts = getProducts;

var getDiscountPrice = function getDiscountPrice(price, discount) {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
}; // get product cart quantity


exports.getDiscountPrice = getDiscountPrice;

var getProductCartQty = function getProductCartQty(cartItems, product, color, size) {
  var productInCart = cartItems.filter(function (single) {
    return single.id === product.id && (single.selectedProductColor ? single.selectedProductColor === color : true) && (single.selectedProductSize ? single.selectedProductSize === size : true);
  })[0];

  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(function (single) {
        return single.id === product.id && single.selectedProductColor === color && single.selectedProductSize === size;
      })[0].quantity;
    } else {
      return cartItems.filter(function (single) {
        return product.id === single.id;
      })[0].quantity;
    }
  } else {
    return 0;
  }
}; //get products based on category


exports.getProductCartQty = getProductCartQty;

var getSortedProducts = function getSortedProducts(products, sortType, sortValue) {
  if (products && sortType && sortValue) {
    if (sortType === "category") {
      return products.filter(function (product) {
        return product.category.filter(function (single) {
          return single === sortValue;
        })[0];
      });
    }

    if (sortType === "tag") {
      return products.filter(function (product) {
        return product.tag.filter(function (single) {
          return single === sortValue;
        })[0];
      });
    }

    if (sortType === "color") {
      return products.filter(function (product) {
        return product.variation && product.variation.filter(function (single) {
          return single.color === sortValue;
        })[0];
      });
    }

    if (sortType === "size") {
      return products.filter(function (product) {
        return product.variation && product.variation.filter(function (single) {
          return single.size.filter(function (single) {
            return single.name === sortValue;
          })[0];
        })[0];
      });
    }

    if (sortType === "filterSort") {
      var sortProducts = (0, _toConsumableArray2.default)(products);

      if (sortValue === "default") {
        return sortProducts;
      }

      if (sortValue === "priceHighToLow") {
        return sortProducts.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort(function (a, b) {
          return a.price - b.price;
        });
      }
    }
  }

  return products;
}; // get unique element


exports.getSortedProducts = getSortedProducts;

var getUniqueElemArray = function getUniqueElemArray(array) {
  var uniqueElemArray = array.filter(function (v, i, self) {
    return i === self.indexOf(v);
  });
  return uniqueElemArray;
}; // get unique categories


var getUniqueCategories = function getUniqueCategories(products) {
  var productCategories = [];
  products && products.map(function (product) {
    return product.category && product.category.map(function (single) {
      return productCategories.push(single);
    });
  });
  var uniqueProductCategories = getUniqueElemArray(productCategories);
  return uniqueProductCategories;
}; // get unique tags


exports.getUniqueCategories = getUniqueCategories;

var getUniqueTags = function getUniqueTags(products) {
  var productTags = [];
  products && products.map(function (product) {
    return product.tag && product.tag.map(function (single) {
      return productTags.push(single);
    });
  });
  var uniqueProductTags = getUniqueElemArray(productTags);
  return uniqueProductTags;
}; // get unique colors


exports.getUniqueTags = getUniqueTags;

var getUniqueColors = function getUniqueColors(products) {
  var productColors = [];
  products && products.map(function (product) {
    return product.variation && product.variation.map(function (single) {
      return productColors.push(single.color);
    });
  });
  var uniqueProductColors = getUniqueElemArray(productColors);
  return uniqueProductColors;
}; // get unique sizes


exports.getUniqueColors = getUniqueColors;

var getProductsUniqueSizes = function getProductsUniqueSizes(products) {
  var productSizes = [];
  products && products.map(function (product) {
    return product.variation && product.variation.map(function (single) {
      return single.size.map(function (single) {
        return productSizes.push(single.name);
      });
    });
  });
  var uniqueProductSizes = getUniqueElemArray(productSizes);
  return uniqueProductSizes;
}; // get product unique sizes


exports.getProductsUniqueSizes = getProductsUniqueSizes;

var getUniqueSizes = function getUniqueSizes(product) {
  var productSizes = [];
  product.variation && product.variation.map(function (singleVariation) {
    return singleVariation.size && singleVariation.size.map(function (singleSize) {
      return productSizes.push(singleSize.name);
    });
  });
  var uniqueProductSizes = getUniqueElemArray(productSizes);
  return uniqueProductSizes;
};

exports.getUniqueSizes = getUniqueSizes;

var setActiveSort = function setActiveSort(e) {
  var filterButtons = document.querySelectorAll(".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button");
  filterButtons.forEach(function (elem) {
    elem.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

exports.setActiveSort = setActiveSort;

var setActiveLayout = function setActiveLayout(e) {
  var gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(function (elem) {
    elem.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

exports.setActiveLayout = setActiveLayout;

var toggleShopTopFilter = function toggleShopTopFilter(e) {
  var shopTopFilterWrapper = document.querySelector("#product-filter-wrapper");
  shopTopFilterWrapper.classList.toggle("active");

  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height = shopTopFilterWrapper.scrollHeight + "px";
  }

  e.currentTarget.classList.toggle("active");
};

exports.toggleShopTopFilter = toggleShopTopFilter;