import React from 'react'
import { Link } from "react-router-dom";


import logo_mybnb_transparent from '../../../assets/images/logo-mybnb-transparent.png';
import logo_mybnb_transparent2x from '../../../assets/images/logo-mybnb-transparent@2x.png';
import logo_mybnb from '../../../assets/images/logo-mybnb.png';
import logo_mybnb2x from '../../../assets/images/logo-mybnb@2x.png';

function Logo() {

   
    return (
       <Link to="" className="logo item">
             <img   src={logo_mybnb_transparent} srcSet={`${logo_mybnb_transparent} 1x ,${logo_mybnb_transparent2x} 2x `} alt="mybnb logo" className="logo-transparent"/>
             <img  src={logo_mybnb} srcSet= {`${logo_mybnb} 1x , ${logo_mybnb2x} 2x`} alt="mybnb logo"/>
             <span className="item">features</span>
             
             </Link>
    )
}

export default Logo
