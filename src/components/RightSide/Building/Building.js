import React, { useState } from 'react'
import './Building.scss'
import ObjectTypes from '../AddObject/components/ObjectTypes/ObjectTypes'
import MapIcon from '../../../assets/svg/icons/MapIcon'
import DocumentIcon from '../../../assets/svg/icons/DocumentIcon'
import ClipboardIcon from '../../../assets/svg/icons/ClipboardIcon'
import SearchIcon from '../../../assets/svg/icons/SearchIcon'
import FilterIcon from '../../../assets/svg/icons/FilterIcon'
import RefreshIcon from '../../../assets/svg/icons/RefreshIcon'
import HoveredIcon from '../../../HOCs/HoveredIcon'
import CalendarIcon from '../../../assets/svg/icons/CalendarIcon'
import PeopleIcon from '../../../assets/svg/icons/PeopleIcon'
import consts from '../../../variables/consts'

function Building(props) {
    const mapIconStyle = {
        position: 'absolute',
        left: '78rem',
    }
    const DocIconStyle = {
        position: 'absolute',
        left: '81rem',
    }

    const ClipboardIconStyle = {
        position: 'absolute',
        left: '84rem',
    }

    const SearchIconStyle = {
        position: 'absolute',
        left: '.8rem',
        top: '50%',
        transform: 'translateY(-50%)',
    }

    let filterIcon = useState(
        <HoveredIcon
            Component={FilterIcon}
            hoveredIconColor={consts.hoveredIconColor}
            unhoveredIconColor={consts.unhoveredIconColor}
            key="Building__Field__header__filterIcon"
        />
    )

    let refreshIcon = useState(
        <HoveredIcon
            Component={RefreshIcon}
            hoveredIconColor={consts.hoveredIconColor}
            unhoveredIconColor={consts.unhoveredIconColor}
            key="Building__Field__header__refreshIcon"
        />
    )
    let styleIcons = {
        position: 'absolute',
        left: '.5rem',
    }

    let [Icons, setIcons] = useState({
        peopleIcon: (
            <PeopleIcon color={consts.unhoveredIconColor} style={styleIcons} />
        ),
        calendarIcon: (
            <CalendarIcon
                color={consts.unhoveredIconColor}
                style={styleIcons}
            />
        ),
    })

    const peopleHover = () => {
        setIcons({
            ...Icons,
            peopleIcon: (
                <PeopleIcon
                    color={consts.hoveredIconColor}
                    style={styleIcons}
                />
            ),
        })
    }

    const peopleUnhover = () => {
        setIcons({
            ...Icons,
            peopleIcon: (
                <PeopleIcon
                    color={consts.unhoveredIconColor}
                    style={styleIcons}
                />
            ),
        })
    }

    const calendarHover = () => {
        setIcons({
            ...Icons,
            calendarIcon: (
                <CalendarIcon
                    color={consts.hoveredIconColor}
                    style={styleIcons}
                />
            ),
        })
    }

    const calendarUnhover = () => {
        setIcons({
            ...Icons,
            calendarIcon: (
                <CalendarIcon
                    color={consts.unhoveredIconColor}
                    style={styleIcons}
                />
            ),
        })
    }

    return (
        <div className="Building__wrapper">
            <div className="Building__header">
                <MapIcon style={mapIconStyle} />
                <DocumentIcon style={DocIconStyle} />
                <ClipboardIcon style={ClipboardIconStyle} />
                <div className="Building__header__title">
                    <span className="Building__header__title__text">
                        г. Москва, ул. Ленина, дом 7, корп. 1 (многоквартирный
                        дом)
                    </span>
                </div>
                <div className="Building__header__subtitle">
                    <ObjectTypes text="Все" width="4" />
                    <ObjectTypes text="Жилые" width="7" />
                    <ObjectTypes text="Не жилые" width="9" />
                    <ObjectTypes text="МОП и ОДИ" width="10" />
                    <ObjectTypes text="Машиноместа" width="11" />
                    <div className="Building__header__subtitle__square">
                        <span className="Building__header__subtitle__square__text">
                            Площадь: <b>25 325,8 </b>
                            кв.м
                        </span>
                    </div>
                </div>
            </div>
            <div className="Building__field">
                <div className="Building__field__header">
                    <div className="Building__field__header__search">
                        <div className="Building__field__header__search__input">
                            <SearchIcon style={SearchIconStyle} />
                            <input type="text" />
                        </div>
                    </div>
                    <div className="Building__field__header__icons">
                        {filterIcon}
                        {refreshIcon}
                    </div>
                    <div className="Building__field__header__buttons">
                        <div
                            className="Building__field__header__buttons__meetings"
                            onMouseEnter={peopleHover}
                            onMouseLeave={peopleUnhover}
                        >
                            {Icons.peopleIcon}
                            <span className="Building__field__header__buttons__meetings__text">
                                Собрания
                            </span>
                        </div>
                        <div
                            className="Building__field__header__buttons__registers"
                            onMouseEnter={calendarHover}
                            onMouseLeave={calendarUnhover}
                        >
                            {Icons.calendarIcon}
                            <span className="Building__field__header__buttons__registers__text">
                                Реестры
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Building__field__title"></div>
                <div className="Building__field__body"></div>
            </div>
            <div className="Building__footer"></div>
        </div>
    )
}

export default Building
