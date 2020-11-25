import React from 'react'
import './Field.scss'
import DeleteIcon from '../../../../../assets/svg/icons/DeleteIcon'
import Input from '../Input/Input'
import arrays from '../../../../../variables/arrays'
import consts from '../../../../../variables/consts'

function Field(props) {
    const inputList = arrays.labels.structure.map((value, index) => {
        return <Input key={`addObject__field__input__${index}`} label={value} />
    })

    return (
        <div className="addObject__field">
            <div className="addObject__field__header">
                <DeleteIcon
                    style={{ marginLeft: '3.2rem' }}
                    color={consts.unhoveredIconColor}
                />
            </div>
            <div className="addObject__field__title">
                <span className="addObject__field__title__text">
                    {props.title}
                </span>
            </div>
            {inputList}
            <div className="addObject__field__footer"></div>
        </div>
    )
}

export default Field
