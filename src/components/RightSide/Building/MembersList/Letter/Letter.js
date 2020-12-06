import React from 'react'
import './Letter.scss'

function Letter(props) {
    return (
        <div className="Letter">
            <b>{props.text}</b>
        </div>
    )
}

export default Letter
