import React from 'react'
import './Filter.scss'
import FilterOption from './FilterOption/FilterOption'
import arrays from '../../variables/arrays'

function Filter(props) {
    const optionsList = arrays.FilterOptions.map((value, index) => {
        return (
            <FilterOption
                key={`Filter__option--${index}`}
                title={value}
                index={index + 1}
                onClick={() => props.onClick(index)}
                active={props.active + 1}
            />
        )
    })

    return (
        <div className="Filter__wrapper">
            <div className="Filter__title">фильтр:</div>
            <div className="Filter__options">{optionsList}</div>
        </div>
    )
}

export default Filter
