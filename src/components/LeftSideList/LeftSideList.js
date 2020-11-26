import React from 'react'
import './LeftSideList.scss'
import TextBlock from './TextBlock/TextBlock'
import ObjectsSelect from './ObjectsSelect/ObjectsSelect'

function LeftSideList(props) {
    const style = {
        display: props.style,
    }

    let list,
        select = null

    if (props.id === 'objects') {
        select = <ObjectsSelect marginBottom="2.5rem" />
    }

    if (props.arr) {
        list = props.arr.map((value, index) => {
            return (
                <TextBlock
                    key={`leftSideList__text__${index}`}
                    text={value}
                    id={props.id}
                    redirect={props.redirect[index]}
                />
            )
        })
    }

    if (list) {
        return (
            <div className="leftSideList__wrapper" style={style}>
                {select}
                {list}
            </div>
        )
    }

    return null
}

export default LeftSideList
