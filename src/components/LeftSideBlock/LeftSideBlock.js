import React, { useState } from 'react'
import './LeftSideBlock.scss'
import ArrowDown from '../../assets/svg/Arrows/ArrowDown'
import ArrowUp from '../../assets/svg/Arrows/ArrowUp'

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

    const style = {
        position: 'absolute',
        right: '3rem',
    }

    const clickHandler = (e) => {
        setClickState({
            isClicked: !clickState.isClicked,
        })
        props.onClick(e)
    }

    let renderedArrow

    if (props.isClicked) {
        renderedArrow = <ArrowUp style={style} id={props.id} />
    } else {
        renderedArrow = <ArrowDown style={style} id={props.id} />
    }

    return (
        <div
            className="LeftSideBlock__wrapper"
            onClick={(e) => clickHandler(e)}
            id={props.id}
        >
            {renderedArrow}
            <span className="LeftSideBlock__wrapper__text">{props.text}</span>
        </div>
    )
}

export default LeftSideBlock
