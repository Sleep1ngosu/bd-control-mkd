import React from 'react'
import './Button.scss'

function Button(props) {
    return (
        <button
            style={{ ...props.style }}
            className="Building__registers__button"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default Button
