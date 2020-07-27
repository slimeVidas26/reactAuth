import React, { Fragment  , useEffect , useContext } from 'react'


import '../assets/images/ico/favicon.ico'
//import components
import Header from "./Header";
import HeroSearchFullPage from './HeroSearchFullPage'
import UiLayoutTop from './UiLayoutTop'
import Wishlist from './Wishlist'

import Footer from "./Footer";
import JsContextProvider, { JsContext } from '../contexts/JsContext';
import HeroSearchContextProvider from '../contexts/HeroSearchContext';
import RegisterFormHooks from './auth/RegisterFormHooks';
import AuthContextProvider from '../contexts/AuthContext';

const HomePage = ()=> {

  useEffect(()=>{
    window.onpopstate = e=>{
      console.log(e)
    }
  })
   
       
       return (
    <Fragment>
    <JsContextProvider>
      <Header/>
      <HeroSearchContextProvider>
        <HeroSearchFullPage/>
      </HeroSearchContextProvider>
      <UiLayoutTop/>
      <Wishlist/>           
      <Footer/>
    </JsContextProvider>
     

      </Fragment>
          )
    }
   
export default HomePage
