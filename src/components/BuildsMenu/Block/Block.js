import React, { useState } from 'react'
import './Block.scss'
import HoveredIcon from '../../../HOCs/HoveredIcon'
import MoreIcon from '../../../assets/svg/icons/MoreIcon'
import consts from '../../../variables/consts'
import Info from './Info/Info'

function Block(props) {
    const moreIcon = useState(
        <HoveredIcon
            Component={MoreIcon}
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '.8rem',
                cursor: 'pointer',
            }}
            hoveredIconColor={consts.hoveredMoreIconColor}
            unhoveredIconColor={consts.unhoveredMoreIconColor}
        />
    )

    return (
        <div className="BuildsMenu__block__wrapper">
            {moreIcon}
            <div className="BuildsMenu__block__title">
                <span
                    title={props.title}
                    className="BuildsMenu__block__title__text"
                >
                    {props.title}
                </span>
            </div>
            <div className="BuildsMenu__block__subtitle">
                <span className="BuildsMenu__block__subtitle__text">
                    {props.subtitle}
                </span>
            </div>
            <Info />
        </div>
    )
}

export default Block
