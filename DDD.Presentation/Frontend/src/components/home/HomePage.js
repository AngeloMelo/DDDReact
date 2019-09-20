import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {

	render() {
	
		return (
			<div className="jumbotron">
				<h1>Wellcome</h1>
                <p>This is a simple SPA built with React and ASP.NET Core</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}	
}

export default HomePage;