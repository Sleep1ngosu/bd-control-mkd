import React, { useState } from 'react'
import './MainLeftSide.scss'
import LeftSideBlock from '../LeftSideBlock/LeftSideBlock'
import LeftSideList from '../LeftSideList/LeftSideList'
import arrays from '../../variables/arrays'

function MainLeftSide(props) {
    const [listVisibility, setListVisibility] = useState({
        data: {
            isVisible: false,
        },
        objects: {
            isVisible: false,
        },
        registers: {
            isVisible: false,
        },
        meetings: {
            isVisible: false,
        },
        settings: {
            isVisible: false,
        },
    })

    for (let key in listVisibility) {
        if (listVisibility[key].isVisible) {
            listVisibility[key].display = 'block'
        } else if (!listVisibility[key].isVisible) {
            listVisibility[key].display = 'none'
        }
    }

    const changeListVisibility = (e) => {
        if (listVisibility[e.target.id].isVisible === true) {
            setListVisibility({
                ...listVisibility,
                [e.target.id]: {
                    isVisible: false,
                },
            })
        } else {
            for (let key in listVisibility) {
                if (listVisibility[key].isVisible) {
                    listVisibility[key].isVisible = false
                }
            }

            setListVisibility({
                ...listVisibility,
                [e.target.id]: {
                    isVisible: !listVisibility[e.target.id].isVisible,
                },
            })
        }
    }

    return (
        <div>
            <LeftSideBlock
                text="ДАННЫЕ"
                id="data"
                onClick={(e) => changeListVisibility(e)}
                isClicked={listVisibility.data.isVisible}
            />
            <LeftSideList
                arr={arrays.lists.data.list}
                id="data"
                style={listVisibility.data.display}
                redirect={arrays.lists.data.redirect}
            />
            <LeftSideBlock
                text="ОБЪЕКТЫ"
                id="objects"
                onClick={(e) => changeListVisibility(e)}
                isClicked={listVisibility.objects.isVisible}
            />
            <LeftSideList
                arr={arrays.lists.objects.list}
                id="objects"
                style={listVisibility.objects.display}
                redirect={arrays.lists.objects.redirect}
            />
            <LeftSideBlock
                text="РЕЕСТРЫ"
                id="registers"
                onClick={(e) => changeListVisibility(e)}
                isClicked={listVisibility.registers.isVisible}
            />
            <LeftSideList
                arr={arrays.lists.registers.list}
                id="registers"
                style={listVisibility.registers.display}
                redirect={arrays.lists.registers.redirect}
            />
            <LeftSideBlock
                text="СОБРАНИЯ"
                id="meetings"
                onClick={(e) => changeListVisibility(e)}
                isClicked={listVisibility.meetings.isVisible}
            />
            <LeftSideBlock
                text="НАСТРОЙКИ"
                id="settings"
                onClick={(e) => changeListVisibility(e)}
                isClicked={listVisibility.settings.isVisible}
            />
        </div>
    )
}

export default MainLeftSide
