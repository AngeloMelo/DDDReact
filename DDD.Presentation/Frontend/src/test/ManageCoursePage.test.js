import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCityPage} from '../../src/components/cities/ManageCityPage';

describe('Manage City Page', ()=>{
	it('sets error message when trying to save empty title', () => {

		const props = {
			authors: [],
			actions: { saveCity: ()=>{return Promise.resolve(); }},
			city: {cityId: 0, cityCode:'', cityName: ''}
		};

		//spread operator passes all the objects defined inside of props
		const wrapper = mount(<ManageCityPage {...props}/>);
		const saveButton = wrapper.find('input').last();
		expect(saveButton.prop('type')).toBe('submit');
		saveButton.simulate('click');

		expect(wrapper.state().errors.title).toBe('Name must be at least 5 characters.');
	});
});
