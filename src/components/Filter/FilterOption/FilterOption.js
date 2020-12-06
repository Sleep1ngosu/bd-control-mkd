import React from 'react'
import './FilterOption.scss'
import RadioIcon from '../../../assets/svg/icons/RadioIcon'
import RadioActiveIcon from '../../../assets/svg/icons/RadioActiveIcon'

function FilterOption(props) {
    let radioIcon
    props.active === props.index
        ? (radioIcon = <RadioActiveIcon />)
        : (radioIcon = <RadioIcon />)

    return (
        <div
            onClick={props.onClick}
            className={`Filter__option--${props.index}`}
        >
            <div className="Filter__option__text">{props.title}</div>
            <div className="Filter__option__radio">{radioIcon}</div>
        </div>
    )
}

export default FilterOption
