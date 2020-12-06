import React from 'react'
import './Option.scss'

function Option(props) {
    return (
        <div style={{ ...props.style }} className="MembersList__menu__option">
            {props.text}
        </div>
    )
}

export default Option
