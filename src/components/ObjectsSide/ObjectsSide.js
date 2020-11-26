import React from 'react'
import './ObjectsSide.scss'
import ObjectsSelect from '../LeftSideList/ObjectsSelect/ObjectsSelect'
import ObjectsSideBlock from './ObjectsSideBlock/ObjectsSideBlock'
import arrays from '../../variables/arrays'

function ObjectsSide() {
    const ObjectsSideList = arrays.lists.objects.list.map((value, index) => {
        return (
            <ObjectsSideBlock text={value} key={`ObjectsSideBlock__${index}`} />
        )
    })

    return (
        <div className="ObjectsSide__left__wrapper">
            <div className="ObjectsSide__left__header">
                <ObjectsSelect />
            </div>
            <div className="ObjectsSide__left__body">{ObjectsSideList}</div>
        </div>
    )
}

export default ObjectsSide
