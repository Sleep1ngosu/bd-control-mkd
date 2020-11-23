import React from 'react'
import './FieldRight.scss'
import DeleteIcon from '../../../../../assets/svg/icons/DeleteIcon'

function FieldRight(props) {
    return (
        <div className="ImportControl__fieldRight__wrapper">
            <div className="ImportControl__fieldRight__header">
                <DeleteIcon />
            </div>
            <div className="ImportControl__fieldRight__title">
                <div className="ImportControl__fieldRight__title__leftTitle">
                    <span className="ImportControl__fieldRight__title__leftTitle__text">
                        {props.leftTitle}
                    </span>
                </div>
                <div className="ImportControl__fieldRight__title__centerTitle">
                    <span className="ImportControl__fieldRight__title__centerTitle__text">
                        {props.centerTitle}
                    </span>
                </div>
                <div className="ImportControl__fieldRight__title__rightTitle">
                    <span className="ImportControl__fieldRight__title__rightTitle__text">
                        {props.rightTitle}
                    </span>
                </div>
            </div>
            <div className="ImportControl__fieldRight__body"></div>
        </div>
    )
}

export default FieldRight
