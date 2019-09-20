import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../src/reducers';
import initialState from '../../src/reducers/initialState';
import * as cityActions from '../../src/actions/cityActions';

describe('Store', function() {
	
	it('should handle creating cities', function() {

		//arrange
		const store = createStore(rootReducer, initialState);
		const city = {
			cityName: 'Cambara'
		};

		//act
		const action = cityActions.createCitySuccess(city);
		store.dispatch(action);

		//assert
		const actual = store.getState().cities[0];
        const expected = { cityName: 'Cambara'};
		expect(actual).toEqual(expected);
	});
});
