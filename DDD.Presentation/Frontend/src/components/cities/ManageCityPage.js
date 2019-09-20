import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cityActions from '../../actions/cityActions';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import CityForm from './CityForm';
import toastr from 'toastr';

export class ManageCityPage extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			city: Object.assign({}, this.props.city), 
			errors: {},
			saving: false
		};

		this.updateCityState = this.updateCityState.bind(this);
		this.saveCity = this.saveCity.bind(this);
		this.redirect = this.redirect.bind(this);
		this.cityFormIsValid = this.cityFormIsValid.bind(this);
	}

	componentWillReceiveProps(nextProps){
        if (this.props.city.cityId != nextProps.city.cityId){

			//Necessary to populate form when existing city is loaded directly
			this.setState({city: Object.assign({}, nextProps.city)});
		}
	}

	updateCityState(event){

		const field = event.target.name;
		let city = this.state.city;
		city[field] = event.target.value;

		return this.setState({city: city});
	}


	saveCity(event){

		event.preventDefault();

		if(!this.cityFormIsValid()){
			return;
		}

		this.setState({saving: true});
		this.props.actions.saveCity(this.state.city)
			.then(()=> this.redirect())		
			.catch(error=> {
				toastr.error(error);
				this.setState({saving: false});
			});		
	}

	cityFormIsValid(){
		let formIsValid = true;
		let errors = {};

        if (this.state.city.cityName.length < 5){
			errors.title = 'Name must be at least 5 characters.';
			formIsValid = false;
		}

		this.setState({errors: errors});
		return formIsValid;
	}

	redirect(){
		this.setState({saving: false});
		toastr.success('City saved');
		this.context.router.push('/cities');
	}

	render(){
		return (
			<CityForm
				allAuthors={this.props.authors}
				city={this.state.city}
				onChange={this.updateCityState}
				onSave={this.saveCity}
				errors={this.state.errors}
				saving={this.state.saving}/>
		);
	}
}

ManageCityPage.propTypes = {
	city: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

ManageCityPage.contextTypes = {
	router: PropTypes.object
};

function getCityById(cities, cityId){
    const city = cities.filter(city => city.cityId == cityId);
	if(city.length > 0) return city[0];
	return null;
}

function mapStateToProps(state, ownProps){

    const cityId = ownProps.params.id;
    let iniCity = { cityId: 0, cityName: ''};
	
	if(cityId && state.cities.length > 0)
	{
		iniCity = getCityById(state.cities, cityId);
	}

	return {
		city: iniCity//,
		//authors: authorsFormattedForDropdown(state.authors)
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(cityActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCityPage);