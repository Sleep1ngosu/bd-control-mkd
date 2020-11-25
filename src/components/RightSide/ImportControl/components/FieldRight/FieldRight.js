import React, { useState } from 'react'
import './FieldRight.scss'
import DeleteIcon from '../../../../../assets/svg/icons/DeleteIcon'
import RoomBlock from './RoomBlock/RoomBlock'
import consts from '../../../../../variables/consts'

function FieldRight(props) {
    let [deleteIcon, setDeleteIcon] = useState(
        <DeleteIcon color={consts.unhoveredIconColor} />
    )

    const deleteIconHover = () => {
        setDeleteIcon(<DeleteIcon color={consts.hoveredIconColor} />)
    }

    const deleteIconUnhover = () => {
        setDeleteIcon(<DeleteIcon color={consts.unhoveredIconColor} />)
    }

    return (
        <div className="ImportControl__fieldRight__wrapper">
            <div className="ImportControl__fieldRight__header">
                <div
                    onMouseEnter={deleteIconHover}
                    onMouseLeave={deleteIconUnhover}
                >
                    {deleteIcon}
                </div>
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
            <div className="ImportControl__fieldRight__body">
                <RoomBlock
                    leftTitle="Иванов Иван Иванович"
                    leftSubtitle="77:01:0002012:3554"
                    centerTitle="55,9 кв.м"
                    centerSubtitle="доля 1/2"
                    rightTitle="кв. 12"
                />
                <RoomBlock
                    leftTitle="Иванов Иван Иванович"
                    leftSubtitle="77:01:0002012:3554"
                    centerTitle="55,9 кв.м"
                    centerSubtitle="доля 1/2"
                    rightTitle="кв. 12"
                />
                <RoomBlock
                    leftTitle="Иванов Иван Иванович"
                    leftSubtitle="77:01:0002012:3554"
                    centerTitle="55,9 кв.м"
                    centerSubtitle="доля 1/2"
                    rightTitle="кв. 12"
                />
            </div>
        </div>
    )
}

export default FieldRight
