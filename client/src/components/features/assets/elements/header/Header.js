import React, { Component , Fragment } from 'react'
import { Link } from "react-router-dom";
import Logo from './Logo'



 class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = [
               {
                 url : "https://seventhqueen.com/themes/mybiz-html/mybnb",
                 item : "myBnb" 
               },
               {
                url : "https://seventhqueen.com/themes/mybiz-html/myboat/homepage.html",
                item : "myBoat" 
              }, 
              {
                url : "https://seventhqueen.com/themes/mybiz-html/mycar/homepage.html",
                item : "myCar"
              },
              {
                url : "https://seventhqueen.com/themes/mybiz-html/myhotel/homepage.html",
                item : "myHotel" 
              },
              {
                url : "https://seventhqueen.com/themes/mybiz-html/mytent/homepage.html",
                item : "myTent" 
              },

        ]


     
             
        }

    
    
    render() {
     const myBizArray = this.state.map((elem)=>{
         return  (<li><Link to={elem.url} class="item">
                   <span>{elem.item}</span>
                </Link>
               </li>)
     })



        return (
              <Fragment>
            <div className="header-item header-left flex-order-tablet-second flex-order-mobile-second flex-grow-tablet-true flex-grow-mobile-true">
             <Logo/>
            
                 </div>
             
                 <div className="header-item header-center flex-align-left flex-order-tablet-first flex-order-mobile-first flex-grow-large-desktop-true flex-grow-desktop-true flex-grow-tablet-false flex-grow-mobile-false"></div>
                 
                    <div className="header-item header-right flex-order-tablet-third flex-order-mobile-third flex-shrink-true flex-align-right">
                     
                      {/* <!-- Sidemenu Trigger --> */}
                     <a className="sidemenu-trigger close-sq hamburger hamburger-spin item hidden-desktop hidden-large-desktop" data-trigger-for="menu01">
                        
                         {/* <!--<i className="icon icon-navigation-show-more-22"></i>--> */}
                         <span className="hamburger-box">
                           <span className="hamburger-inner"></span>
                         </span>
                     </a>
                   
                     {/* <!-- Include Menu --> */}
                     {/* <!-- Header Menu--> */}
                     
             <div className="item menu-default burger-mobile-sidemenu burger-tablet-sidemenu sidemenu-open-right icons-left profile-priority slide-out-sq dimmed flexMenu dropdown-open-right" data-burger="menu01">
             
             <ul className="main-menu">
            
            {myBizArray}
            
                   
             </ul>
             </div>
             
             {/* <!-- End of Header Menu--> */}
                     
                 </div>
                 </Fragment>
        )
    }
}

export default Header
