import React, { useState } from 'react'
import './FilterOption.scss'
import RadioIcon from '../../../assets/svg/icons/RadioIcon'
import RadioActiveIcon from '../../../assets/svg/icons/RadioActiveIcon'

function FilterOption(props) {
    let radioIcon
    let [isActive, setActive] = useState(false)

    isActive ? (radioIcon = <RadioActiveIcon />) : (radioIcon = <RadioIcon />)

    const onClick = () => {
        setActive(!isActive)
    }

    return (
        <div onClick={onClick} className={`Filter__option--${props.index}`}>
            <div className="Filter__option__text">{props.title}</div>
            <div className="Filter__option__radio">{radioIcon}</div>
        </div>
    )
}

export default FilterOption
