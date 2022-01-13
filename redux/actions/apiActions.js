import axios from 'axios';
import { API_BEGIN, API_FAIL, API_SUCCESS, NO_LOADER } from '../constants';
import URL from '../URL';
import { onSetComponentVisibility } from '../actions/bottomAlertActions';

export const fetchProductsBegin = () => ({
	type: API_BEGIN,
});

export const removeLoader = () => ({
	type: NO_LOADER,
});

export const fetchProductsSuccess = data => ({
	type: API_SUCCESS,
	payload: data,
});

export const fetchProductsFailure = error => ({
	type: API_FAIL,
	payload: { error },
});
export const fetchProductsFailureLogin = error => ({
	type: API_FAIL,
	payload: { tag: 'login', invalidCred: true },
});
//USING AXIOS

export function callAPI(url, apiType, params, token, tagName = null) {
	let baseUrl = URL.dev;
	console.log(baseUrl+url ,"abc")
	if (apiType === 'get') {
		const request = axios.get(baseUrl + url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			// timeout: 7000,
		});
		console.log('header-----------' + JSON.stringify(request));
		return dispatch => {
			if (tagName === 'refreshToken') {
				dispatch(removeLoader());
			} else {
				dispatch(fetchProductsBegin());
			}

			return request
				.then(data => {
					// Handle Success response here
					let modifyData = data.data;
					if (tagName) {
						modifyData.tag = tagName;
					}
					dispatch(fetchProductsSuccess(modifyData));
					return modifyData;
				})
				.catch(error => {
					// Handle error here, you can show error alert here or within reducer
					dispatch(fetchProductsFailure(error));
					dispatch(onSetComponentVisibility(true, error.message));
				});
		};
	} else {
		const headersValue = {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		};
		const request = axios.post(baseUrl + url, params, {
			headers: headersValue,
		});
		console.log('\n\n' + url + ' request- ' + JSON.stringify(params));
		console.log('\n\n' + url + ' headers- ' + JSON.stringify(headersValue));
		return dispatch => {
			dispatch(fetchProductsBegin());
			return request
				.then(data => {
					let modifyData = data.data;
					if (tagName) {
						modifyData.tag = tagName;
					}
					console.log('\n\n' + url + ' response- ' + JSON.stringify(modifyData));
					dispatch(fetchProductsSuccess(modifyData));
					return modifyData;
				})
				.catch(error => {
					console.log('\n\n' + url + ' - ' + JSON.stringify(error));
					dispatch(fetchProductsFailure(error));
					dispatch(onSetComponentVisibility(true, error.message));
				});
		};
	}
}
