import React from 'react'
import './Option.scss'
import RadioBigIcon from '../../../../../assets/svg/icons/RadioBigIcon'

function Option(props) {
    return (
        <div
            style={{ ...props.style }}
            className="Building__registers__option__wrapper"
        >
            <div className="Building__registers__option__radio">
                <RadioBigIcon />
            </div>
            <div className="Building__registers__option__title">
                {props.title}
            </div>
        </div>
    )
}

export default Option
