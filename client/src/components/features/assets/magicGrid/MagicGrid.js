import React, { Component  , Fragment} from 'react'
import Sidebar from '../elements/Sidebar'
import Header from '../elements/header/Header'
// import { Link } from "react-router-dom";

import Definition from './Definition'
import DefaultStyle from './DefaultStyle'
import PhotoStyle from './PhotoStyle'
import CategoryStyle from './CategoryStyle'
import ArticleStyle from './ArticleStyle'



import '../../assets/library/highlight.css'






 class MagiGrid extends Component {

    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'no-transition dashboard-sq';

        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "https://some-scripturl.js";
        // this.div.appendChild(script);
    }
    render() {
        return (
           
<Fragment>
<header className="header-section ths header-shadow equal-tablet-header-items equal-mobile-header-items header-sticky header-slide-up">
    <div className="header-content">

        <div className="ui container grid">
         <Header/>
        </div>
        
    </div>    
</header>
 
   <div className="ui layout">
       
        {/* <!-- grid --> */}
        <div className="ui grid container">
           
            <div className="row">
               
              {/* sidebar component */}
              <Sidebar/>
               <div className="ui twelve wide tablet nine wide computer nine wide widescreen nine wide large screen column">
                   <div className="ui grid">
                       <div className="row">
                         
                           <div className="ui twelve wide computer grey column">
                              <div className="ui grid">
                                  <div className="row">
                                   
                                    <div className="ui twelve wide computer column">
                                        <div className="typo-section-sq top-default bottom-default">
                                          <Definition/>
                                            <hr className="padded-sq"/>
                                            
                                           <DefaultStyle/>
                                            
                                            <hr className="padded-sq"/>
                                            
                                            <PhotoStyle/>
                                                   
                                            <hr className="padded-sq"/>
                                            
                                          <CategoryStyle/>
                                            
                                            <hr className="padded-sq"/>
                                           <ArticleStyle/>
                                            
                                            <hr className="padded-sq"/>
                                       </div>
                                        

                                            
                                    </div>
                                                   
                                    
                                  </div>
                              </div>
                           </div>
                    </div>
                   </div>
               </div>
               
               
            </div>
        </div>
        
        </div>        

   </Fragment> 
       
        )
    }
}

export default MagiGrid
