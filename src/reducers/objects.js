import { CLEAR_OBJECT, SET_OBJECT } from '../actions/actions'

const initialState = {
	cad_num: '',
	address: '',
	square: '',
	purpose: '',
	input_date: '',
	stages: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_OBJECT: {
			return {
				...state,
				...action.payload,
			}
		}
		case CLEAR_OBJECT: {
			return {
				...initialState,
			}
		}
		default: {
			return state
		}
	}
}
