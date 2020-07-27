import React , {useContext} from 'react'
import { Link } from "react-router-dom";
import { MagicGridArticleContext } from '../../contexts/MagicGridArticleContext';




function MagicGridArticle() {
    const {MagicGridArticle} = useContext(MagicGridArticleContext);

    return (
          <div className="row">
        <div className="ui column">
          <div className="typo-section-sq bottom-big">	
                <div className="typo-section-header-sq">
                    <h2 className="text-align-center-sq">News</h2>
                    <p className="text-align-center-sq"> Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim.</p>
                </div>
                
                
                <div className="magic-grid article-sq hover-scale">
                {MagicGridArticle.map((mga)=>{
                const alterImage = mga.image.split('/');
                  return (
                    <div className="item">
                        <div className="item-inner">
                
                            {/* <!-- image container --> */}
                            <Link to ="article.html" className="image-sq" >
                                <span className="image-wrapper">
                                    <span className="image-inner">
                                        <img className="image-sq" src={mga.image} alt={alterImage[3]}/>
                                    </span>
                                </span>
                            </Link>
                
                            {/* <!-- typography container--> */}
                            <div className="typo-sq">
                                <p className="typo-label-sq" data-label-before="Travel" data-label-after="Book a home in"></p>
                                <p className="typo-title-sq">{mga.title}</p>
                                <p className="typo-desc-sq">{mga.desc}</p>
                
                                <Link to="article.html" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
                            </div>
                        </div>
                    </div>
                   
                  )
                })}
                   
                </div>
                
                <Link to="article_listing.html" className="more-trigger" data-more="View More">
                   <i className="icon icon-arrow-down-122"></i>
                </Link>
            </div>
            </div>
    </div>
    )
}

export default MagicGridArticle
