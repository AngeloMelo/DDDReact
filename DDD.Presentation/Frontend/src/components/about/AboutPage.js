import React from 'react';

class AboutPage extends React.Component {

	render() {
	
		return (
			<div>
                <h1>About</h1>
                <p>This is a ASP.NET Core sample application with React. This page provides a complete crud interface to edit cities</p>
                <p>The complete stack is:
                        <ul>
                        <li>React, Redux, React Router, Bootstrap</li>
                        <li>ASP.NET Core 2.1</li>
                        <li>Entity Framework</li>
                        <li>PostgreSQL</li>
                    </ul>
                </p>
                <p>Run in dev mode:</p>
                <p>From command line, go to frontend folder(ROOT\DDD.Presentation\Frontend) and type npm start. Start the ASP.NET application on Visual Studio</p>

			</div>
		);
	}	
}

export default AboutPage;