// containers/landing.js - Landing view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/img/kernel3.png";

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
			<div className="k__landing">
				<div className="greeting">
					<div className="greeting-background"></div>
					<div className="greeting-display"></div>
					<div className="greeting-shout">
						<h1>Welcome to<br /> Kernelization v0.0.1</h1>
						<h2>Making hard tech easy.</h2>

						<div className="s-join">
							<Link to="/register">Join Us!</Link>
						</div>
					</div>

					<div className="greeting-shout2">
						<h1>Built for you.</h1>
					</div>

					<img className="greeting-logo" src={Logo} />
				</div>
				
				<div className="landing__features">
					
				</div>
			</div>
		);
	}
};

export default LandingView;
