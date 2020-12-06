import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import history from './history'
import reducers from './store/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />,
        </Router>
    </Provider>,
    document.getElementById('root')
)
