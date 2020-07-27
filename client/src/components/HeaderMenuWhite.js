import React, { useContext, Fragment , useEffect } from "react";
import { Link , withRouter } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import jwt_decode from "jwt-decode";

import emma from '../assets/images/avatar/my_avatar.jpg';

const HeaderMenu = (props) =>{
    const {User ,  dispatchUser , logoutUser , socialLoginUser , socialLogoutUser} = useContext(AuthContext);
console.log("User from header menu" , User)


useEffect(()=>{
  console.log("window.location.pathname",window.location.pathname)
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
       
if (window.location.pathname==="/becomeavendor") {
  return (
    <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">

<ul className="main-menu">
     {User.isAuthenticated  ? 
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
} else {
  return (
    <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">

<ul className="main-menu">
     {User.isAuthenticated  ? 
     (
         <Fragment>
        
           <li class="has-submenu">
               <a href="" class="item">Vendor</a>
               <ul class="submenu">
                    <li><a href="my_listings.html" class="item"><span>My Listings</span></a></li>
                    <li>
                        <div class="item">
                            <a href="add_listing.html" class="button-sq small-sq fullwidth-sq"><i class="icon icon-add-1"></i><span>Add New Listing</span></a>
                        </div>
                    </li>
                </ul>
            </li>

            <li class="profile-item has-submenu">
                <Link to ="#" class="item">
                    <span>{User.user.name}</span>
                   
                   {
                     User.user.thumbnail ?
                     <img src={User.user.thumbnail} alt=""/>
                     :
                     <img src={emma} alt=""/>
                   }
                    
                </Link>
                <ul class="submenu">
                    <li><Link to ="my_profile.html" class="item"><span>My Profile</span></Link></li>
                    <li><Link to ="my_settings.html" class="item"><span>Account Settings</span></Link></li>
                    <li>
                    	<hr/>
                    </li>
                    <li><Link to ="#" class="item"><span>Log Out</span></Link></li>
                </ul>
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
       
    }
    

export default withRouter(HeaderMenu)


