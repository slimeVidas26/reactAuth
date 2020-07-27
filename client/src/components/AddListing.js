import React, { useEffect , Fragment , useContext } from 'react'
import JsContextProvider from '../contexts/JsContext';
import HeaderWhite from './HeaderWhite';
import AuthContextProvider, { AuthContext } from '../contexts/AuthContext';
import jwt_decode from "jwt-decode";


import '../assets/less/base.css'
import '../assets/less/header.css'
import '../assets/less/theme.css'
import '../assets/icon/style.css'

const Addlisting = () =>{
    const {User , dispatchUser , socialLoginUser} =  useContext(AuthContext)

    useEffect(()=>{
        const decoded = localStorage.jwtToken ? localStorage.jwtToken : "";
    
      if(decoded){
        
        dispatchUser({
          type : "SET_CURRENT_USER" ,
          payload :  jwt_decode(decoded) 
        }) 
        console.log("jwt_decode(decoded)" , jwt_decode(decoded))
      }
      else { 
    
        socialLoginUser()
    
      }
       
    },[])

    return (
        <Fragment>
        <JsContextProvider>
            <HeaderWhite/>
            </JsContextProvider>

        <div class="add-listing-content">
            <div class="ui centered grid container">
                <div class="row">
                    <div class="ui six wide computer twelve wide tablet column">
                        <h3 class="text-align-center-sq block-sq title-sq">Add Listing</h3>
                        
                        <p class="description-sq text-align-center-sq">Choose the type of your listing and follow the steps to complete your listing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        
                        <div class="text-align-center-sq">
                            <select class="dropdown">
                                <option value="0">Shop</option>
                                <option value="1">BNB</option>
                                <option value="2">Car</option>
                                <option value="2">Restaurant</option>
                            </select>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="add-listing-footer">
           <div class="ui grid container">
               <div class="row">
                   <div class="ui column">
                       <a class="button-sq link-sq" href="vendor_login.html">
                           <span>skip this step</span>
                           <i class="icon icon-slim-arrow-right"></i>
                       </a>
                       
                           
                       <a class="button-sq next-sq" href="add_listing_the_space.html"><i class="icon icon-slim-arrow-right"></i></a>
                   </div>
               </div>
           </div>
        </div>
        </Fragment>
         
    )
}

export default Addlisting
