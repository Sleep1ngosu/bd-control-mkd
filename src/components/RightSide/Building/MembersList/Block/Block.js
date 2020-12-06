import React, { useState } from 'react'
import './Block.scss'
import CheckBoxIcon from '../../../../../assets/svg/icons/CheckBoxIcon'
import CheckBoxActiveIcon from '../../../../../assets/svg/icons/CheckBoxActiveIcon'
import MoreIconSmall from '../../../../../assets/svg/icons/MoreIconSmall'
import Menu from '../Menu/Menu'
import consts from '../../../../../variables/consts'

function Block(props) {
    let checkboxStyle, checkboxActiveStyle
    let [isActive, setActive] = useState(false)

    if (isActive) {
        checkboxStyle = { display: 'none' }
        checkboxActiveStyle = { display: 'block' }
    } else {
        checkboxStyle = { display: 'block' }
        checkboxActiveStyle = { display: 'none' }
    }

    const checkBoxHandler = () => {
        setActive(!isActive)
    }

    let [isHovered, setHovered] = useState(false)

    let moreIcon

    const moreIconHoverHandler = () => {
        setHovered(!isHovered)
    }

    isHovered
        ? (moreIcon = <MoreIconSmall color={consts.hoveredMoreIconColor} />)
        : (moreIcon = <MoreIconSmall color={consts.unhoveredMoreIconColor} />)

    let menuStyle
    if (props.active === props.index) {
        menuStyle = { display: 'block' }
    } else {
        menuStyle = { display: 'none' }
    }

    return (
        <div className="MembersList__block">
            <div className="MembersList__block__title">
                <b>{props.name}</b>
            </div>
            <div
                onClick={checkBoxHandler}
                style={checkboxStyle}
                className="MembersList__block__checkbox"
            >
                <CheckBoxIcon />
            </div>
            <div
                onClick={checkBoxHandler}
                style={checkboxActiveStyle}
                className="MembersList__block__checkbox-active"
            >
                <CheckBoxActiveIcon />
            </div>
            <div className="MembersList__block__moreIcon">
                <div className="MembersList__block__moreIcon__wrapper">
                    <div
                        onMouseEnter={moreIconHoverHandler}
                        onMouseLeave={moreIconHoverHandler}
                        onClick={props.onClick}
                        className="MembersList__block__moreIcon__icon"
                    >
                        {moreIcon}
                    </div>
                    <div
                        style={menuStyle}
                        className="MembersList__block__moreIcon__menu"
                    >
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Block
