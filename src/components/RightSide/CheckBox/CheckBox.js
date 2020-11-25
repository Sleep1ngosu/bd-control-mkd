import React, { useState } from 'react'
import './CheckBox.scss'
import CheckBoxIcon from '../../../assets/svg/icons/CheckBoxIcon'
import CheckBoxActiveIcon from '../../../assets/svg/icons/CheckBoxActiveIcon'

function CheckBox(props) {
    const [visibility, setVisibility] = useState({
        checkbox: {
            isVisible: true,
        },
        checkboxActive: {
            isVisible: false,
        },
        isActive: false,
    })

    let styleCheckbox, styleCheckboxActive

    visibility.checkbox.isVisible === true
        ? (styleCheckbox = { display: 'block' })
        : (styleCheckbox = { display: 'none' })

    visibility.checkboxActive.isVisible === true
        ? (styleCheckboxActive = { display: 'block' })
        : (styleCheckboxActive = { display: 'none' })

    const checkboxHandler = (e) => {
        setVisibility({
            checkbox: {
                isVisible: !visibility.checkbox.isVisible,
            },
            checkboxActive: {
                isVisible: !visibility.checkboxActive.isVisible,
            },
            isActive: !visibility.isActive,
        })
    }

    return (
        <div className="checkbox__wrapper" style={props.style}>
            <div
                className="checkbox"
                id="checkbox"
                onClick={(e) => checkboxHandler(e)}
                style={styleCheckbox}
            >
                <CheckBoxIcon />
            </div>
            <div
                className="checkboxActive"
                id="checkboxActive"
                style={styleCheckboxActive}
                onClick={(e) => checkboxHandler(e)}
            >
                <CheckBoxActiveIcon />
            </div>
        </div>
    )
}

export default CheckBox
