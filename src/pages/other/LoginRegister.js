import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {WebView} from 'react-native-webview';
import { View } from 'react-native';



const LoginRegister = ({ location }) => {
  const { pathname } = location;
 

 
  return (
    <Fragment>
      <MetaTags>
        <title>Hawke Vodka | Login</title>
        <meta
          name="description"
          content="Compare page of flone Hawke Prohibition Distilleries."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <WebView source={{uri: 'https://baby-x-vodka.myshopify.com/account/'}} style={{ marginTop: 20 }}/>
        </View>

        <Breadcrumb />

       
        
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};
export default LoginRegister;
