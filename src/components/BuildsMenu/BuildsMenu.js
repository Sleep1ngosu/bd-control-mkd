import React, { useState } from 'react'
import './BuildsMenu.scss'
import SearchIcon from '../../assets/svg/icons/SearchIcon'
import FilterIcon from '../../assets/svg/icons/FilterIcon'
import SortIcon from '../../assets/svg/icons/SortIcon'
import HoveredIcon from '../../HOCs/HoveredIcon'
import Block from './Block/Block'
import consts from '../../variables/consts'

function BuildsMenu(props) {
    let filterIcon = useState(
        <HoveredIcon
            Component={FilterIcon}
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '3.2rem',
            }}
            hoveredIconColor={consts.hoveredIconColor}
            unhoveredIconColor={consts.unhoveredIconColor}
        />
    )
    let sortIcon = useState(
        <HoveredIcon
            Component={SortIcon}
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '0rem',
            }}
            hoveredIconColor={consts.hoveredIconColor}
            unhoveredIconColor={consts.unhoveredIconColor}
        />
    )

    const [isVisible, setIsVisible] = useState(true)
    let style = {
        display: 'none',
    }

    isVisible === false ? (style.display = 'none') : (style.display = 'block')

    return (
        <div className="BuildsMenu__wrapper" style={style}>
            <div className="BuildsMenu__header__wrapper">
                <div className="BuildsMenu__header">
                    <div className="BuildsMenu__searchIcon">
                        <SearchIcon />
                    </div>
                    {filterIcon}
                    {sortIcon}
                    <input
                        type="text"
                        className="BuildsMenu__header__input"
                        placeholder="Поиск..."
                    />
                </div>
            </div>
            <div classNmae="BuildsMenu__body">
                <Block
                    title="ул. Ленина, дом 7, корп. 1"
                    subtitle="многоквартирный дом"
                />
                {/* <Block
                    title="ул. Ленина, дом 7, корп. 1"
                    subtitle="многоквартирный дом"
                /> */}
            </div>
        </div>
    )
}

export default BuildsMenu
