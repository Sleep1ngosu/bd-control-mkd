import React, { useState } from 'react'
import './App.scss'
import LeftSideBlock from './components/LeftSideBlock/LeftSideBlock'
import LeftSideList from './components/LeftSideList/LeftSideList'
import arrays from './variables/arrays'

function App() {
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

    // const leftSideBlockList = arrays.blocks.map((value, index) => {
    //     return (
    //         <LeftSideBlock
    //             text={value}
    //             id={arrays.ids[index]}
    //             onClick={(e) => changeListVisibility(e)}
    //             isClicked={listVisibility[arrays.ids[index]].isVisible}
    //         />
    //     )
    // })

    return (
        <div className="App">
            <div className="left-side__wrapper">
                <div className="left-side__wrapper__logo">
                    <span className="left-side__wrapper__logo__text">LOGO</span>
                </div>
                <LeftSideBlock
                    text="ДАННЫЕ"
                    id="data"
                    onClick={(e) => changeListVisibility(e)}
                    isClicked={listVisibility.data.isVisible}
                />
                <LeftSideList
                    arr={arrays.lists.data}
                    id="data"
                    style={listVisibility.data.display}
                />
                <LeftSideBlock
                    text="ОБЪЕКТЫ"
                    id="objects"
                    onClick={(e) => changeListVisibility(e)}
                    isClicked={listVisibility.objects.isVisible}
                />
                <LeftSideList
                    arr={arrays.lists.objects}
                    id="objects"
                    style={listVisibility.objects.display}
                />
                <LeftSideBlock
                    text="РЕЕСТРЫ"
                    id="registers"
                    onClick={(e) => changeListVisibility(e)}
                    isClicked={listVisibility.registers.isVisible}
                />
                <LeftSideList
                    arr={arrays.lists.registers}
                    id="registers"
                    style={listVisibility.registers.display}
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
            <div className="right-side__wrapper"></div>
        </div>
    )
}

export default App
