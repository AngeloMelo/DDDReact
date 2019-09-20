import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CitiesPage from './components/cities/CitiesPage';
import ManageCityPage from './components/cities/ManageCityPage'; //eslint-disable-line import/no-name-as-default
import DeleteCityPage from './components/cities/DeleteCityPage';
import AboutPage from './components/about/AboutPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="cities" component={CitiesPage} />
		<Route path="city" component={ManageCityPage} />
		<Route path="city/:id" component={ManageCityPage} />	
		<Route path="deletecity/:id" component={DeleteCityPage} />	

		<Route path="about" component={AboutPage} />
	</Route>
);