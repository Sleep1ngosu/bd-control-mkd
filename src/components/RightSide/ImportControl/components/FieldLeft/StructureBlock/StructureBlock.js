import React from 'react'
import './StructureBlock.scss'
import VertivalLine from '../../../../../../assets/svg/Lines/VerticalLine'

function StructureBlock(props) {
    const verticalLineStyle = {
        position: 'absolute',
        left: '0',
        top: '0',
        display: 'none',
    }

    return (
        <div className="structureBlock__wrapper">
            <VertivalLine style={verticalLineStyle} width="8" height="55" />
            <div className="clip structureBlock__title">
                <span
                    title={props.title}
                    className="structureBlock__title__text"
                >
                    {props.title}
                </span>
            </div>
            <div className="structureBlock__subtitle">
                <div className="structureBlock__subtitle__left">
                    <span className="structureBlock__subtitle__left__text">
                        {props.leftSubtitle}
                    </span>
                </div>
                <div className="structureBlock__subtitle__right">
                    <span className="structureBlock__subtitle__right__text">
                        {props.rightSubtitle}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StructureBlock
