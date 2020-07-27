import React from 'react'

function Wishlist() {
    return (
<div className="ui modal small" data-for="wishlist">
<i className="icon icon-close close-modal"></i>

<div className="header center">
    <h4>Wishlist</h4>
</div>

<div className="content">
    <p>Mauris malesuada leo libero, vitae tempor ante sagittis vitae. Suspendisse consectetur facilisis enim.</p>
    <br/>
    <input type="checkbox" id="c01"/>
    <label htmlFor="c01">Beautiful Places</label>
    <input type="checkbox" id="c02"/>
    <label htmlFor="c02">For Summer</label>
    <input type="checkbox" id="c03"/>
    <label htmlFor="c03">Dream Houses</label>
</div>

<div className="actions">
    <div className="div-c inline-2">
        <div className="divided-column">
            <div className="button-sq cancel-sq fullwidth-sq">Cancel</div>
        </div>

        <div className="divided-column">
            <div className="button-sq fullwidth-sq">OK</div>
        </div>
    </div>
</div>

</div>

    )
}

export default Wishlist
