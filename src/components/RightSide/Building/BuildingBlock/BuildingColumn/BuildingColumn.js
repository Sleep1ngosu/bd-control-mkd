import React from 'react'
import './BuildingColumn.scss'
import CircleBlueIcon from '../../../../../assets/svg/icons/CircleBlueIcon'
import CircleRedIcon from '../../../../../assets/svg/icons/CircleRedIcon'

function BuildingColumn(props) {
    const style = {
        width: props.width,
        marginLeft: props.marginLeft,
        paddingLeft: props.paddingLeft,
    }

    const fontSizeTitle = {
        fontSize: props.fontSizeTitle,
        color: props.colorTitle,
        ...props.titleHeight,
    }

    const fontSizeSubtitle = {
        fontSize: props.fontSizeSubtitle,
    }
    let statusTitleStyle, statusSubtitleStyle, renderedCircle
    let circleStyle = {
        position: 'absolute',
        left: '.5rem',
        top: '.6rem',
    }

    if (props.status) {
        statusTitleStyle = { display: 'block' }
        statusSubtitleStyle = { paddingLeft: '1.5rem' }
    } else {
        statusTitleStyle = { display: 'none' }
    }

    if (props.status === 'true') {
        statusTitleStyle = { ...statusTitleStyle, color: '#4A4AFF' }
        renderedCircle = <CircleBlueIcon style={circleStyle} />
    } else if (props.status === 'false') {
        statusTitleStyle = {
            ...statusTitleStyle,
            color: '#D30000',
            backgroundColor: '#FFE0E0',
        }
        renderedCircle = <CircleRedIcon style={circleStyle} />
    }

    return (
        <div className="BuildingBlock__column" style={style}>
            <div
                style={fontSizeTitle}
                title={props.title}
                className="BuildingBlock__column__title"
            >
                <div style={statusTitleStyle} className="BuildingBlock__status">
                    {renderedCircle}
                    {props.title}
                </div>
                {props.status ? null : props.title}
            </div>
            <div
                style={statusSubtitleStyle}
                className="BuildingBlock__column__subtitle"
            >
                <span
                    style={fontSizeSubtitle}
                    className="BuildingBlock__column__subtitle__text"
                    title={props.subtitle}
                >
                    {props.subtitle}
                </span>
            </div>
        </div>
    )
}

export default BuildingColumn
