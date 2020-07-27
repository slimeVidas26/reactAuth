import React , {useContext} from 'react'
import { Link } from "react-router-dom";
import { PropertyContext } from '../../contexts/PropertyContext';



function Property() {
    const {Property} = useContext(PropertyContext);

    return (
         <div className="row">
        <div className="ui column">
            
            <div className="typo-section-sq bottom-big">
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Popular Places</h2>
                    
                    <p className="text-align-center-sq">Find the most visited places in entire world.</p>
                </div>
                
                <div className="ui grid">

                    {Property.map((property)=>{
                        const alterImage = property.image.split('/');
                        return (
                            <div className="twelve wide mobile four wide tablet four wide computer column">
                        <div className="property-item">
                            <div className="property-item-inner">
                
                               <div className="price-tag-sq">{property.price} &euro; <span>/ night</span></div>
                               <Link to = "" className="add-wishlist modal-ui-trigger" data-trigger-for="wishlist">
                                   <i className="icon icon-add-wishlist"></i>
                               </Link>
                
                                <Link to ="property_page.html"  className="image-sq">
                                    <span className="image-wrapper">
                                        <span className="image-inner">
                                            <img src={property.image} alt={alterImage[3]} className=""/>
                                        </span>
                                    </span>
                                </Link>
                
                                <div className="main-details">
                                   <div className="title-row">
                                       <Link to="property_page.html" className="title-sq">{property.title}</Link>
                                       <Link to="vendor_details.html" className="avatar-sq">
                                           <img src={property.avatar} alt=""/>
                                       </Link>
                                   </div>
                
                                   <div className="icons-row">
                                       <div className="icons-column">
                                           <i className="icon icon-heart"></i> 8.6
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-account-group-5"></i> x 4
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-door-simple"></i> x 6
                                       </div>
                                       <div className="icons-column">
                                           <i className="icon icon-bed-double"></i> x 2
                                       </div>
                                   </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                   
                        )
                    })}
                   
                   
                </div>
                
                <Link to="listing_page.html" className="more-trigger" data-more="Discover All">
                   <i className="icon icon-arrow-down-122"></i>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Property
