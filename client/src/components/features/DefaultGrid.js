import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Sidebar from './assets/elements/Sidebar'
import Header from './assets/elements/header/Header'
import {Link} from 'react-router-dom'


class DefaultGrid extends Component {

    constructor(props) {
        super(props)
        console.log(this.props)
        console.log('defaultGrid')

    
        this.state = {
             
        }
    }
    

    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'no-transition dashboard-sq';

        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "https://some-scripturl.js";
        // this.div.appendChild(script);
    }
    render(){

        return (
            <React.Fragment>
                  {/* <!-- for background color & freeze on sidemenu visible --> */}
     
     {/* <!--DEFAULT HEADER--> */}
     
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
                                         <h2>Default Grid</h2>
                                         
                                         <p className="definition-sq"><strong>Default Grid</strong> is actually the grid from <Link to ="https://semantic-ui.com/collections/grid.html" target="_blank">semantic UI</Link>.</p>
                                         <br/>
                                         <p>You can see here all the details on how to use the semantic UI grid by <Link to ="https://semantic-ui.com/collections/grid.html" target="_blank">clicking here</Link>.</p>
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
     </React.Fragment>
      )

    }
   
   
}

export default withRouter(DefaultGrid)
