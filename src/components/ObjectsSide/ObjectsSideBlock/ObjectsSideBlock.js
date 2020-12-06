import React from 'react'
import './ObjectsSideBlock.scss'
import ObjectsRectangle from '../ObjectsRectangle/ObjectsRectangle'
import arrays from '../../../variables/arrays'

function ObjectsSideBlock(props) {
    return (
        <div className="ObjectsSideBlock__wrapper">
            <div className="ObjectsSideBlock__field">
                <span className="ObjectsSideBlock__field__text">
                    {props.text}
                </span>
                <ObjectsRectangle
                    text={arrays.counterBuildings[props.index]}
                    style={{ right: '1.2rem' }}
                />
            </div>
        </div>
    )
}

export default ObjectsSideBlock
