import React, { useState } from 'react'
import './FieldLeft.scss'
import DeleteIcon from '../../../../../assets/svg/icons/DeleteIcon'
import StructureBlock from './StructureBlock/StructureBlock'
import consts from '../../../../../variables/consts'

function FieldLeft(props) {
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
        <div className="ImportControl__fieldLeft__wrapper">
            <div className="ImportControl__fieldLeft__header">
                <div
                    onMouseEnter={deleteIconHover}
                    onMouseLeave={deleteIconUnhover}
                >
                    {deleteIcon}
                </div>
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
            <div className="ImportControl__fieldLeft__body">
                <StructureBlock
                    title="Московская область, г. Реутов, ул. Ленина, дом 21, корп. 4"
                    leftSubtitle="77:01:0002012:3554"
                    rightSubtitle="25 655,9 кв.м"
                />
                <StructureBlock
                    title="г. Москва, ул. Л. Толстого, дом 17"
                    leftSubtitle="77:01:0002012:3554"
                    rightSubtitle="12 575,3 кв.м"
                />
            </div>
        </div>
    )
}

export default FieldLeft
