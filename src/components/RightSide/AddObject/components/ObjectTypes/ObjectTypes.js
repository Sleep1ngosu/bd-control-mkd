import React from 'react'
import './ObjectTypes.scss'

function ObjectTypes(props) {
    const style = {
        width: `${props.width}rem`,
    }

    return (
        <div className="objectTypes__type" style={style}>
            <span className="objectTypes__type__text">{props.text}</span>
        </div>
    )
}

export default ObjectTypes
