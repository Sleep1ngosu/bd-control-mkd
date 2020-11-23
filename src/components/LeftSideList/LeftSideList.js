import React, { useState } from 'react'
import './LeftSideList.scss'
import TextBlock from './TextBlock/TextBlock'

function LeftSideList(props) {
    const style = {
        display: props.style,
    }

    let list

    if (props.arr) {
        list = props.arr.map((value, index) => {
            return (
                <TextBlock key={`leftSideList__text__${index}`} text={value} />
            )
        })
    }

    if (list) {
        return (
            <div className="leftSideList__wrapper" style={style}>
                {list}
            </div>
        )
    }

    return null
}

export default LeftSideList
