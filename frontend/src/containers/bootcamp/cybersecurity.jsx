// bootcamp/cybersecurity.jsx - Cybersecurity Bootcamp view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";

class LessonTree extends Component {
	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		<div className="lesson-tree">

		</div>
	}
};

class MissionTree extends Component {
	render()
	{
		return (
			<div className="mission-list">

			</div>
		);
	}
};

class BootcampWelcome extends Component {
	render()
	{
		<div className="cyber-welcome">
			<div className="typeon-text">
				
			</div>
			
			<button className="welcome-skip">Skip</button>
		</div>
	}
};

class CyberBootcampView extends Component {
	componentDidMount()
	{
		document.title = "Cybersecurity | KBootcamps";
	}
	
	render()
	{
		return (
			<div className="k__cybersecurity">
				<center>Cybersecurity</center>
			</div>
		);
	}
};

export default CyberBootcampView;
