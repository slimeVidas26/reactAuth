import React, { Fragment } from 'react'

function NoPaddingOptions() {
    return (
        <Fragment>
        <h3>No Padding Option</h3>
                                       <br/>
                                              
                                       <p>To remove columns gutter you can use this class <strong>.no-padding</strong></p>
    <div className="div-c inline-2 no-padding">
    <div className="divided-column">
    <label>Label 1</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 2</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div> 
                                                
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c inline-2 <mark className="markcode">no-padding</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    ...
    &lt;/div&gt;</code></pre>
     
        </Fragment>
    )
}

export default NoPaddingOptions
