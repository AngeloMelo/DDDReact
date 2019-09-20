import React, { PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cityActions from '../../actions/cityActions';
import CityList from './CityList';
import {browserHistory} from 'react-router';

class CitiesPage extends React.Component {

	constructor(props, context){
		
		super(props, context);
		
		this.cityRow = this.cityRow.bind(this);
		this.redirectToAddCityPage = this.redirectToAddCityPage.bind(this);
	}
	
	
	
	cityRow(city, index){
	
		return <div key={index}>{city.cityName}</div>;
	}

	redirectToAddCityPage(event){
		browserHistory.push('/city');
	}

	
	render() {
	
		const {cities} = this.props;
		return (
			<div>
				<h1>Cities</h1>
				<input 
					type="submit"
					value="Add city"
					className="btn btn-primary"
					onClick={this.redirectToAddCityPage}/>
				<CityList cities={cities} />
			</div>
		);
	}	
}

function mapStateToProps(state, ownProps){
	return {
		cities: state.cities
	};
}

CitiesPage.propTypes = {
//	dispatch: PropTypes.func.isRequired,
	actions: PropTypes.object.isRequired,
	cities: PropTypes.array.isRequired//,
	//createCity: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch){

	return {
		actions: bindActionCreators(cityActions, dispatch)
	};
//	return{
//		createCity: city => dispatch(cityActions.createCity(city))
//	};
}
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CitysPage);
export default connect(
	mapStateToProps,
    mapDispatchToProps
)(CitiesPage);