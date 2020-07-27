import React from 'react';
import Modal from "./Modal";
import FormTitle from '../layout/FormTitle'
import FormActions from '../layout/FormActions'
import SignInForm from './SignInForm'
import AuthContextProvider from '../../contexts/AuthContext';
import {withRouter} from 'react-router-dom'

const SignInModal = (props) => {
    return ( 
        <Modal
        onClick={() => {
            props.history.push(props.location.pathname);
            
          }}>
         {/* FORM TITLE */}
         <FormTitle> Sign In </FormTitle>
          <AuthContextProvider>
          <SignInForm/>
          </AuthContextProvider>
     {/* FORM ACTION */}
      <FormActions>Sign Up</FormActions>
        </Modal>
     );
}
 
export default withRouter(SignInModal);
