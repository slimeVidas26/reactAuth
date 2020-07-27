import React from 'react'
import { Link } from "react-router-dom";

import  promo_section_01  from "../../assets/images/promo_section/promo_section_01.jpg";



function PromoSection1() {
    return (
       <div className="ui container grid centered">
        <div className="row">
            <div className="ui twelve wide mobile ten wide tablet eight wide computer six wide large screen six wide widescreen column">
                <div className="promo-content style-01">
                    <h2>Explore the world</h2>
                    <p>Spectacular natural wonders and astonishing man-made structures. The list of great landmarks are often limited to seven, but the world is filled with wonders.</p>
                    
                    <Link to="listing_page.html" className="button-sq see-through-sq"> See Map </Link>
                </div>

            </div>
        </div> 
        <div className="image-wrapper">
        <div className="image-inner">
            <img className="image-sq" src={promo_section_01} alt=""/>
        </div>
    </div>   
    </div>
    )
}

export default PromoSection1
