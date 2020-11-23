import React from 'react'
import './ImportControl.scss'
import ObjectTypes from '../AddObject/components/ObjectTypes/ObjectTypes'
import Button from '../AddObject/components/Button/Button'
import FieldLeft from './components/FieldLeft/FieldLeft'
import FieldRight from './components/FieldRight/FieldRight'

function ImportControl(props) {
    return (
        <div className="ImportControl__wrapper">
            <div className="header">
                <div className="header__title">
                    <span className="header__title__text">{props.title}</span>
                </div>
                <div className="header__subtitle">
                    <ObjectTypes text="Все" width="4" />
                    <ObjectTypes text="Жилые" width="7" />
                    <ObjectTypes text="Не жилые" width="9" />
                    <ObjectTypes text="МОП и ОДИ" width="10" />
                    <ObjectTypes text="Машиноместа" width="11" />
                    <ObjectTypes text="Собственники" width="11" />
                    <Button text="сохранить" color="#6D5BD0" isPush={true} />
                    <Button text="отменить" color="#D30000" />
                </div>
            </div>
            <div className="ImportControl__field__wrapper">
                <FieldLeft leftTitle="СТРОЕНИЕ" rightTitle="ПЛОЩАДЬ" />
                <FieldRight
                    leftTitle="СОБСТВЕННИК"
                    centerTitle="ПЛОЩАТЬ"
                    rightTitle="№ ПОМЕЩЕНИЯ"
                />
            </div>
            {/* <Field title="введите данные" /> */}
        </div>
    )
}

export default ImportControl
