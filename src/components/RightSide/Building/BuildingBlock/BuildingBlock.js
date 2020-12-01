import React, { useState } from 'react'
import './BuildingBlock.scss'
import BuildingColumn from './BuildingColumn/BuildingColumn'
import CheckBoxIcon from '../../../../assets/svg/icons/CheckBoxIcon'
import CheckBoxActiveIcon from '../../../../assets/svg/icons/CheckBoxActiveIcon'
import ShapeDownIcon from '../../../../assets/svg/icons/ShapeDownIcon'
import ShapeUpIcon from '../../../../assets/svg/icons/ShapeUpIcon'
import MoreIcon from '../../../../assets/svg/icons/MoreIcon'
import HoveredIcon from '../../../../HOCs/HoveredIcon'
import BuildingToggleBlock from './BuildingToggleBlock/BuildingToggleBlock'
import consts from '../../../../variables/consts'

function BuildingBlock(props) {
    const [shapeIsActive, setShapeActive] = useState(false)
    const [checkBoxIsActive, setCheckBoxActive] = useState(false)
    let [titleHeight, setTitleHeight] = useState({ height: '2.8rem' })

    let shapeStyle,
        shapeActiveStyle,
        checkBoxStyle,
        checkBoxActiveStyle,
        isHiddenToggleBlock

    let moreIcon = (
        <HoveredIcon
            Component={MoreIcon}
            hoveredIconColor={consts.hoveredMoreIconColor}
            unhoveredIconColor={consts.unhoveredMoreIconColor}
            id={`BuildingBlock__moreIcon__${props.index}`}
        />
    )

    if (shapeIsActive) {
        shapeStyle = { display: 'none' }
        shapeActiveStyle = { display: 'block' }
        isHiddenToggleBlock = 'false'
    } else {
        shapeStyle = { display: 'block' }
        shapeActiveStyle = { display: 'none' }
        isHiddenToggleBlock = 'true'
    }

    if (checkBoxIsActive) {
        checkBoxStyle = { display: 'none' }
        checkBoxActiveStyle = { display: 'block' }
    } else {
        checkBoxStyle = { display: 'block' }
        checkBoxActiveStyle = { display: 'none' }
    }

    let [styleWrapper, setStyleWrapper] = useState({
        height: '5.6rem',
    })

    const shapeHandler = () => {
        setShapeActive(!shapeIsActive)
        if (styleWrapper.height === 'auto') {
            setStyleWrapper({ height: '5.6rem' })
            setTitleHeight({ height: '2.8rem' })
        } else if (styleWrapper.height === '5.6rem') {
            setStyleWrapper({ height: 'auto' })
            setTitleHeight({ height: 'auto' })
        }
    }

    const checkBoxHandler = () => {
        setCheckBoxActive(!checkBoxIsActive)
    }

    let rectangleTopStyle, rectangleBottomStyle

    props.rectangleTop === '0'
        ? (rectangleTopStyle = { backgroundColor: '#FFE0E0', color: '#D30000' })
        : (rectangleTopStyle = { backgroundColor: '#CDFFCD', color: '#007F00' })

    props.rectangleBottom === '0'
        ? (rectangleBottomStyle = {
              backgroundColor: '#FFE0E0',
              color: '#D30000',
          })
        : (rectangleBottomStyle = {
              backgroundColor: '#CDFFCD',
              color: '#007F00',
          })

    return (
        <div className="BuildingBlock__wrapper__wrapper">
            <div className="BuildingBlock__checkBoxIcon__wrapper">
                <div
                    style={checkBoxStyle}
                    className="BuildingBlock__checkBoxIcon"
                    onClick={checkBoxHandler}
                >
                    <CheckBoxIcon />
                </div>
                <div
                    style={checkBoxActiveStyle}
                    className="BuildingBlock__checkBoxActiveIcon"
                    onClick={checkBoxHandler}
                >
                    <CheckBoxActiveIcon />
                </div>
            </div>

            <div className="BuildingBlock__moreIcon">{moreIcon}</div>

            <div className="BuildingBlock__rectangles">
                <div
                    className="BuildingBlock__rectangle__top"
                    style={rectangleTopStyle}
                >
                    {props.rectangleTop}
                </div>
                <div
                    className="BuildingBlock__rectangle__bottom"
                    style={rectangleBottomStyle}
                >
                    {props.rectangleBottom}
                </div>
            </div>

            <div
                style={styleWrapper}
                className="BuildingBlock__wrapper"
                onClick={shapeHandler}
            >
                <div
                    style={shapeStyle}
                    className="BuildingBlock__shapeDownIcon"
                >
                    <ShapeDownIcon />
                </div>

                <div
                    style={shapeActiveStyle}
                    className="BuildingBlock__shapeUpIcon"
                >
                    <ShapeUpIcon />
                </div>

                <BuildingColumn
                    title={props.title_1}
                    subtitle={props.subtitle_1}
                    titleHeight={titleHeight}
                    width="36rem"
                    marginLeft="8rem"
                    fontSizeTitle="1.4rem"
                    fontSizeSubtitle="1.4rem"
                />
                <div className="BuildingBlock__column__right">
                    <BuildingColumn
                        title={props.title_2}
                        subtitle={props.subtitle_2}
                        fontSizeTitle="1.4rem"
                        fontSizeSubtitle="1.2rem"
                        width="11.2rem"
                        marginLeft="4rem"
                    />
                    <BuildingColumn
                        title={props.title_3}
                        subtitle={props.subtitle_3}
                        fontSizeTitle="1.4rem"
                        fontSizeSubtitle="1.2rem"
                        width="10.4rem"
                        marginLeft="4rem"
                    />
                    <BuildingColumn
                        title={props.title_4}
                        subtitle={props.subtitle_4}
                        fontSizeTitle="1.2rem"
                        fontSizeSubtitle="1.2rem"
                        width="11.2rem"
                        marginLeft=".5rem"
                        status={props.status}
                    />
                    <BuildingColumn
                        title={props.title_5}
                        subtitle={props.subtitle_5}
                        colorTitle="#6E6893"
                        fontSizeTitle="1.2rem"
                        fontSizeSubtitle="1.2rem"
                        width="12.8rem"
                        marginLeft="6rem"
                    />
                </div>
            </div>
            {/* <div className="BuildingBlock__menu"></div> */}
            <div className="BuildingBlock__toggleBlock">
                <BuildingToggleBlock isHidden={isHiddenToggleBlock} />
            </div>
        </div>
    )
}

export default BuildingBlock
