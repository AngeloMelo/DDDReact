import * as types from './actionTypes';
import cityApi from '../api/mockCityApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCitiesSuccess(cities){
	return {type: types.LOAD_CITIES_SUCCESS, cities};
}

export function loadCitySuccess(city) {
    return { type: types.LOAD_CITY_SUCCESS, city };
}

export function createCitySuccess(city){
	return {type: types.CREATE_CITY_SUCCESS, city};
}

export function updateCitySuccess(city){
	return {type: types.UPDATE_CITY_SUCCESS, city};
}

export function deleteCitySuccess(city){
	return {type: types.DELETE_CITY_SUCCESS, city};
}


export function loadCities(){
	return function(dispatch){
		dispatch(beginAjaxCall());
		return cityApi.getAllCities().then(cities => {
			dispatch(loadCitiesSuccess(cities));
		}).catch(error => {
			throw(error);
		});
	};
}

export function saveCity(city) {

    if (city.cityId > 0) {
        return updateCity(city);
    }
    else {
        return createCity(city);
    }
}

function updateCity(city) {

    return function (dispatch, getState) {
        dispatch(beginAjaxCall());

        return cityApi.updateCity(city).then(savedCity => {
            dispatch(updateCitySuccess(savedCity));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}

function createCity(city) {

    return function (dispatch, getState) {
        dispatch(beginAjaxCall());

        return cityApi.createCity(city).then(savedCity => {
            dispatch(createCitySuccess(savedCity));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };    
}

export function deleteCity(city){

	return function(dispatch, getState){
		dispatch(beginAjaxCall());
		
		return cityApi.deleteCity(city.cityId)
			.then(() => {
				dispatch(deleteCitySuccess(city));
			})
			.catch(error => {
				dispatch(ajaxCallError(error));
				throw(error);
			});
	};
}