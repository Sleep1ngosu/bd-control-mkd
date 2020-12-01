import React from 'react'
import './BuildingTitles.scss'

function BuildingTitle(props) {
    const style = {
        marginLeft: props.marginLeft,
        width: props.width,
        textAlign: props.textAlign,
    }

    return (
        <div style={style} className="BuildingTitle__wrapper">
            <span className="BuildingTitle__text">{props.text}</span>
        </div>
    )
}

export default BuildingTitle
