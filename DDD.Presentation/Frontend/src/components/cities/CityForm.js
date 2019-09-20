import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import toastr from 'toastr';

const CityForm = ({city, allAuthors, onSave, onChange, saving, errors}) =>{
	return(
		<form>
			<h1>Manage city</h1>

			<TextInput
                name="cityName"
				label="Name"
				value={city.cityName}
				onChange={onChange}
				error={errors.title} />


			<TextInput
				name="cityCode"
				label="Code"
                value={city.cityCode}
				onChange={onChange}
				error={errors.category} />


			<input 
				type="submit"
				disabled={saving}
				value={saving ? 'Saving...' : 'Save'}
				className="btn btn-primary"
				onClick={onSave} />
		</form>
	);
};

CityForm.propTypes = {
	city : React.PropTypes.object.isRequired,
	allAuthors: React.PropTypes.array,
	onSave: React.PropTypes.func,
	onChange: React.PropTypes.func,
	saving: React.PropTypes.bool,
	errors: React.PropTypes.object
};


export default CityForm;