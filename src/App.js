import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// home pages
import HomeElectronics from "./pages/home/HomeElectronics";


// shop pages
import ShopListStandard from "./pages/shop/ShopListStandard";

// product pages
import ProductFixedImage from "./pages/shop-product/ProductFixedImage";
import Friend from "./pages/other/Friend";
import Tech from "./pages/other/TechServices";
import Web from "./pages/other/web";
import Wholesale from "./pages/other/Whole";

// other pages
import About from "./pages/other/About";
import Contact from "./pages/other/Contact";
import MyAccount from "./pages/other/MyAccount";
import LoginRegister from "./pages/other/LoginRegister";
import Recipes from "./pages/other/Recipes";
import Cart from "./pages/other/Cart";
import Wishlist from "./pages/other/Wishlist";
import Compare from "./pages/other/Compare";
import Checkout from "./pages/other/Checkout";
import Silk from "./pages/other/silk";

import NotFound from "./pages/other/NotFound";


const App = props => {
  
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json")
        }
      })
    );
  });


  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>

            
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={HomeElectronics}
              />
             
              {/* Shop pages */}
              <Route
                path={process.env.PUBLIC_URL + "/shop"}
                component={ShopListStandard}
              />

              {/* Shop product pages */}
              <Route
                path={process.env.PUBLIC_URL + "/product/:id"}
                component={ProductFixedImage}
              />


              {/* Other pages */}
              <Route
                path={process.env.PUBLIC_URL + "/about"}
                component={About}
              />

              <Route
                path={process.env.PUBLIC_URL + "/wholesale"}
                component={Wholesale}
              />

              <Route
                path={process.env.PUBLIC_URL + "/contact"}
                component={Contact}
              />
              <Route
                path={process.env.PUBLIC_URL + "/my-account"}
                component={MyAccount}
              />
              <Route
                path={process.env.PUBLIC_URL + "/login-register"}
                component={LoginRegister}
              />

              <Route
                path={process.env.PUBLIC_URL + "/silk"}
                component={Silk}
              />

              <Route 
                path={process.env.PUBLIC_URL + "/cart"} 
                component={Cart}
               />

              <Route 
                path={process.env.PUBLIC_URL + "/friend"} 
                component={Friend}
               />

               
              <Route 
                path={process.env.PUBLIC_URL + "/web"} 
                component={Web}
               />

                <Route 
                path={process.env.PUBLIC_URL + "/tech"} 
                component={Tech}
               />


              <Route 
                path={process.env.PUBLIC_URL + "/recipes"} 
                component={Recipes}
               />

              <Route
                path={process.env.PUBLIC_URL + "/wishlist"}
                component={Wishlist}
              />
              <Route
                path={process.env.PUBLIC_URL + "/compare"}
                component={Compare}
              />
              <Route
                path={process.env.PUBLIC_URL + "/checkout"}
                component={Checkout}
              />

              <Route
                path={process.env.PUBLIC_URL + "/not-found"}
                component={NotFound}
              />

              <Route exact component={NotFound} />
            
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
