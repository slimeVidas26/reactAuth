import React from 'react'

function HeroSearchForm() {
    return (
        <div className="h-search-h thin-sq shadow-sq animate-sq">    
    <form action="listing_page.html" className="hero-search-form">
       <div className="search-item">
            <div className="fltp">
                <input type="text" value="" required/>
                <label className="placeholder" data-big-placeholder="Where do you travel?" data-little-placeholder="Where?"></label>
            </div>
       </div>

        <div className="search-item">
            <div className="fltp calendar-sq" id="rangestart">
                <input type="text" className="filter" value="" required placeholder="enter date"/>
                <label className="placeholder"  data-big-placeholder="Check in" data-little-placeholder="Start"></label>
            </div>

            <i className="icon icon-little-arrow"></i>

            <div className="fltp calendar-sq" id="rangeend">
                <input type="text" className="filter" value="" required placeholder="enter date"/>
                <label className="placeholder"  data-big-placeholder="Check out" data-little-placeholder="Ends"></label>
            </div>
        </div>

        <div className="search-item">
            <div className="fltp">
                <select name="dropdown" size="13" className="dropdown" required>
                    <option value="0" selected>Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5">6</option>
                    <option value="5">7</option>
                    <option value="5">8</option>
                    <option value="5">9</option>
                    <option value="5">10</option>
                    <option value="5">11</option>
                    <option value="5">12</option>
                </select>
                <label className="placeholder">Guests</label>
            </div>
        </div>

        <div className="search-item">
            <button className="button-sq hero-search-button">
                <i className="icon icon-search"></i>
            </button>
        </div>

    </form>
</div>
    )
}

export default HeroSearchForm
