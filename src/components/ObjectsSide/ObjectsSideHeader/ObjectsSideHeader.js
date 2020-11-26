import React from 'react'
import './ObjectsSideHeader.scss'
import ObjectsSideHeaderText from './ObjectsSideHeaderText/ObjectsSideHeaderText'
import arrays from '../../../variables/arrays'

function ObjectsSideHeader() {
    const headerList = arrays.ObjectsSideHeader.map((value, index) => {
        return (
            <ObjectsSideHeaderText
                text={value}
                key={`ObjectsSideHeaderText__${index}`}
            />
        )
    })

    return (
        <div className="ObjectsSideHeader__position">
            <div className="ObjectsSideHeader__wrapper">{headerList}</div>
        </div>
    )
}

export default ObjectsSideHeader
