import React, { useState } from 'react'
import './AddObject.scss'
import ObjectTypes from './components/ObjectTypes/ObjectTypes'
import Button from './components/Button/Button'
import Field from './components/Field/Field'
// import Header from '../Header/Header'
import arrays from '../../../variables/arrays'

function AddObject(props) {
    let [active, setActive] = useState(0)

    const onClickType = (index) => {
        setActive(index)
    }

    const objectTypesList = arrays.addObject.titles.text.map((value, index) => {
        return (
            <ObjectTypes
                key={`addObject__objectTypes__${index}`}
                text={value}
                width={arrays.addObject.titles.width[index]}
                index={index}
                onClick={() => onClickType(index)}
                active={active}
            />
        )
    })

    return (
        <div className="addObject__wrapper">
            <div className="header">
                <div className="header__title">
                    <span className="header__title__text">{props.title}</span>
                </div>
                <div className="header__subtitle">
                    {objectTypesList}
                    <Button text="сохранить" color="#6D5BD0" isPush={true} />
                    <Button text="отменить" color="#D30000" />
                </div>
            </div>
            <Field title="введите данные" />
        </div>
    )
}

export default AddObject
