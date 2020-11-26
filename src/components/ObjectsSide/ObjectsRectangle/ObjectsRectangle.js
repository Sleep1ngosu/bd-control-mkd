import React from 'react'
import './ObjectsRectangle.scss'

function ObjectsRectangle(props) {
    return (
        <div style={props.style} className="objects__rectangle">
            <span className="objects__rectangle__text">{props.text}</span>
        </div>
    )
}

export default ObjectsRectangle
