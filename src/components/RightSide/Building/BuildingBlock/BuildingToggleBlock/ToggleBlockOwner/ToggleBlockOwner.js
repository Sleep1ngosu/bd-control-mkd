import React, { useState } from 'react'
import './ToggleBlockOwner.scss'
import MoreIcon from '../../../../../../assets/svg/icons/MoreIcon'
import HoveredIcon from '../../../../../../HOCs/HoveredIcon'
import consts from '../../../../../../variables/consts'

function ToggleBlockOwner(props) {
    let falseStyle, trueStyle

    let moreIcon = (
        <HoveredIcon
            Component={MoreIcon}
            hoveredIconColor={consts.hoveredMoreIconColor}
            unhoveredIconColor={consts.unhoveredMoreIconColor}
            id={`ToggleBlockOwner__${props.index}`}
        />
    )

    if (!props.title_4 && !props.subtitle_4) {
        falseStyle = { display: 'flex' }
        trueStyle = { display: 'none' }
    } else {
        falseStyle = { display: 'none' }
        trueStyle = { display: 'block' }
    }

    return (
        <div className="ToggleBlockOwner__wrapper">
            <div className="ToggleBlockOwner__moreIcon">{moreIcon}</div>

            <div className="ToggleBlockOwner__column--1">{props.title_1}</div>
            <div className="ToggleBlockOwner__column--2">
                <div className="ToggleBlockOwner__column--2__title">
                    {props.title_2}
                </div>
                <div className="ToggleBlockOwner__column--2__subtitle">
                    {props.subtitle_2}
                </div>
            </div>
            <div className="ToggleBlockOwner__column--3">
                <div className="ToggleBlockOwner__column--3__title">
                    {props.title_3}
                </div>
                <div className="ToggleBlockOwner__column--3__subtitle">
                    {props.subtitle_3}
                </div>
            </div>
            <div style={trueStyle} className="ToggleBlockOwner__column--4">
                <div className="ToggleBlockOwner__column--4__title">
                    {props.title_4}
                </div>
                <div className="ToggleBlockOwner__column--4__subtitle">
                    {props.subtitle_4}
                </div>
            </div>
            <div
                style={falseStyle}
                className="ToggleBlockOwner__column--4__false"
            >
                <span>НЕТ</span>
            </div>
        </div>
    )
}

export default ToggleBlockOwner
