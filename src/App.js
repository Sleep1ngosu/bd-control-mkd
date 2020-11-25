import React, { useState } from 'react'
import './App.scss'
import LeftSideBlock from './components/LeftSideBlock/LeftSideBlock'
import LeftSideList from './components/LeftSideList/LeftSideList'
import AddObject from './components/RightSide/AddObject/AddObject'
import arrays from './variables/arrays'
import { Switch, Route } from 'react-router-dom'
import ImportControl from './components/RightSide/ImportControl/ImportControl'
import BuildsMenu from './components/BuildsMenu/BuildsMenu'

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
                <BuildsMenu />
            </div>
            <div className="right-side__wrapper">
                <Switch>
                    <Route
                        exact
                        path="/add-object"
                        render={() => <AddObject title="Добавить Объект" />}
                    />
                    <Route
                        exact
                        path="/import-control"
                        render={() => (
                            <ImportControl title="Контроль импорта выписок из егрн" />
                        )}
                    />
                </Switch>
            </div>
        </div>
    )
}

export default App

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
