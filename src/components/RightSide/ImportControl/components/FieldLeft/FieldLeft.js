import React from 'react'
import './FieldLeft.scss'
import DeleteIcon from '../../../../../assets/svg/icons/DeleteIcon'

function FieldLeft(props) {
    return (
        <div className="ImportControl__fieldLeft__wrapper">
            <div className="ImportControl__fieldLeft__header">
                <DeleteIcon />
            </div>
            <div className="ImportControl__fieldLeft__title">
                <div className="ImportControl__fieldLeft__title__leftTitle">
                    <span className="ImportControl__fieldLeft__title__leftTitle__text">
                        {props.leftTitle}
                    </span>
                </div>
                <div className="ImportControl__fieldLeft__title__rightTitle">
                    <span className="ImportControl__fieldLeft__title__rightTitle__text">
                        {props.rightTitle}
                    </span>
                </div>
            </div>
            <div className="ImportControl__fieldLeft__body"></div>
        </div>
    )
}

export default FieldLeft
