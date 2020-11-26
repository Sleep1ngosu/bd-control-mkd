import React from 'react'
import './ObjectsSideHeaderText.scss'

function ObjectsSideHeaderText(props) {
    return (
        <div className="ObjectsSideHeader__text__wrapper">
            <span className="ObjectsSideHeader__text__text">{props.text}</span>
        </div>
    )
}

export default ObjectsSideHeaderText
