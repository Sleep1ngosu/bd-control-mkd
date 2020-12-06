import React, { useState } from 'react'
import './ImportControl.scss'
import ObjectTypes from '../AddObject/components/ObjectTypes/ObjectTypes'
import Button from '../AddObject/components/Button/Button'
import FieldLeft from './components/FieldLeft/FieldLeft'
import FieldRight from './components/FieldRight/FieldRight'
import arrays from '../../../variables/arrays'

function ImportControl(props) {
    let [active, setActive] = useState(0)

    const changeActiveType = (index) => {
        setActive(index)
    }

    const objectTypesList = arrays.ImportControl.titles.text.map(
        (value, index) => {
            return (
                <ObjectTypes
                    key={`objectTypes__${index}`}
                    text={value}
                    width={arrays.ImportControl.titles.width[index]}
                    index={index}
                    onClick={() => changeActiveType(index)}
                    active={active}
                />
            )
        }
    )

    let fieldRight

    active === 5
        ? (fieldRight = (
              <FieldRight
                  leftTitle="СОБСТВЕННИК"
                  centerTitle="ПЛОЩАТЬ"
                  rightTitle="№ ПОМЕЩЕНИЯ"
              />
          ))
        : (fieldRight = (
              <FieldRight
                  leftTitle="НОМЕР ПОМЕЩЕНИЯ"
                  centerTitle="ПЛОЩАТЬ"
                  rightTitle="№ ПОМЕЩЕНИЯ"
              />
          ))

    return (
        <div className="ImportControl__wrapper">
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
            <div className="ImportControl__field__wrapper">
                <FieldLeft leftTitle="СТРОЕНИЕ" rightTitle="ПЛОЩАДЬ" />
                {fieldRight}
            </div>
            {/* <Field title="введите данные" /> */}
        </div>
    )
}

export default ImportControl
