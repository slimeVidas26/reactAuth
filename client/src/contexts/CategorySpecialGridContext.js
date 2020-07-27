import React , {createContext ,useState} from 'react';

//import images
import magic_grid_category_special_01 from '../assets/images/magic_grid/magic_grid_category_special_01.png';
import magic_grid_category_special_02 from '../assets/images/magic_grid/magic_grid_category_special_02.jpg';
import magic_grid_category_special_03 from '../assets/images/magic_grid/magic_grid_category_special_03.jpg';
import magic_grid_category_special_04 from '../assets/images/magic_grid/magic_grid_category_special_04.jpg';
import magic_grid_category_special_05 from '../assets/images/magic_grid/magic_grid_category_special_05.jpg';
import magic_grid_category_special_06 from '../assets/images/magic_grid/magic_grid_category_special_06.jpg';
import magic_grid_category_special_07 from '../assets/images/magic_grid/magic_grid_category_special_07.jpg';


export const CategorySpecialGridContext = createContext();

const CategorySpecialGridContextProvider = (props)=> {
    const [CategorySpecialGrid ,setCategorySpecialGrid ] = useState([
        {image : magic_grid_category_special_01 , title : "Wildlife"},
        {image : magic_grid_category_special_02 , title : "Adventure"},
        {image : magic_grid_category_special_03 , title : "Beaches"},
        {image : magic_grid_category_special_04 , title : "Monuments"},
        {image : magic_grid_category_special_05 , title : "Food"},
        {image : magic_grid_category_special_06 , title : "Party"},
        {image : magic_grid_category_special_07 , title : "Museum"},

    ])
        return ( 
            <CategorySpecialGridContext.Provider value ={{CategorySpecialGrid}}>
                {props.children}
            </CategorySpecialGridContext.Provider>
         );
    }

 
export default CategorySpecialGridContextProvider;