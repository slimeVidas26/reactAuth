import React , {createContext ,useState} from 'react';

//import images
import property_little_01 from '../assets/images/property/property_little_01.jpg'
import property_little_02 from '../assets/images/property/property_little_02.jpg'
import property_little_03 from '../assets/images/property/property_little_03.jpg'
import property_little_04 from '../assets/images/property/property_little_04.jpg'
import property_little_05 from '../assets/images/property/property_little_05.jpg'
import property_little_06 from '../assets/images/property/property_little_06.jpg'

import avatar_01 from '../assets/images/avatar/avatar_01.jpg'
import avatar_02 from '../assets/images/avatar/avatar_02.jpg'
import avatar_03 from '../assets/images/avatar/avatar_03.jpg'
import avatar_04 from '../assets/images/avatar/avatar_04.jpg'
import avatar_05 from '../assets/images/avatar/avatar_05.jpg'
import avatar_06 from '../assets/images/avatar/avatar_06.jpg'


export const PropertyContext = createContext();

const PropertyContextProvider = (props)=> {
    const [Property , setProperty] = useState([
        {price : 112 , image : property_little_01 ,title : "Downtown Sweet House" , avatar : avatar_01 },
        {price : 78 , image : property_little_02 ,title : "Large and confortable double room" , avatar : avatar_02 },
        {price : 51 , image : property_little_03 ,title : "Modern studio flat with garden" , avatar : avatar_03 },
        {price : 250 , image : property_little_04 ,title : "Bright clear room close to Brixton" , avatar : avatar_04 },
        {price : 125 , image : property_little_05 ,title : "Romantic suite in family home" , avatar : avatar_05 },
        {price : 95 , image : property_little_06 ,title : "Quit and bright room in the heart of amsterdam" , avatar : avatar_06 },

    ])
        return ( 
            <PropertyContext.Provider value ={{Property}}>
                {props.children}
            </PropertyContext.Provider>
         );
    }

 
export default PropertyContextProvider;