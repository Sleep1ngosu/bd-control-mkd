import React from 'react'
import './Text.scss'

function Text(props) {
    return (
        <div className="BuildsMenu__block__info__text">
            <span className="BuildsMenu__block__info__text__text">
                {props.text}
            </span>
        </div>
    )
}

export default Text
