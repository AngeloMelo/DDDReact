import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function cityReducer(state = initialState.cities, action) {
	
	switch(action.type){
		case types.LOAD_CITIES_SUCCESS:
			return action.cities;

		case types.CREATE_CITY_SUCCESS:
			return [
				...state,
				Object.assign({}, action.city)
			];

		case types.UPDATE_CITY_SUCCESS:
			return [
				...state.filter(city => city.cityId !== action.city.cityId),
				Object.assign({}, action.city)
			];

		case types.DELETE_CITY_SUCCESS:
			return [
                ...state.filter(city => city.cityId !== action.city.cityId),
				Object.assign({}, action.city)
			];	

		default:
			return state;
	}
}