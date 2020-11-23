import React, { useState } from 'react'
import './LeftSideBlock.scss'
import ArrowDown from '../../assets/svg/Arrows/ArrowDown'
import ArrowUp from '../../assets/svg/Arrows/ArrowUp'
import DataIcon from '../../assets/svg/icons/DataIcon'
import ObjectsIcon from '../../assets/svg/icons/ObjectsIcon'
import MeetingsIcon from '../../assets/svg/icons/MeetingsIcon'
import RegistersIcon from '../../assets/svg/icons/RegistersIcon'
import SettingsIcon from '../../assets/svg/icons/SettingsIcon'
import VerticalLine from '../../assets/svg/Lines/VerticalLine'

function LeftSideBlock(props) {
    const [clickState, setClickState] = useState({
        isClicked: false,
    })
    let arrowUpStyle = {
        display: 'none',
    }
    let arrowDownStyle = {}

    if (clickState.isClicked) {
        arrowUpStyle.display = 'block'
        arrowDownStyle.display = 'none'
    } else {
        arrowUpStyle.display = 'none'
        arrowDownStyle.display = 'block'
    }

    const styleArrow = {
        position: 'absolute',
        right: '3rem',
    }

    const styleIcon = {
        position: 'absolute',
        left: '4rem',
    }

    const styleLine = {
        position: 'absolute',
        top: '-.1rem',
    }

    const clickHandler = (e) => {
        setClickState({
            isClicked: !clickState.isClicked,
        })
        props.onClick(e)
    }

    let renderedArrow, renderedIcon, renderedLine

    if (props.isClicked) {
        renderedLine = <VerticalLine style={styleLine} id={props.id} />
    } else {
        renderedLine = null
    }

    switch (props.id) {
        case 'data': {
            renderedIcon = <DataIcon style={styleIcon} id={props.id} />
            break
        }
        case 'objects': {
            renderedIcon = <ObjectsIcon style={styleIcon} id={props.id} />
            break
        }
        case 'registers': {
            renderedIcon = <RegistersIcon style={styleIcon} id={props.id} />
            break
        }
        case 'meetings': {
            renderedIcon = <MeetingsIcon style={styleIcon} id={props.id} />
            break
        }
        case 'settings': {
            renderedIcon = <SettingsIcon style={styleIcon} id={props.id} />
            break
        }
        default: {
            renderedIcon = null
            break
        }
    }

    if (props.isClicked) {
        renderedArrow = <ArrowUp style={styleArrow} id={props.id} />
    } else {
        renderedArrow = <ArrowDown style={styleArrow} id={props.id} />
    }

    return (
        <div
            className="LeftSideBlock__wrapper"
            onClick={(e) => clickHandler(e)}
            id={props.id}
        >
            {renderedLine}
            {renderedIcon}
            {renderedArrow}
            <span id={props.id} className="LeftSideBlock__wrapper__text">
                {props.text}
            </span>
        </div>
    )
}

export default LeftSideBlock
