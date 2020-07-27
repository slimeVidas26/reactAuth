import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class FormActions extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             signupPath : ""
        }
    }

    redirectFunction = ()=>{

        if (window.location.href.indexOf("login") > -1) {
            this.setState({
                signupPath : "/signup"
            } , ()=>{
                this.props.history.push(this.state.signupPath) 
    
            })
          }
          else{

            this.setState({
                signupPath : "/?login=true"
            } , ()=>{
                this.props.history.push(this.state.signupPath) 
    
            })

          }
        

      
    }

    
    render(){
    

        return (
            <div className="actions">
              <div className="border-container">
                  <div className="button-sq link-sq modal-ui-trigger">Don’t have an account?</div>
         
                  {/* <div  onClick={() => {this.props.history.push("signup") }}  */}
                  <div  onClick={this.redirectFunction} 
                      className="button-sq link-sq login-sq modal-ui-trigger">
                      {/* Sign Up */}
                      {this.props.children}
                      <i className="icon icon-person-add-1"></i>
                  </div>
              </div>
          </div>
         )
    }
   
}

export default withRouter(FormActions)
