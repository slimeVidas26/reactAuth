import React, { Fragment, Component } from 'react'
import { Link } from "react-router-dom";


//magic_grid_photo
import magic_grid_photo_01 from '../../assets/images/magic_grid/magic_grid_photo_01.jpg';
import magic_grid_photo_02 from '../../assets/images/magic_grid/magic_grid_photo_02.jpg';
import magic_grid_photo_03 from '../../assets/images/magic_grid/magic_grid_photo_03.jpg';
import magic_grid_photo_04 from '../../assets/images/magic_grid/magic_grid_photo_04.jpg';
import magic_grid_photo_05 from '../../assets/images/magic_grid/magic_grid_photo_05.jpg';
import magic_grid_photo_06 from '../../assets/images/magic_grid/magic_grid_photo_06.jpg';
import magic_grid_photo_07 from '../../assets/images/magic_grid/magic_grid_photo_07.jpg';
import magic_grid_photo_08 from '../../assets/images/magic_grid/magic_grid_photo_08.jpg';


//responsive
import magic_grid_photo_responsive from '../../assets/images/magic_grid/magic_grid_photo_responsive.jpg';


class  PhotoStyle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             photoStyleArray : [
                 {
                   imageSq : magic_grid_photo_01,
                   typoTitleSq : "Lefkada",
                   country : "Greece"
                 },
                 {
                    imageSq : magic_grid_photo_02,
                    typoTitleSq : "Amsterdam",
                    country : "Holland"

                  },
                  {
                    imageSq : magic_grid_photo_03,
                    typoTitleSq : "Paris",
                    country : "France"

                  },
                  {
                    imageSq : magic_grid_photo_04,
                    typoTitleSq : "Prague",
                    country : "Cheque Republic"

                  },
                  {
                    imageSq : magic_grid_photo_05,
                    typoTitleSq : "Hamburg",
                    country : "Deutchland"

                  },
                  {
                    imageSq : magic_grid_photo_06,
                    typoTitleSq : "Bucharest",
                    country : "Hungry"

                  },
                  {
                    imageSq : magic_grid_photo_07,
                    typoTitleSq : "London",
                    country : " United Kingdom"

                  },
                  {
                    imageSq : magic_grid_photo_08,
                    typoTitleSq : "Rio De Janeiro",
                    country : "Brazil"

                  }
             ]
        }
    }
    
    render(){

        const photoStyle = this.state.photoStyleArray.map((elem)=>{
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
                    <p className="typo-label-sq" data-label-before={elem.country} data-label-after="Book a home in"></p>
                    <p className="typo-title-sq">{elem.typoTitleSq}</p>
                </Link>
    
            </div>
        </div>  
            )

        })
        return (
            <Fragment>
            <h3>Photo Style</h3>
            <br/>
                                                
            <p>Adding <strong>.photo-sq</strong> className the grid, will look like this:</p>
                                                
    <div className="magic-grid photo-sq hover-default hover-center">

        {photoStyle}
    
    </div>
                                           
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;magic-grid <mark className="markcode">photo-sq</mark> hover-default hover-center&quot;&gt;
        ...
    &lt;/div&gt;</code></pre>        
    <br/>           
    <h4>Responsive Behaviour</h4>
                                                
    <img src={magic_grid_photo_responsive} alt=""/>             
    </Fragment>
        )
    }
    
}

export default PhotoStyle
