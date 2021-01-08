import * as actionTypes from '../actions/actions'

const initialState = {
	blocker: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_BLOCKER:
			return {
				blocker: true,
			}
		case actionTypes.REMOVE_BLOCKER:
			return {
				blocker: false,
			}
		default:
			return state
	}
}

export default reducer
