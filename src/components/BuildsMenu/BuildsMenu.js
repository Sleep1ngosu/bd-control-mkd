import React, { useState } from 'react'
import './BuildsMenu.scss'
import SearchIcon from '../../assets/svg/icons/SearchIcon'
import FilterIcon from '../../assets/svg/icons/FilterIcon'
import SortIcon from '../../assets/svg/icons/SortIcon'
import HoveredIcon from '../../HOCs/HoveredIcon'
import Block from './Block/Block'
import consts from '../../variables/consts'
import arrays from '../../variables/arrays'
import Filter from '../Filter/Filter'

function BuildsMenu(props) {
    let filterStyle, filterIcon
    let [filterIsHovered, setFilterHover] = useState(false)
    let [filterIsShow, setFilterShow] = useState(false)

    //Filter
    let [activeOption, setActiveOption] = useState(0)

    const chooseActive = (index) => {
        setActiveOption(index)
    }
    ///////////

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

    const filterHoverToggle = () => {
        setFilterHover(!filterIsHovered)
    }
    const filterShowToggle = () => {
        setFilterShow(!filterIsShow)
    }

    filterIsHovered
        ? (filterIcon = <FilterIcon color={consts.hoveredIconColor} />)
        : (filterIcon = <FilterIcon color={consts.unhoveredIconColor} />)

    filterIsShow
        ? (filterStyle = { display: 'block' })
        : (filterStyle = { display: 'none' })

    let style = {
        display: 'none',
    }

    props.isVisible === true
        ? (style.display = 'flex')
        : (style.display = 'none')

    let styleArr = []
    for (let i = 0; i < arrays.Buildings.title.length; i++) {
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

    const BlockList = arrays.Buildings.title.map((value, index) => {
        return (
            <Block
                key={`BuildsMenu__Block__${index}`}
                index={index}
                title={value}
                subtitle={arrays.Buildings.subtitle[index]}
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
                        {/* {filterIcon} */}
                        <div className="BuildsMenu__filterIcon">
                            <div
                                onClick={filterShowToggle}
                                onMouseEnter={filterHoverToggle}
                                onMouseLeave={filterHoverToggle}
                                className="BuildsMenu__filterIcon__icon"
                            >
                                {filterIcon}
                            </div>
                            <div
                                style={filterStyle}
                                className="BuildsMenu__filterMenu"
                            >
                                <Filter
                                    onClick={chooseActive}
                                    active={activeOption}
                                />
                            </div>
                        </div>
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
