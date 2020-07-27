import React  ,{useContext} from 'react'
import { Link } from "react-router-dom";
import { CategorySpecialGridContext } from '../../contexts/CategorySpecialGridContext';






function MagicGridCategorySpecial() {
    const {CategorySpecialGrid} = useContext(CategorySpecialGridContext);

    return (
        <div className="row">
        <div className="ui column">
            <div className="typo-section-sq bottom-big">
            
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">Top Interest</h2>
                    <p className="text-align-center-sq">In hac habitasse platea dictumst. Integer quis tortor enim. Integer et elit nec magna ultricies convallis. <br/> In venenatis eu erat et facilisis. Vestibulum congue enim nisl.</p>
                </div>
                
                <div className="magic-grid category-sq special-sq hover-scale">
                    {CategorySpecialGrid.map((mgcs)=>{
                        const alterImage = mgcs.image.split('/');
                    return (
                        <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <div className="image-sq">
                                <div className="image-wrapper">
                                    <div className="image-inner">
                                        <img className="image-sq" src={mgcs.image} alt={alterImage[3]}/>
                
                                    </div>
                                </div>
                            </div>
                
                            {/* <!-- typography container--> */}
                            <Link to="article_listing.html" className="typo-sq">
                                <p className="typo-title-sq">{mgcs.title}</p>
                            </Link>
                
                        </div>
                    </div>
                   
                    )
                    })}
                 
                </div>
            </div>
            
            <hr/>
           
            
        </div>
    </div>
    )
}

export default MagicGridCategorySpecial
