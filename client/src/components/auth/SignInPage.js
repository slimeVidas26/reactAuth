import React from "react";

import SignInModal from "./SignInModal"
import AuthContextProvider from "../../contexts/AuthContext";

 const SignInPage = (props)=> {

  

    //  let params = new URLSearchParams(this.props.location.search);
    let params = new URLSearchParams(props.location.search);
    return (
        params.get("signin") && (
          <AuthContextProvider>
          <SignInModal />
          </AuthContextProvider>
      
      )
     );
  }


export default SignInPage;


