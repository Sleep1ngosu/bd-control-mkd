import React from 'react'
import './TextBlock.scss'

function TextBlock(props) {
    return (
        <div className="left-side__textBlock__wrapper">
            <div className="left-side__textBlock">
                <span className="left-side__textBlock__text">{props.text}</span>
            </div>
        </div>
    )
}

export default TextBlock
