import { SET_OBJECT, CLEAR_OBJECT } from './actions'

export const setObject = (payload) => async (dispatch) => {
	dispatch({ type: SET_OBJECT, payload })
}

export const clearObject = () => async (dispatch) => {
	dispatch({ type: CLEAR_OBJECT })
}
