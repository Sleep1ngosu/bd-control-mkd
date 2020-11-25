import React from 'react'
import './RoomBlock.scss'
// import CheckBox from '../../../../../../assets/svg/icons/CheckBoxIcon'
// import CheckBoxActive from '../../../../../../assets/svg/icons/CheckBoxActiveIcon'
import CheckBox from '../../../../CheckBox/CheckBox'

function RoomBlock(props) {
    const style = {
        position: 'absolute',
        left: '2.5rem',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '2rem',
        height: '2rem',
    }

    return (
        <div className="RoomBlock__wrapper">
            <div className="RoomBlock__left">
                <CheckBox style={style} />
                <div className="RoomBlock__block RoomBlock__left__title">
                    <span className="RoomBlock__title RoomBlock__left__title__text">
                        {props.leftTitle}
                    </span>
                </div>
                <div className="RoomBlock__block RoomBlock__left__subtitle">
                    <span className="RoomBlock__subtitle RoomBlock__left__subtitle__text">
                        {props.leftSubtitle}
                    </span>
                </div>
            </div>
            <div className="RoomBlock__center">
                <div className="RoomBlock__block RoomBlock__center__title">
                    <span className="RoomBlock__title RoomBlock__center__title__text">
                        {props.centerTitle}
                    </span>
                </div>
                <div className="RoomBlock__block RoomBlock__center__subtitle">
                    <span className="RoomBlock__subtitle RoomBlock__center__subtitle__text">
                        {props.centerSubtitle}
                    </span>
                </div>
            </div>
            <div className="RoomBlock__right">
                <div className="RoomBlock__block RoomBlock__right__title">
                    <span className="RoomBlock__title RoomBlock__right__title__text">
                        {props.rightTitle}
                    </span>
                </div>
                <div className="RoomBlock__block RoomBlock__right__subtitle">
                    <span className="RoomBlock__subtitle RoomBlock__right__subtitle__text">
                        {props.rightSubtitle}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RoomBlock
