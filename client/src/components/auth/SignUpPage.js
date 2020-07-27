import React, { Component } from 'react'
import Modal from './Modal'
import FormActions from '../layout/FormActions'
import FormTitle from '../layout/FormTitle'
import SignUpWith from '../layout/SignUpWith'


// NEXT STEP : SignUpWith COMPONENT


//import images
import icon_google_plus from '../../assets/images/icon-google-plus.svg';
import AuthContextProvider from '../../contexts/AuthContext'


 class SignUpPage extends Component {

    constructor(props) {
        super(props);
        // console.log(this.props.history + ' from signUpWithMail') 
      }

    render(){
        return (
             <Modal
             onClick={() => {
            window.location.href = "/";
          }} >

            {/* FORM TITLE */}
              <FormTitle> Sign Up Now </FormTitle>

        <div className="content">
          <SignUpWith/>
       
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
    </div>  
               {/* FORM REGISTER */}
            {/* <RegisterForm/> */}
            <FormActions>Log In</FormActions>
            </Modal>
            )
    }   
}
export default SignUpPage

