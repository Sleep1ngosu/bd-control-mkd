import React from 'react'
import './Info.scss'

function Info(props) {
    let style
    props.active === props.index
        ? (style = { display: 'block' })
        : (style = { display: 'none' })

    return (
        <div style={style} className="Building__header__info">
            <div className="Building__header__info__title">{props.title}</div>
            <div className="Building__header__info__subtitle">
                {props.subtitle}
            </div>
        </div>
    )
}

export default Info
