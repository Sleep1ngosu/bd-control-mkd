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
            key="BuildsMenu__hoveredIcon__filterIcon"
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
            key="BuildsMenu__hoveredIcon__sortIcon"
        />
    )

    let style = {
        display: 'none',
    }

    props.isVisible === true
        ? (style.display = 'block')
        : (style.display = 'none')

    const array = ['ул. Ленина, дом 7, корп. 1', 'ул. Ленина, дом 7, корп. 1']
    const arraySubtitle = ['многоквартирный дом', 'многоквартирный дом']
    let styleArr = []
    for (let i = 0; i < array.length; i++) {
        styleArr.push('none')
    }
    const [visibleID, setVisibleID] = useState(undefined)

    const onClickInfo = (e) => {
        if (e.target.id === visibleID) {
            setVisibleID(undefined)
        } else {
            setVisibleID(e.target.id)
        }
    }

    const BlockList = array.map((value, index) => {
        return (
            <Block
                key={`BuildsMenu__Block__${index}`}
                index={index}
                title={value}
                subtitle={arraySubtitle[index]}
                onClickInfo={(e) => onClickInfo(e)}
                visibleID={visibleID}
            />
        )
    })

    return (
        <div className="BuildsMenu__wrapper__wrapper">
            {/* <div
                className="BuildsMenu__closeWrapper"
                onCLick={closeHandler}
                style={styleClose}
            ></div> */}
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
                <div className="BuildsMenu__body">{BlockList}</div>
            </div>
        </div>
    )
}

export default BuildsMenu
