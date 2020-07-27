import React, { Component , Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


 import './App.css';

  import './assets/less/base.css'
  import './assets/less/header.css'
  import './assets/less/theme.css'
  import './assets/icon/style.css'


import BecomeAvendor from './components/BecomeAvendor'
import SignUpPage from './components/auth/SignUpPage';
import ConnectPage from './components/auth/ConnectPage';
import SignInPage from './components/auth/SignInPage'
import DashboardHook from "./components/auth/DashboardHook";
import Listing1 from "./components/auth/Listing1";


import HomePage from "./components/HomePage";
import DefaultGrid from "./components/features/DefaultGrid";
import DividedContainer from "./components/features/assets/dividedContainer/DividedContainer";
import MagicGrid from "./components/features/assets/magicGrid/MagicGrid";
import UrlParameters from "./components/features/assets/router/UrlParameters";
import RegisterFormHooks from "./components/auth/RegisterFormHooks"



const App  = ()=> {


    return (

     
      
      <Router>
      <Fragment>

          <Route  exact path="/becomeavendor" component={DashboardHook} /> 
          <Route exact path="/add-listing" component={Listing1} />

          <Route exact path="/features/fts_default_grid.html" component={DefaultGrid}/>
          <Route exact path="/features/fts_divided_container.html" component={DividedContainer} />
          <Route exact path="/features/fts_magic_grid.html" component={MagicGrid} />

    <Switch>
      <Route exact path="/" component={HomePage} />

      {/*1. CLICK ON THE "SignUp" BUTTON ON THE HEADER MENU
      WILL REDIRECT TO THE SIGNUP PAGE FOR REGISTER OR SOCIAL CONNECT
      AND 
      2. THEN CLICK ON "SIGN UP WITH MAIL" */}
      <Route  path="/signup" component={SignUpPage} />
    
      <Route   path="/connect" component={ConnectPage} />
      <Route  path="/register" component={RegisterFormHooks} />
      <Route  path="/url-parameters" component={UrlParameters} />


     

    </Switch>
    <Route  path="/" component={SignInPage} />
    <Route path='/net/:handle' component={HomePage} />
    <Route exact path="/dashboardHook" component={HomePage} />

            </Fragment>
      </Router>
    
    );
  }

export default App;