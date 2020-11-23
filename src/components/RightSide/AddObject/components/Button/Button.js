import React from 'react'
import './Button.scss'

function Button(props) {
    const style = {
        backgroundColor: props.color,
    }

    if (props.isPush === true) {
        style['marginLeft'] = 'auto'
    }

    return (
        <button className="addObject__button" style={style}>
            <span className="addObject__button__text">{props.text}</span>
        </button>
    )
}

export default Button
