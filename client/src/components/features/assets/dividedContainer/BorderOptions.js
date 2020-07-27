import React, { Fragment } from 'react'

function BorderOptions() {
    return (
        <Fragment>
        <h3>Border Option</h3>
                                       <br/>
                                              
                                       <p>To apply a border on the whole <strong>.div-c</strong>, excluding the label, you can use <strong>.border-sq</strong> class along with <strong>.no-padding</strong> class.</p>
                                       
                                       
                                       
    <div className="div-c inline-3 one-label no-padding border-sq">
    <label>Label 1</label>
    <div className="divided-column">Element 01</div>
    <div className="divided-column">Element 02</div>
    <div className="divided-column">Element 03</div>
    </div>
        
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c inline-3 one-label no-padding <mark className="markcode">border-sq</mark>&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 01&lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 02&lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 03&lt;/div&gt;
    &lt;/div&gt;</code></pre>                    
        </Fragment>
    )
}

export default BorderOptions
