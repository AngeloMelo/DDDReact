import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cityActions from '../../actions/cityActions';
import toastr from 'toastr';

class DeleteCityPage extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			city: Object.assign({}, this.props.city), 
			errors: {},
			deleting: false
		};

		this.deleteCity = this.deleteCity.bind(this);
		this.redirect = this.redirect.bind(this);
		this.cancelDeletion = this.cancelDeletion.bind(this);
    }


	deleteCity(event){

		event.preventDefault();
		this.setState({deleting: true});
		this.props.actions.deleteCity(this.state.city)
			.then(()=> {
				
				this.props.actions.loadCities()
					.then(()=> this.redirect());
			})		
			.catch(error=> {
				//debugger;
				toastr.error(error);
				this.setState({deleting: false});
			});		
	}

	redirect(){
		this.setState({deleting: false});
		toastr.success('City deleted');
		this.context.router.push('/cities');
	}

	cancelDeletion(ev){
		ev.preventDefault();
		this.context.router.push('/cities');
	}
	
	render(){

		return (
			<div>
				<h2>Delete city</h2>
				Are you sure to delete this city?
				<br/>
				{this.state.city.cityName}
				<br/>
				<input 
					type="button"
					value="Delete"
					className="btn btn-primary"
					disabled={this.state.deleting}
					onClick={this.deleteCity}/>

				<input 
					type="button"
					value="Cancel"
					className="btn btn-primary"
					onClick={this.cancelDeletion}/>	
			</div>
		);
	}
}

DeleteCityPage.propTypes = {
	city: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

DeleteCityPage.contextTypes = {
	router: PropTypes.object
};

function getCityById(cities, cityId){
    const city = cities.filter(city => city.cityId == cityId);
	if(city.length > 0) return city[0];
	return null;
}

function mapStateToProps(state, ownProps){

	const cityId = ownProps.params.id;
	let iniCity = getCityById(state.cities, cityId);
	
	return {
		city: iniCity
	};
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(cityActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCityPage);