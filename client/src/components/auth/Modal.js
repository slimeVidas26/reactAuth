import React, { Component } from "react";
import { createPortal } from "react-dom";
import {withRouter} from 'react-router-dom'


import modal_background_001 from '../../assets/images/modal/modal_background_001.jpg';


const modalStyle = {
  display: "block !important"
};

const modalStyle1 = {
  top: "0px",
   display: "block !important"
}

 


 class Modal extends Component {

  // test = ()=>{
  //    this.props.history.push("/");
  //   console.log(this.props.match.url)
  // }


  render() {
    return createPortal(
      <div  className="ui dimmer modals page full transition visible active" style={modalStyle}>
  <div className="ui full modal transition visible active scrolling" data-for="modal02" style= {modalStyle1}>

  <div className="modal-full-background">
         <img src={modal_background_001} alt="modal_background_001.jpg"/>
     </div>

     <i onClick={this.props.onClick} className="icon icon-close close-modal"></i>
        
        {this.props.children}
      </div>
      </div>,
      document.getElementById("modal_root"),
      
    );
  }
}

export default withRouter(Modal)
