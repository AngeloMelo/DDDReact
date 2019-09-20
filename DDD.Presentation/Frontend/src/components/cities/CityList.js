import React, {PropTypes} from 'react';
import CityListRow from './CityListRow';

const CityList = ({cities, deleteCity}) =>{

	return (
		<table className="table">
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th>Id</th>
					<th>Code</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
                {cities.map(city =>
                    <CityListRow key={city.cityId} city={city} />
			)}
			</tbody>
		</table>
	);
};

CityList.propTypes = {
	cities: PropTypes.array.isRequired,
	deleteCity: PropTypes.func
};

export default CityList;