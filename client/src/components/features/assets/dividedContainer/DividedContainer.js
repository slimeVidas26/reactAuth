import React, { Component  , Fragment} from "react";
//import { Link } from "react-router-dom";
import Sidebar from '../elements/Sidebar'
import Header from '../elements/header/Header'



// import '../../assets/less/base.css'
// import '../../assets/less/header.css'
// import '../../assets/less/theme.css'
//  import '../../assets/icon/style.css'
import '../../assets/library/highlight.css'
import GeneralInfos from "./GeneralInfos";
import Columns from './Columns'
import OneLabelOptions from './OneLabelOptions'
import NoPaddingOptions from './NoPaddingOptions'
import BorderOptions from './BorderOptions'
import Definition from './Definition'


class DividedContainer extends Component {

   

    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'no-transition dashboard-sq';

        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "https://some-scripturl.js";
        // this.div.appendChild(script);
    }
    
    // componentWillUnmount() {
    //     document.getElementsByTagName('body')[0].className = '';
    // }

    render(){

       
        return (
          <Fragment>
               
                {/* <!-- for background color & freeze on sidemenu visible --> */}
    
    {/* <!--DEFAULT HEADER--> */}
    
    <header className="header-section ths header-shadow equal-tablet-header-items equal-mobile-header-items header-sticky header-slide-up">
    <div className="header-content">
    
    <div className="ui container grid">
        {/* Header component */}
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

                                        <Definition name = "Divided Container"/>
                                        <hr className="padded-sq"/>  

                                        <GeneralInfos/>
                                        <hr className="padded-sq"/>
                                        
                                       <Columns/>
                                      <hr className="padded-sq"/>
                                       
                                       <OneLabelOptions/>   
                                       <hr className="padded-sq"/>
                                       
                                     <NoPaddingOptions/>
                                    <hr className="padded-sq"/>
                                               
                                       <BorderOptions/> 
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
    
    {/* <!--end #page-wrapper--> */}
    
    </Fragment>
        )

    }

    }

    


export default DividedContainer
