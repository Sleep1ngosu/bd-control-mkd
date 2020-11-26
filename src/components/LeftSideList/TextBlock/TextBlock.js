import React, { useState } from 'react'
import './TextBlock.scss'
import history from '../../../history'
import BuildsMenu from '../../BuildsMenu/BuildsMenu'

function TextBlock(props) {
    let rectangle = null,
        buildsMenu = null

    if (props.id === 'objects') {
        rectangle = (
            <div className="objects__rectangle">
                <span className="objects__rectangle__text">0</span>
            </div>
        )
    }

    const [isVisible, setVisible] = useState(false)

    props.text === 'Строения'
        ? (buildsMenu = <BuildsMenu isVisible={isVisible} />)
        : (buildsMenu = null)

    const redirectHandler = (e) => {
        if (props.text === 'Строения') {
            setVisible(!isVisible)
        } else {
            console.log(props.redirect)
            history.push(props.redirect)
            window.location.reload()
        }
    }

    return (
        <div className="left-side__textBlock__wrapper">
            <div className="left-side__textBlock" onClick={redirectHandler}>
                {rectangle}
                <span className="left-side__textBlock__text">{props.text}</span>
            </div>
            {buildsMenu}
        </div>
    )
}

export default TextBlock
