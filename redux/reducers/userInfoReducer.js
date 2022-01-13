import { USERINFO_DETAILS } from '../constants';
const initialState = {
	userInfoDetails: {
		userName: '',
		accessToken: '',
		userGuid: '',
		roleGuid: '',
		profileName: '',
		profilepicture: '',
		profilepicturepath: '',
		centerclientGuid: '',
		clientTypeGuid: '',
		clientlabType: '',
	},
};

const userInfoReducer = (state = initialState, action) => {
	switch (action.type) {
		case USERINFO_DETAILS: {
			return {
				...state,
				userInfoDetails: action.payload || state.userInfoDetails,
			};
		}
		default:
			return state;
	}
};
export default userInfoReducer;
