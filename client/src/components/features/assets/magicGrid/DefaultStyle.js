import React, { Fragment, Component } from 'react'
import { Link } from "react-router-dom";


//images
import magic_grid_default_01 from '../../assets/images/magic_grid/magic_grid_default_01.jpg';
import magic_grid_default_02 from '../../assets/images/magic_grid/magic_grid_default_02.jpg';
import magic_grid_default_03 from '../../assets/images/magic_grid/magic_grid_default_03.jpg';
import magic_grid_default_04 from '../../assets/images/magic_grid/magic_grid_default_04.jpg';
import magic_grid_default_05 from '../../assets/images/magic_grid/magic_grid_default_05.jpg';
import magic_grid_default_06 from '../../assets/images/magic_grid/magic_grid_default_06.jpg';

class DefaultStyle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             defaultStyleArray : [
                 {
                     imageSq : magic_grid_default_01,
                     titleSq :  "Food"
                 },
                 {
                    imageSq : magic_grid_default_02,
                    titleSq :  "Breakfast"
                },
                {
                    imageSq : magic_grid_default_03,
                    titleSq :  "Tea"
                },
                {
                    imageSq : magic_grid_default_04,
                    titleSq :  "Healthy Food"
                },
                {
                    imageSq : magic_grid_default_05,
                    titleSq :  "Pie"
                },
                {
                    imageSq : magic_grid_default_06,
                    titleSq :  "Fruit Cocktail"
                }
             ]
        }
    }
    
    render(){

        const magicGrid = this.state.defaultStyleArray.map((elem)=>{
         return (
            <div className="item">
            <div className="item-inner">
    
                {/* <!-- image container --> */}
                <div className="image-sq">
                    <div className="image-wrapper">
                        <div className="image-inner">
                            <img className="image-sq" src= {elem.imageSq} alt=""/>
                        </div>
                    </div>
                </div>
    
                {/* <!-- typography container--> */}
                <Link to ="" className="typo-sq">
                   <span className="typo-whitespace"></span>
                    <p className="typo-label-sq" data-label-before="Category" data-label-after="Category"></p>
                    <p className="typo-title-sq">{elem.titleSq}</p>
                </Link>
    
            </div>
        </div>   
         )
        })
        return (
            <Fragment>
            <h3>Default Style</h3>
            <br/>
                                                
            <p>This is the grid used to list blog categories and it is built using only CSS.</p>
                                                
            <p>Magic Grid is built using <strong>.item</strong> elements, each item with an <strong>.image-sq</strong> container and a text container <strong>typo-sq</strong>.</p>
                                                
    <div className="magic-grid">
        {magicGrid}
       {/* <!-- item--> */}   
    
    </div>
                                                      
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;<mark className="markcode">magic-grid</mark>&quot;&gt;
        &lt;div className=&quot;item&quot;&gt;
            &lt;div className=&quot;item-inner&quot;&gt;
                &lt;!-- image container --&gt;
                &lt;div className=&quot;image-sq&quot;&gt;
                    &lt;div className=&quot;image-wrapper&quot;&gt;
                        &lt;div className=&quot;image-inner&quot;&gt;
                            &lt;img className=&quot;image-sq&quot; src=&quot;assets/images/magic_grid/magic_grid_default_01.jpg&quot; alt=&quot;&quot;&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
    
                &lt;!-- text container--&gt;
                &lt;Link to =&quot;&quot; className=&quot;typo-sq&quot;&gt;
                    &lt;span className=&quot;typo-whitespace&quot;&gt;&lt;/span&gt;
                    &lt;p className=&quot;typo-label-sq&quot; data-label-before=&quot;Category&quot; data-label-after=&quot;Category&quot;&gt;&lt;/p&gt;
                    &lt;p className=&quot;typo-title-sq&quot;&gt;Food&lt;/p&gt;
                &lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div className=&quot;item&quot;&gt; ... &lt;/div&gt;
        ...
    &lt;/div&gt;</code></pre>
                                                <br/>
                                                <h4>Hover Effect</h4>
                                                <p>Magic Grid accepts three hover effects that can be applied together or separately. (default Magic container doesn't have a hover effect):</p>
                    
                                                <ul>
                                                    <li>
                                                        <p><strong>.hover-default</strong> - on hover, image from .item will note scale</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>.hover-scale</strong> - on hover, image from .item will scale</p>
                                                    </li>
                                                    <li>
                                                        <p><strong>.hover-center</strong> - on hover, imagine from .item will have an overlay and text will center. This option allows you to have two text options for .typo-label, a default text (data-label-before) and one that appears on hover(data-label-after).</p>
                                                    </li>
                                                </ul>
                                                
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">hover-default</mark>&quot;&gt;
        ...
    &lt;/div&gt;</code></pre>
                                                <br/>
                                                <h4>Responsive Behaviour</h4>
                                                
                                                <p>In its initial form, the grid has the (.items) elements as follows: three on a row on desktop and large-desktop resolution, two on a row on tablet resolution and one element on mobile.</p> 
            </Fragment>
        )
    }
   
}

export default DefaultStyle
