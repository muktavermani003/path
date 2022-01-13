import { USERINFO_DETAILS } from '../constants';
export function setUserInfoDetails(val) {
	return {
		type: USERINFO_DETAILS,
		payload: val,
	};
}
