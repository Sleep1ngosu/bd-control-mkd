import React from 'react'
import './ObjectTypes.scss'

function ObjectTypes(props) {
    let styleType

    props.active === props.index
        ? (styleType = {
              borderBottom: '.2rem solid #25213B',
              color: '#25213B',
          })
        : (styleType = null)

    const style = {
        ...styleType,
        width: `${props.width}rem`,
    }

    return (
        <div
            className={
                props.isActive
                    ? `active objectTypes__type`
                    : `objectTypes__type`
            }
            style={style}
            onClick={props.onClick}
        >
            <span className="objectTypes__type__text">{props.text}</span>
        </div>
    )
}

export default ObjectTypes
