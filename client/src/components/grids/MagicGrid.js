import React , {useContext} from 'react'
import { Link } from "react-router-dom";
import { MagicGridContext } from '../../contexts/MagicGridContext';




function MagicGrid() {

    const {MagicGrid} = useContext(MagicGridContext);

    const dataLabelAfter = "Book a home in";

    return (
         <div className="row">
        <div className="ui twelve wide computer column">
            <div className="typo-section-sq bottom-big">
                
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Top Cities to visit</h2>
                    <p className="text-align-center-sq">Discover awesome experiences around the world.</p>
                </div>
                
                <div className="magic-grid photo-sq hover-default hover-center">

                {MagicGrid.map((magic)=>{
                 const alterImage = magic.image.split('/');
                 return (
                   <div className="item">
                        <div className="item-inner">

                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={magic.image} alt={alterImage[3]}/>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- typography container--> */}
                            <Link to="/listing-page" className="typo-sq">
                                <span className="typo-whitespace"></span>
                                <p className="typo-label-sq" data-label-before={magic.country} data-label-after={dataLabelAfter}></p>
                                <p className="typo-title-sq">{magic.title}</p>
                            </Link>

                        </div>
                    </div>

                 )
                })}


                   
                </div>
                
                <Link to = "listing_page.html" className="more-trigger" data-more="See All">
                   <i className="icon icon-arrow-down-122"></i>
                </Link>
            </div>
            
        </div>
        
        
        
    </div>
    )
}

export default MagicGrid
