import React from 'react'
import './TextBlock.scss'
import history from '../../../history'

function TextBlock(props) {
    let rectangle = null

    if (props.id === 'objects') {
        rectangle = (
            <div className="objects__rectangle">
                <span className="objects__rectangle__text">0</span>
            </div>
        )
    }

    const redirectHandler = (e) => {
        console.log(props.redirect)
        history.push(props.redirect)
        window.location.reload()
    }

    return (
        <div className="left-side__textBlock__wrapper">
            <div className="left-side__textBlock" onClick={redirectHandler}>
                {rectangle}
                <span className="left-side__textBlock__text">{props.text}</span>
            </div>
        </div>
    )
}

export default TextBlock
