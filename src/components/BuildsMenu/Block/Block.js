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
            hoveredIconColor={consts.hoveredMoreIconColor}
            unhoveredIconColor={consts.unhoveredMoreIconColor}
            key="BuildsMenu__Block__hoveredIcon__moreIcon"
            id={`BuildsMenu__block__${props.index}`}
        />
    )

    let style
    props.visibleID === `BuildsMenu__block__${props.index}`
        ? (style = { display: 'block' })
        : (style = { display: 'none' })

    // let styleInfo
    // const [isVisibleInfo, setVisibleInfo] = useState(false)
    // isVisibleInfo === true
    //     ? (styleInfo = { display: 'block' })
    //     : (styleInfo = { display: 'none' })

    // const changeVisibilityInfo = () => {
    //     setVisibleInfo(!isVisibleInfo)
    // }

    return (
        <div className="BuildsMenu__block__wrapper__wrapper">
            <div className="BuildsMenu__block__wrapper">
                <div
                    className="BuildsMenu__block__moreIcon"
                    onClick={props.onClickInfo}
                >
                    {moreIcon}
                </div>
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
            </div>
            <Info style={style} />
        </div>
    )
}

export default Block
