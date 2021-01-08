import { combineReducers } from 'redux'
import blocker from './blocker'
import objects from './objects'

export default combineReducers({
	blocker,
	objects,
})
