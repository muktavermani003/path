import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import apiReducer from './../reducers/ApiReducer';
import userInfoReducer from './../reducers/userInfoReducer';

const rootReducer = combineReducers({
	userInfoReducerConfig: userInfoReducer,
	apiResponseDataConfig: apiReducer,
});
const store = () => {
	
	return createStore(rootReducer, applyMiddleware(thunk));
};

export default store;
