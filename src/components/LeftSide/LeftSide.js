import React from 'react'
import './LeftSide.scss'
import MainLeftSide from '../MainLeftSide/MainLeftSide'

function LeftSide() {
    return (
        <div className="left-side__main">
            <div className="left-side__wrapper__logo">
                <span className="left-side__wrapper__logo__text">LOGO</span>
            </div>
            <MainLeftSide />
        </div>
    )
}

export default LeftSide
