import React , {createContext ,useState} from 'react';

//import images
import  hero_big_28  from "../assets/images/hero/hero_big_28.jpg";
import  hero_big_29  from "../assets/images/hero/hero_big_29.jpg";
import  hero_big_30  from "../assets/images/hero/hero_big_30.jpg";
import  hero_big_31  from "../assets/images/hero/hero_big_31.jpg";
import  hero_big_32  from "../assets/images/hero/hero_big_32.jpg";

export const HeroSearchContext = createContext();

const HeroSearchContextProvider = (props)=> {
    const [Heroes , setHeroImages] = useState([
        {title : "New Experiences" , image : hero_big_28 , verb : "Explore"},
        {title : "New Feelings" , image : hero_big_29 , verb : "Find"},
        {title : "New Stories" , image : hero_big_30 , verb : "Read"},
        {title : "New Locations" , image : hero_big_31 , verb : "View"},
        {title : "New Challenge" , image : hero_big_32 , verb : "Travel"}
    ])

        return ( 
            <HeroSearchContext.Provider value ={{Heroes}}>
                {props.children}
            </HeroSearchContext.Provider>
         );
    }

 
export default HeroSearchContextProvider;