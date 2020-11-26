import React, { useState } from 'react'

const HoveredIcon = ({
    Component,
    style,
    hoveredIconColor,
    unhoveredIconColor,
    onClick,
    id,
}) => {
    let [Icon, setIcon] = useState(
        <Component color={unhoveredIconColor} id={id} />
    )

    const IconHover = () => {
        setIcon(<Component color={hoveredIconColor} id={id} />)
    }

    const IconUnhover = () => {
        setIcon(<Component color={unhoveredIconColor} id={id} />)
    }

    return (
        <div
            style={style}
            onMouseEnter={IconHover}
            onMouseLeave={IconUnhover}
            onClick={onClick}
            id={id}
        >
            {Icon}
        </div>
    )
}

export default HoveredIcon
