// containers/about.jsx - About page
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";

class AboutView extends Component {
	render()
	{
		return (
			<div className="k__about">
				<h1>We are Kernelization!</h1>
				<div className="about__info">
					<p>We are a growing community of hackers, programmers, engineers, tinkerers strongly focussed on eachother's growth. We love technology and are overjoyed to answer any questions of newcomers!</p>
					<p>Bi weekly competitions coming soon!</p>
				</div>
			</div>
		);
	}
}

export default AboutView;
