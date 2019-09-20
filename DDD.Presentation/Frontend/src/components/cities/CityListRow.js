import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CityListRow = ({city}) =>{

	return (
		<tr>
            <td><Link to={'/deletecity/' + city.cityId}>Delete</Link></td>
            <td><Link to={'/city/' + city.cityId}>{city.cityId}</Link></td>
            <td>{city.cityCode}</td>
            <td>{city.cityName}</td>
		</tr>
	);
};

CityListRow.propTypes = {
	city: PropTypes.object.isRequired
};

export default CityListRow;