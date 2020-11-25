import React, { useState } from 'react'

const HoveredIcon = ({
    Component,
    style,
    hoveredIconColor,
    unhoveredIconColor,
}) => {
    let [Icon, setIcon] = useState(<Component color={unhoveredIconColor} />)

    const IconHover = () => {
        setIcon(<Component color={hoveredIconColor} />)
    }

    const IconUnhover = () => {
        setIcon(<Component color={unhoveredIconColor} />)
    }

    return (
        <div style={style} onMouseEnter={IconHover} onMouseLeave={IconUnhover}>
            {Icon}
        </div>
    )
}

export default HoveredIcon
