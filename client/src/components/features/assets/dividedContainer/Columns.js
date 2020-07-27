import React, { Fragment } from 'react'

function Columns() {
    return (
        <Fragment>
        <h3>Columns</h3>
                                        <br/>
                                        
                                        <p>By default <strong>.div-c</strong> columns have 100% width.</p>
                                        <br/>
                                        
                                        <p>In order to have multiple columns on one line you can use these classes::</p>
    
                                        <ul>
                                            <li><strong>.inline-2</strong> - two columns in a row.</li>
                                            <li><strong>.inline-3</strong> - thre columns in a row.</li>
                                            <li><strong>.inline-4</strong> - four columns in a row.</li>
                                        </ul>
                                        
                                        <p>No matter the above options, on mobile the width will always be 100%.</p>
                                        <br/>
    <div className="div-c inline-2">
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
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">inline-2</mark>&quot;&gt;
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
                                    <br/>
                                    <br/>
                                     
    <div className="div-c inline-3">
    <div className="divided-column">
    <label>Label 3</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 4</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 5</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>                     
                                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">inline-3</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>  
        </Fragment>
    )
}

export default Columns
