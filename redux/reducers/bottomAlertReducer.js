import * as ActionTypes from '../constants';

const initialState = {
	isVisible: false,
	message: '',
};

const bottomAlertReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_BOTTOM_ALERT_ERROR:
			return {
				...state,
				isVisible: action.payload.isVisible,
				message: action.payload.message,
			};
		default:
			return state;
	}
};

export default bottomAlertReducer;
