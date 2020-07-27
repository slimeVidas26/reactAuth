import React  , {Fragment, Component} from 'react'
import { Link } from "react-router-dom";


//article
import magic_grid_article_01 from '../../assets/images/magic_grid/magic_grid_article_01.jpg';
import magic_grid_article_02 from '../../assets/images/magic_grid/magic_grid_article_02.jpg';
import magic_grid_article_03 from '../../assets/images/magic_grid/magic_grid_article_03.jpg';
import magic_grid_article_04 from '../../assets/images/magic_grid/magic_grid_article_04.jpg';
import magic_grid_article_05 from '../../assets/images/magic_grid/magic_grid_article_05.jpg';
import magic_grid_article_06 from '../../assets/images/magic_grid/magic_grid_article_06.jpg';
// import magic_grid_article_07 from './assets/images/magic_grid/magic_grid_article_07.jpg';

import magic_grid_article_responsive from '../../assets/images/magic_grid/magic_grid_article_responsive.jpg';

class ArticleStyle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             articleStyleArray : [
                 {
                     imageSq : magic_grid_article_01,
                     label : "Travel",
                     title : "Getting Cheap Airfare For Last Minute Travel",
                     desc : "Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim."
                 },
                 {
                    imageSq : magic_grid_article_02,
                    label : "Beauty",
                    title : "10 Steps To Look Younger",
                    desc : "Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim."
                },
                {
                    imageSq : magic_grid_article_03,
                    label : "Cooking",
                    title : "The Benefits And Drawbacks Of Buying Designer Kitchenware Products",
                    desc : "Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim."
                },
                {
                    imageSq : magic_grid_article_04,
                    label : "Advertising",
                    title : "Enhance Your Brand Potential With Giant Advertising Blimps",
                    desc : "Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim."
                },
                {
                    imageSq : magic_grid_article_05,
                    label : "Motivation",
                    title : "Counting Your Chicken Before They Hatch",
                    desc : "Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim."
                },
                {
                    imageSq : magic_grid_article_06,
                    label : "Architecture",
                    title : "Tesla to Build Three More Gigafactories",
                    desc : "Nunc sit amet velit nibh. Proin consectetur, ante quis tristique mattis, massa massa condimentum enim."
                },
                 

             ]
        }
    }
    
    render(){
        const articleStyle = this.state.articleStyleArray.map((elem)=>{
         return (
        <div className="item">
            <div className="item-inner">
    
                {/* <!-- image container --> */}
                <Link to="#" className="image-sq">
                    <span className="image-wrapper">
                        <span className="image-inner">
                            <img className="image-sq" src={elem.imageSq} alt=""/>
                        </span>
                    </span>
                </Link>
    
                {/* <!-- typography container--> */}
                <div className="typo-sq">
                   <span className="typo-whitespace"></span>
                    <p className="typo-label-sq" data-label-before={elem.label} data-label-after="Book a home in"></p>
                    <p className="typo-title-sq">{elem.title}</p>
                    <p className="typo-desc-sq">{elem.desc}</p>
    
                    <Link to ="" className="read-more-sq">read more <i className="icon icon-arrow-right-122"></i></Link>
                </div>
    
            </div>
        </div>     
         )
        })
        return (
            <Fragment>
            <h3>Article Style</h3>
    
    <p>By adding the <strong>.article-sq</strong> className, the grid will look like this:</p>
    
    
    <div className="magic-grid article-sq hover-scale">
    
       {articleStyle}
      
    
    </div>
    
    
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">article-sq</mark> hover-scale&quot;&gt;
    &lt;div className=&quot;item&quot;&gt;
    &lt;div className=&quot;item-inner&quot;&gt;
    &lt;!-- image container --&gt;
    &lt;a className=&quot;image-sq&quot; href=&quot;#&quot;&gt;
    &lt;span className=&quot;image-wrapper&quot;&gt;
    &lt;span className=&quot;image-inner&quot;&gt;
    &lt;img className=&quot;image-sq&quot; src=&quot;assets/images/magic_grid/magic_grid_article_01.jpg&quot; alt=&quot;&quot;&gt;
    &lt;/span&gt;
    &lt;/span&gt;
    &lt;/a&gt;
    &lt;!-- typography container--&gt;
    &lt;div className=&quot;typo-sq&quot;&gt;
    &lt;span className=&quot;typo-whitespace&quot;&gt;&lt;/span&gt;
    &lt;p className=&quot;typo-label-sq&quot; data-label-before=&quot;Travel&quot; data-label-after=&quot;Book a home in&quot;&gt;&lt;/p&gt;
    &lt;p className=&quot;typo-title-sq&quot;&gt;Getting Cheap Airfare For Last Minute Travel&lt;/p&gt;
    &lt;p className=&quot;typo-desc-sq&quot;&gt;Nunc sit amet velit nibh...&lt;/p&gt;
    &lt;Link to =&quot;&quot; className=&quot;read-more-sq&quot;&gt;read more &lt;i className=&quot;icon icon-arrow-right-122&quot;&gt;&lt;/i&gt;&lt;/a&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;/div&gt;
    &lt;div className=&quot;item&quot;&gt; ... &lt;/div&gt;
    ....
    &lt;/div&gt;</code></pre>
    
    <br/>
    <h4>Responsive Behavior</h4>                                         
    <img src={magic_grid_article_responsive} alt=""/>                                          
            </Fragment>
        )
    }
   
}

export default ArticleStyle
