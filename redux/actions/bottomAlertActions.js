import * as ActionTypes from '../constants';

export const onSetComponentVisibility = (value, message) => {
	return {
		type: ActionTypes.SET_BOTTOM_ALERT_ERROR,
		payload: { isVisible: value, message },
	};
};
