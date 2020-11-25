import React from 'react'
import './Info.scss'
import Text from './Text/Text'

function Info() {
    return (
        <div className="BuildsMenu__block__info__wrapper">
            <div className="BuildsMenu__block__info__header">
                <Text text="77:01:002001:2154" />
                <Text text="Дата постройки: 2001 г." />
            </div>
            <div className="BuildsMenu__block__info__body">
                <Text text="S общ - 25 236,6 М" />
                <Text text="S жил - 25 236,6 М" />
                <Text text="S нежил - 25 236,6 М" />
                <Text text="S моп - 25 236,6 М" />
                <Text text="Помещений всего: 962" />
                <Text text="из них квартир: 176" />
            </div>
            <div className="BuildsMenu__block__info__footer">
                <button className="BuildsMenu__block__info__footer__button">
                    <span className="BuildsMenu__block__info__footer__button__text">
                        Перейти
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Info
