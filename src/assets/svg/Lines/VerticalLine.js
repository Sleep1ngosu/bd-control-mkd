import React from 'react'

function VerticalLine(props) {
    return (
        <svg
            id={props.id}
            style={props.style}
            width="8"
            height="70"
            viewBox="0 0 8 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="8" height="70" fill="#95D160" id={props.id} />
        </svg>
    )
}

export default VerticalLine
