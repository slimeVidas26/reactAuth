import React, { Fragment } from 'react'

function Definition(props) {
    return (
        <Fragment>
        <h2>{props.name}</h2>
                                        
         <p className="definition-sq"><strong>{props.name}</strong> is a custom grid particular to the theme.</p>
        </Fragment>
    )
}

export default Definition
