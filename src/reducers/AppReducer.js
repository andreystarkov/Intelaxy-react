import { CHANGE_VIEWPORT } from '../actions/constants'

const initialState = {
	viewPort: ''
};

export default function AppReducer(state = initialState, action) {

	let newState;
	const { type, payload } = action;

	switch (type) {
		case CHANGE_VIEWPORT:
			return (
				newState = {
					...state, viewPort: payload
				}
			);
		default:
			newState = state
	}

	return newState;

}