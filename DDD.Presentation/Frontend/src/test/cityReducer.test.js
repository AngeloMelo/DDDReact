import expect from 'expect';
import cityReducer from '../../src/reducers/cityReducer';
import * as actions from '../../src/actions/cityActions';


//test a sync action
describe('City Reducer', () =>{

	
	it('should add city when passed CREATE_CITY_SUCCESS', ()=>{

		//arrange
		const initialState = [
			{cityId: 15, cityName: 'barra'},
            { cityId: 17, cityName: 'palhoça' }
		];


        const newCity = { cityId: 19, cityName: 'N'};

        const action = actions.createCitySuccess(newCity);

		//act
		const newState = cityReducer(initialState, action);

		//assert
		expect(newState.length).toEqual(3);
        expect(newState[0].cityName).toEqual('barra');
        expect(newState[1].cityName).toEqual('palhoça');
        expect(newState[2].cityName).toEqual('N');
	});

	it('should update city when passed UPDATE_CITY_SUCCESS', ()=>{

		//arrange
		const initialState = [
            { cityId: 15, cityName: 'barra' },
            { cityId: 17, cityName: 'palhoça' },
            { cityId: 19, cityName: 'terra fraca' }
		];

        const city = { cityId: 21, cityName: 'terra nova'};
		const action = actions.updateCitySuccess(city);

		//act
		const newState = cityReducer(initialState, action);
        const updatedCity = newState.find(a => a.cityId == city.cityId);
        const untouchedCity = newState.find(a => a.cityId == 15);

		//assert
        expect(updatedCity.cityName).toEqual('terra nova');
        expect(untouchedCity.cityName).toEqual('barra');
        //expect(newState.cityName).toEqual(21);
		
	});
});