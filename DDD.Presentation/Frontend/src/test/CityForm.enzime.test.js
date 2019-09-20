import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CityForm from '../../src/components/cities/CityForm';


function setup(saving){

	let props = {
		city: {}, 
		saving: saving, 
		errors: {}, 
		onSave: () => {},
		onChange: () => {}
	};

	return shallow(<CityForm {...props}/>);
}

describe('CityForm test via Enzyme', ()=>{

	it('renders form and h1', ()=>{
		const wrapper = setup(false);

		expect(wrapper.find('form').length).toBe(1);
		expect(wrapper.find('h1').text()).toEqual('Manage city');
	});

	it('save button is labeled "Save" when not saving', ()=>{
		
		const wrapper = setup(false);
		expect(wrapper.find('input').props().value).toBe('Save');
	});

	it('save button is labeled "Saving..." when saving', ()=>{

		const wrapper = setup(true);
		expect(wrapper.find('input').props().value).toBe('Saving...');

	});
});
