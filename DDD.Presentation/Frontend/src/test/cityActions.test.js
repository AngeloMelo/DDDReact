import expect from 'expect';
import * as cityActions from '../../src/actions/cityActions';
import * as types from '../../src/actions/actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';


//test a sync action
describe('City actions', () =>{

	describe('createCitySuccess', ()=>{
		it('should create a CREATE_CITY_SUCCESS action', ()=>{

			//arrange
			const city = {cityId: 13, cityName: 'Garopaba'};
			const expectedAction = {
				type: types.CREATE_CITY_SUCCESS,
                city: city 
			};

			//act
			const action = cityActions.createCitySuccess(city);

			//assert
			expect(action).toEqual(expectedAction);
		});
	});
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async actions', ()=>{

	afterEach(()=>{
		nock.cleanAll();
	});

	it('should create BEGIN_AJAX_CALL and LOAD_CITIES_SUCCESS when loading cities', (done)=>{

		//Here's an example call to nock.
		// nock('http://example.com/')
		//     .get('/cities')
		//     .reply(200, {body:{city: [{id:1, firstName: 'Cory', lastName: 'House'}]}});

		const expectedAcions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.LOAD_CITIES_SUCCESS, body: {cities: [{cityId: '1', cityName: 'Clean Code'}]}}
		];

		const store = mockStore({cities: []}, expectedAcions);
		store.dispatch(cityActions.loadCities()).then(()=>{
			const actions = store.getActions();
			expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
			expect(actions[1].type).toEqual(types.LOAD_CITIES_SUCCESS);
			done();
		});
	});
});