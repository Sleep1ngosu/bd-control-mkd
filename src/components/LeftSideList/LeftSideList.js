import React, { useState } from 'react'
import './LeftSideList.scss'
import TextBlock from './TextBlock/TextBlock'

function LeftSideList(props) {
    const style = {
        display: props.style,
    }

    let list,
        select = null

    if (props.id === 'objects') {
        select = (
            <select className="objects__select">
                <option value="something 1">something 1</option>
                <option value="something 2">something 2</option>
                <option value="something 3">something 3</option>
            </select>
        )
    }

    if (props.arr) {
        list = props.arr.map((value, index) => {
            return (
                <TextBlock
                    key={`leftSideList__text__${index}`}
                    text={value}
                    id={props.id}
                    redirect={props.redirect[index]}
                />
            )
        })
    }

    if (list) {
        return (
            <div className="leftSideList__wrapper" style={style}>
                {select}
                {list}
            </div>
        )
    }

    return null
}

export default LeftSideList
