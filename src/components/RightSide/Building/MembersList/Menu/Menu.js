import React from 'react'
import './Menu.scss'
import Option from './Option/Option'

function Menu(props) {
    return (
        <div className="MembersList__menu__wrapper">
            <div className="MembersList__menu__top">
                <Option text="Карточка помещения" />
            </div>
            <div className="MembersList__menu__bottom">
                <Option text="Править..." />
                <Option text="Удалить" style={{ color: 'red' }} />
            </div>
        </div>
    )
}

export default Menu
