import expect from 'expect';
import React from 'react';
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

	let renderer = TestUtils.createRenderer();
	renderer.render(<CityForm {...props}/>);
	let output = renderer.getRenderOutput();

	return{
		props,
		output,
		renderer
	};
}
describe('CityForm via React test utils', ()=>{
	it('renders form and h1', ()=>{
		const {output} = setup();

		expect(output.type).toBe('form');
		let [h1] = output.props.children;
		expect(h1.type).toBe('h1');

	});

	it('save button is labeled "Save" when not saving', ()=>{
		const {output} = setup(false);

		const submitButton = output.props.children[3];
		expect(submitButton.props.value).toBe('Save');

	});

	it('save button is labeled "Saving..." when saving', ()=>{
		const {output} = setup(true);

		const submitButton = output.props.children[3];
		expect(submitButton.props.value).toBe('Saving...');

	});
});
