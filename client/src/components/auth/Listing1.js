import React from 'react';
import AuthContextProvider from '../../contexts/AuthContext';
import AddListing from '../AddListing';


const Listing1 = () => {

    return ( 
        
    <AuthContextProvider>
        <AddListing/>
    </AuthContextProvider>
     );
}
 
export default Listing1;