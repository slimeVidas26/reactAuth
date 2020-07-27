import React , {Fragment, Component} from 'react'
import { Link } from "react-router-dom";


import magic_grid_photo_responsive from '../../assets/images/magic_grid/magic_grid_photo_responsive.jpg';

 
 //category
 import magic_grid_category_01 from '../../assets/images/magic_grid/magic_grid_category_01.jpg';
 import magic_grid_category_02 from '../../assets/images/magic_grid/magic_grid_category_02.jpg';
 import magic_grid_category_03 from '../../assets/images/magic_grid/magic_grid_category_03.jpg';
 import magic_grid_category_04 from '../../assets/images/magic_grid/magic_grid_category_04.jpg';
 import magic_grid_category_05 from '../../assets/images/magic_grid/magic_grid_category_05.jpg';
 import magic_grid_category_06 from '../../assets/images/magic_grid/magic_grid_category_06.jpg';
 import magic_grid_category_07 from '../../assets/images/magic_grid/magic_grid_category_07.jpg';

//category_special
import magic_grid_category_special_01 from '../../assets/images/magic_grid/magic_grid_category_special_01.png';
import magic_grid_category_special_02 from '../../assets/images/magic_grid/magic_grid_category_special_02.jpg';
import magic_grid_category_special_03 from '../../assets/images/magic_grid/magic_grid_category_special_03.jpg';
import magic_grid_category_special_04 from '../../assets/images/magic_grid/magic_grid_category_special_04.jpg';
import magic_grid_category_special_05 from '../../assets/images/magic_grid/magic_grid_category_special_05.jpg';
import magic_grid_category_special_06 from '../../assets/images/magic_grid/magic_grid_category_special_06.jpg';
import magic_grid_category_special_07 from '../../assets/images/magic_grid/magic_grid_category_special_07.jpg';

class  ArticleStyle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             categoryStyleArray :[
                 {
                   imageSq : magic_grid_category_01,
                   typoTitleSq :"Special Item" 
                 },
                 {
                    imageSq : magic_grid_category_02,
                    typoTitleSq :"From Space" 
                  },
                  {
                    imageSq : magic_grid_category_03,
                    typoTitleSq :"NASA" 
                  },
                  {
                    imageSq : magic_grid_category_04,
                    typoTitleSq :"On The Moon" 
                  },
                  {
                    imageSq : magic_grid_category_05,
                    typoTitleSq :"Galaxy" 
                  },
                  {
                    imageSq : magic_grid_category_06,
                    typoTitleSq :"Another Earth" 
                  },
                  {
                    imageSq : magic_grid_category_07,
                    typoTitleSq :"Satellite" 
                  }
             ],

             categorySpecialArray :[
                {
                  imageSq : magic_grid_category_special_01,
                  typoTitleSq :"Wildlife" 
                },
                {
                   imageSq : magic_grid_category_special_02,
                   typoTitleSq :"Adventure" 
                 },
                 {
                   imageSq : magic_grid_category_special_03,
                   typoTitleSq :"Beaches" 
                 },
                 {
                   imageSq : magic_grid_category_special_04,
                   typoTitleSq :"Monuments" 
                 },
                 {
                   imageSq : magic_grid_category_special_05,
                   typoTitleSq :"Food" 
                 },
                 {
                   imageSq : magic_grid_category_special_06,
                   typoTitleSq :"Party" 
                 },
                 {
                   imageSq : magic_grid_category_special_07,
                   typoTitleSq :"Museum" 
                 }
            ]

        }
    }
    
    render(){
    // category style array
        const categoryStyle = this.state.categoryStyleArray.map((elem)=>{
            return (
          <div className="item">
            <div className="item-inner">
    
                {/* <!-- image container --> */}
                <div className="image-sq">
                    <div className="image-wrapper">
                        <div className="image-inner">
                            <img className="image-sq" src={elem.imageSq} alt=""/>
                        </div>
                    </div>
                </div>
    
                {/* <!-- typography container--> */}
                <Link to ="" className="typo-sq">
                    <span className="typo-whitespace"></span>
                    <p className="typo-title-sq">{elem.typoTitleSq}</p>
                </Link>
    
            </div>
        </div>
            )

        })

        // category special array
        const categorySpecial = this.state.categorySpecialArray.map((elem)=>{
         return (
        <div className="item">
          <div className="item-inner">
    
        {/* <!-- image container --> */}
        <div className="image-sq">
        <div className="image-wrapper">
        <div className="image-inner">
        <img className="image-sq" src={elem.imageSq} alt=""/>
    
        </div>
            </div>
            </div>
    
         {/* <!-- typography container--> */}
        <Link to ="" className="typo-sq">
         <span className="typo-whitespace"></span>
        <p className="typo-title-sq">{elem.typoTitleSq}</p>
        </Link>
    
        </div>
        </div>     
         )
        })
        return (
            <Fragment>
            <h3>Category Style</h3>
            <br/>
            <p>To achieve this style you need to add <strong>.category-sq</strong> className.</p>
            <p>This style is another category/articles listing representation. In its initial form, the first element represents 1/3 from the container width and the rest of the categories will have 1/3 each from the remaining space.
            </p>
            <br/>
                                            
    <div className="magic-grid category-sq hover-scale hover-default">
      
    {categoryStyle}
    </div>
                                            
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">category-sq</mark> hover-scale hover-default&quot;&gt;
        ...
    &lt;/div&gt;</code></pre> 
    <br/>
                                               
    <h4>Special Style</h4>
    <p>When applying .special className, the first element from the grid will have a bigger height than the container. Check it out in the following example:</p>
    
     <div className="magic-grid category-sq special-sq hover-scale">
     {categorySpecial}                                            
    </div>
                                                
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">category-sq</mark> <mark className="markcode">special-sq</mark> hover-scale&quot;&gt;
        ...
    &lt;/div&gt;</code></pre> 
    
    <h4>Responsive Behavior</h4>
                                                
    <img src={magic_grid_photo_responsive} alt=""/>  
            </Fragment>
        )
    }
    
}

export default ArticleStyle
