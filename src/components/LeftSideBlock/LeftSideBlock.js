import React, { useState } from 'react'
import './LeftSideBlock.scss'
import ArrowDown from '../../assets/svg/Arrows/ArrowDown'
import ArrowUp from '../../assets/svg/Arrows/ArrowUp'
import DataIcon from '../../assets/svg/icons/DataIcon'
import ObjectsIcon from '../../assets/svg/icons/ObjectsIcon'
import MeetingsIcon from '../../assets/svg/icons/MeetingsIcon'
import RegistersIcon from '../../assets/svg/icons/RegistersIcon'
import SettingsIcon from '../../assets/svg/icons/SettingsIcon'

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

    const clickHandler = (e) => {
        setClickState({
            isClicked: !clickState.isClicked,
        })
        props.onClick(e)
    }

    let renderedArrow, renderedIcon

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
    console.log(props.id)

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
            {renderedIcon}
            {renderedArrow}
            <span className="LeftSideBlock__wrapper__text">{props.text}</span>
        </div>
    )
}

export default LeftSideBlock
