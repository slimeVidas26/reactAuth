import React, {useEffect } from 'react'
import Modal from './Modal'
import FormActions from '../layout/FormActions'
import FormTitle from '../layout/FormTitle'
import SignUpWith from '../layout/SignUpWith'
import RegisterModal from './RegisterModal'
import icon_google_plus from '../../assets/images/icon-google-plus.svg';
import SignUpContextProvider  from '../../contexts/SignUpContext'
import AuthContextProvider  from '../../contexts/AuthContext'



 const ConnectPage = ()=> {

    
  useEffect(()=>{
    window.onpopstate = e => {
      window.location.href = "/";
    }
  } , []) 
    
        return (
             <Modal
             onClick={() => {
            window.location.href = "/";
          }} >

            {/* FORM TITLE */}
              <FormTitle> Connect Now </FormTitle>

        <div className="content">
      <SignUpContextProvider>
      <SignUpWith/>
      </SignUpContextProvider>
     
      
       
      
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus magna vel ex semper, in pharetra justo pulvinar. </p>
    </div>  
               {/* FORM REGISTER */}
            <AuthContextProvider >
            <RegisterModal/>

            </AuthContextProvider>
            

            <FormActions>Log In</FormActions>
            </Modal>
            
            )
    }   

export default ConnectPage

