import React, { useState } from 'react'
import './TextBlock.scss'
import history from '../../../history'
import BuildsMenu from '../../BuildsMenu/BuildsMenu'
import ObjectsRectangle from '../../ObjectsSide/ObjectsRectangle/ObjectsRectangle'

function TextBlock(props) {
    let rectangle = null,
        buildsMenu = null

    if (props.id === 'objects') {
        rectangle = <ObjectsRectangle text="0" />
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
