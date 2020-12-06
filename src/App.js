import React from 'react'
import { connect } from 'react-redux'
import './App.scss'
import AddObject from './components/RightSide/AddObject/AddObject'
import { Switch, Route } from 'react-router-dom'
import ImportControl from './components/RightSide/ImportControl/ImportControl'
import ObjectsSide from './components/ObjectsSide/ObjectsSide'
import ObjectsSideHeader from './components/ObjectsSide/ObjectsSideHeader/ObjectsSideHeader'
import Building from './components/RightSide/Building/Building'
import LeftSide from './components/LeftSide/LeftSide'

function App(props) {
    let blockedStyle
    props.isBlocked
        ? (blockedStyle = { display: 'block' })
        : (blockedStyle = { display: 'none' })

    return (
        <div className="App">
            <div style={blockedStyle} className="blocked"></div>
            <Switch>
                <Route path="/buildings" component={ObjectsSideHeader} />
            </Switch>
            <div className="left-side__wrapper">
                <Switch>
                    <Route path="/buildings" component={ObjectsSide} />
                    <Route path="/" component={LeftSide} />
                </Switch>
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

                    <Route path="/buildings" component={Building} />
                </Switch>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isBlocked: state.blocker,
    }
}

export default connect(mapStateToProps)(App)

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
