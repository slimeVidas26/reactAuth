import React , { Fragment} from 'react';
import FormActions from '../layout/FormActions'
import { Route } from "react-router-dom";
import { withRouter} from "react-router-dom";
import RegisterModal from './RegisterModal'
import AuthContextProvider from '../../contexts/AuthContext';


const RegisterFormHooks  = (props) => {

    let params = new URLSearchParams(props.location.search);
    return ( 
         <Fragment>
              <Route render={() => {
            return (
                params.get("mail") && (
                    <AuthContextProvider>
                    <RegisterModal/>
                    </AuthContextProvider>
              
                )
            );
          }}
        />

 <FormActions>Log In</FormActions>
</Fragment>    
     );
}
export default withRouter(RegisterFormHooks) ;