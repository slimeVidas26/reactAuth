import React , {createContext ,useState} from 'react';

//import photos
import magic_grid_photo_01 from '../assets/images/magic_grid/magic_grid_photo_01.jpg';
import magic_grid_photo_02 from '../assets/images/magic_grid/magic_grid_photo_02.jpg';
import magic_grid_photo_03 from '../assets/images/magic_grid/magic_grid_photo_03.jpg';
import magic_grid_photo_04 from '../assets/images/magic_grid/magic_grid_photo_04.jpg';

export const MagicGridContext = createContext();

const MagicGridContextProvider = (props)=> {
    const [MagicGrid , setMagicGrid] = useState([
        {title : "New Experiences" , image : magic_grid_photo_01 , verb : "Explore"},
        {title : "New Feelings" , image : magic_grid_photo_02 , verb : "Find"},
        {title : "New Stories" , image : magic_grid_photo_03 , verb : "Read"},
        {title : "New Locations" , image : magic_grid_photo_04 , verb : "View"}
    ])

        return ( 
            <MagicGridContext.Provider value ={{MagicGrid}}>
                {props.children}
            </MagicGridContext.Provider>
         );
    }

 
export default MagicGridContextProvider;