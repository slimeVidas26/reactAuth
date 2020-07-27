import React, { Fragment } from 'react'

function OneLabelOptions() {
    return (
        <Fragment>
        <h3>One Label Option</h3>
                                       
                                       
                                       <p>There are cases when the elements grid needs just one label. You can use the <strong>.one-label</strong> class like this:</p>
    <div className="div-c inline-4 one-label">
    <label>Label 1</label>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>  
                                  
                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">one-label</mark> inline-4&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>  
        </Fragment>
    )
}

export default OneLabelOptions
