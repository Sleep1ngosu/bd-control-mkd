import React from 'react'
import './App.scss'
import AddObject from './components/RightSide/AddObject/AddObject'
import { Switch, Route } from 'react-router-dom'
import ImportControl from './components/RightSide/ImportControl/ImportControl'
import MainLeftSide from './components/MainLeftSide/MainLeftSide'
import ObjectsSide from './components/ObjectsSide/ObjectsSide'
import ObjectsSideHeader from './components/ObjectsSide/ObjectsSideHeader/ObjectsSideHeader'

function App() {
    return (
        <div className="App">
            {/* <ObjectsSideHeader /> */}
            <div className="left-side__wrapper">
                {/* <ObjectsSide /> */}
                <div className="left-side__main">
                    <div className="left-side__wrapper__logo">
                        <span className="left-side__wrapper__logo__text">
                            LOGO
                        </span>
                    </div>
                    <MainLeftSide />
                </div>
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
