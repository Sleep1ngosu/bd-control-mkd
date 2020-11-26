import React from 'react'
import './ObjectsSelect.scss'

function ObjectsSelect(props) {
    const style = {
        marginBottom: props.marginBottom,
    }

    return (
        <select style={style} className="objects__select">
            <option value="something 1">something 1</option>
            <option value="something 2">something 2</option>
            <option value="something 3">something 3</option>
        </select>
    )
}

export default ObjectsSelect
