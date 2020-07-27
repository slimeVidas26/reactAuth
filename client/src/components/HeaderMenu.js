import React, { useContext, Fragment , useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import jwt_decode from "jwt-decode";


const HeaderMenu = () =>{
    const {User ,  dispatchUser , logoutUser , socialLoginUser , socialLogoutUser} = useContext(AuthContext);
console.log("User from header menu" , User)


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
            <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">
    
    <ul className="main-menu">
    

             {User.isAuthenticated ? 
             (
                 <Fragment>
                 <li><Link to="/" className="item">
                <span>{User.user.name}</span>
            </Link>
                </li>
                 <li><Link to="/becomeavendor" className="item">
                <span>Become a Vendor</span>
            </Link>
               </li>
               {User.user.exp ?
                <li>
            <Link onClick = {logoutUser} className="item">
            <span>Sign Out</span>
            </Link>
            </li>
            :
            <li>
            <Link onClick = {socialLogoutUser} className="item">
            <span>Sign social Out</span>
            </Link>
            </li>
               }
            
            
                 </Fragment>
               
             )
             :
             (
                 <Fragment>
                 <li><Link to="/connect" className="item">
                <span>Become a Vendor</span>
            </Link>
               </li>
                 <li>
            <Link to={{ pathname: "/", search: "signin=true" }} className="item">
            <span>Sign In</span>
            </Link>
            </li> 
            <li>
             <Link to="/connect" className="item">
                <span>Connect</span>
            </Link>
           </li>
                 </Fragment>
                
             )
             } 
            

           
    </ul>
    </div>
    
        )
    }
    

export default HeaderMenu


