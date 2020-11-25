import React from 'react'

function VerticalLine(props) {
    return (
        <svg
            id={props.id}
            style={props.style}
            width={props.width}
            height={props.height}
            viewBox={`0 0 ${props.width} ${props.height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                width={props.width}
                height={props.height}
                fill="#95D160"
                id={props.id}
            />
        </svg>
    )
}

export default VerticalLine
