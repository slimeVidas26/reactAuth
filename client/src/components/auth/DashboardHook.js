import React from 'react';
import AuthContextProvider from '../../contexts/AuthContext';
import BecomeAvendor from '../BecomeAvendor';


const DashboardHook = () => {

    return ( 
        
    <AuthContextProvider>
        <BecomeAvendor/>
    </AuthContextProvider>
     );
}
 
export default DashboardHook;