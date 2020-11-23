import React from 'react'
import './AddObject.scss'
import ObjectTypes from './components/ObjectTypes/ObjectTypes'
import Button from './components/Button/Button'
import Field from './components/Field/Field'
// import Header from '../Header/Header'

function AddObject(props) {
    return (
        <div className="addObject__wrapper">
            <div className="header">
                <div className="header__title">
                    <span className="header__title__text">{props.title}</span>
                </div>
                <div className="header__subtitle">
                    <ObjectTypes text="Строение" width="8" />
                    <ObjectTypes text="Помещение" width="9.5" />
                    <ObjectTypes text="Собственники" width="11" />
                    <Button text="сохранить" color="#6D5BD0" isPush={true} />
                    <Button text="отменить" color="#D30000" />
                </div>
            </div>
            <Field title="введите данные" />
        </div>
    )
}

export default AddObject
