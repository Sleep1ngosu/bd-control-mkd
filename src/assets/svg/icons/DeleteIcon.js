import React from 'react'

function DeleteIcon(props) {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H31.5V31.5H3C1.61929 31.5 0.5 30.3807 0.5 29V3Z"
                fill="white"
                stroke={props.color}
            />
            <path
                d="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V11H10V23ZM12 13H20V23H12V13ZM19.5 8L18.5 7H13.5L12.5 8H9V10H23V8H19.5Z"
                fill={props.color}
            />
        </svg>
    )
}

export default DeleteIcon
