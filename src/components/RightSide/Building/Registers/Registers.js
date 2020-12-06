import React from 'react'
import './Registers.scss'
import Option from './Option/Option'
import ExcelIcon from '../../../../assets/svg/icons/Files/ExcelIcon'
import WordIcon from '../../../../assets/svg/icons/Files/WordIcon'
import PdfIcon from '../../../../assets/svg/icons/Files/PdfIcon'
import Button from './Button/Button'
import arrays from '../../../../variables/arrays'

function Registers(props) {
    const optionListStyle = { width: '29.2rem' }
    const optionList = arrays.RegistersMenu.options.map((value, index) => {
        return (
            <Option
                key={`Building__registers__option--${index}`}
                title={value}
                style={optionListStyle}
            />
        )
    })

    let registerStyle

    props.isVisible
        ? (registerStyle = { display: 'flex' })
        : (registerStyle = { display: 'none' })

    const optionListCalendarStyle = { width: '25.5rem' }

    return (
        <div style={registerStyle} className="Building__registers__wrapper">
            <div className="Building__registers__header">
                формирование реестров
            </div>
            <div className="Building__registers__body">
                <div className="Building__registers__body__left">
                    {optionList}
                </div>
                <div className="Building__registers__body__right">
                    <div className="Building__registers__body__right__calendar">
                        <Option
                            style={optionListCalendarStyle}
                            title="На текущую дату"
                        />
                        <Option style={optionListCalendarStyle} title="На" />
                        <Option
                            style={optionListCalendarStyle}
                            title="История изменений"
                        />
                    </div>
                </div>
            </div>
            <div className="Building__registers__footer">
                <div className="Building__registers__footer__icons">
                    <div className="Building__registers__footer__icons__wordIcon">
                        <WordIcon />
                    </div>
                    <div className="Building__registers__footer__icons__excelIcon">
                        <ExcelIcon />
                    </div>
                    <div className="Building__registers__footer__icons__pdfIcon">
                        <PdfIcon />
                    </div>
                </div>
                <div className="Building__registers__footer__buttons">
                    <div className="Building__registers__footer__buttons--1">
                        <Button
                            style={{
                                backgroundColor: '#6D5BD0',
                                color: 'white',
                            }}
                            text="печать"
                        />
                    </div>
                    <div className="Building__registers__footer__buttons--2">
                        <Button
                            style={{
                                backgroundColor: 'white',
                                color: '#6D5BD0',
                                marginLeft: '1rem',
                            }}
                            text="отмена"
                            onClick={props.onClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registers
