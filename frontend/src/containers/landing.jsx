// containers/landing.js - Landing view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {Link} from "react-router-dom";

const LandingFeatureCard = (props) => {
	return (
		<div className="landing__features-featurecard">
			<span>Feature</span>
		</div>
	);
}

class LandingView extends Component {
	componentDidMount()
	{
		document.title = "Welcome | Kernelization";
	}
	
	render()
	{
		return (
			<div className="landing">
				<h1>Kernelization</h1>
				
				<div className="landing__greeting">
					<h2>Making hard tech easy.</h2>
					<Link to="/register">Join Us!</Link>
				</div>
				
				<div className="landing__features">
					<LandingFeatureCard />
				</div>
			</div>
		);
	}
};

export default LandingView;
