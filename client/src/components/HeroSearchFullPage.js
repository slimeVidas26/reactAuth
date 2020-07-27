import React , {useContext} from 'react'
import { Link } from "react-router-dom";
import HeroSearchForm from './HeroSearchForm'
import { HeroSearchContext } from '../contexts/HeroSearchContext';

const HeroSearchFullPage =()=> {
    const {Heroes} = useContext(HeroSearchContext);
    return (
    <div className="hero-search-full-page next-sq">

<HeroSearchForm />

<div className="sq-slick hero-big slide-up-sq" data-mobile-arrows="false" data-tablet-arrows="false" data-mobile-dots="true" data-tablet-dots="true" data-fade="true" data-speed="500" data-ease="linear">

    {Heroes.map((hero)=>{
        const alterImage = hero.image.split('/');
        return (
            <div className="">
        <div className="caption-content">
           <h1 className="font-weight-extrabold-sq">{hero.title}</h1>
        </div>
        <div className="caption-outside">
            <Link to ="#top"  className="button anchor-sq" >
                <i className="icon big icon-compass"></i>
                <span>{hero.verb}</span>
            </Link>
        </div>

        <div className="image-wrapper">
            <div className="image-inner">
                <img className="image-sq" src={hero.image} alt={alterImage[3]}/>
            </div>
        </div>
    </div>
  
        )
    })}
  
  </div>

</div>
    )
}

export default HeroSearchFullPage
