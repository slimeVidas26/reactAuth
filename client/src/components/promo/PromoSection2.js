import React from 'react'
import { Link } from "react-router-dom";
import  promo_section_02  from "../../assets/images/promo_section/promo_section_02.jpg";


function PromoSection2() {
    return (
         <div className="ui container grid centered">
        <div className="row">
            <div className="ui twelve wide mobile ten wide tablet eight wide computer six wide large screen six wide widescreen column">
                <div className="promo-content style-02">
                    <h2>Beautiful Experiences</h2>
                    <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                    
                    <Link to="listing_page.html" className="button-sq see-through-sq"> See Map </Link>
                </div>

            </div>
        </div>   
        <div className="image-wrapper">
        <div className="image-inner">
            <img className="image-sq" src={promo_section_02} alt=""/>
        </div>
    </div>    
    </div>
    )
}

export default PromoSection2
