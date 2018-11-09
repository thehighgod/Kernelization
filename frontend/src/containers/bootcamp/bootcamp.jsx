// containers/bootcamp.jsx - Bootcamp view
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

function mapStateToProps(state)
{
	return state;
}

class BootcampProgram extends Component {
	render()
	{
		return (
			<div className="k__bootcamp-card">
				<div className="b-card-header">

				</div>

				<div className="b-card-body">
					
				</div>

				<div className="b-card-footer">

				</div>
				
				<span>{this.props.title}</span>
				<Link to="/">
					<img src={this.props.image} />
				</Link>
				<span>{this.props.status}</span>
				<span>{this.props.instructors[0]}</span>
				<span>{this.props.participants}</span>
				<span>{this.props.version}</span>

				<div className="bootcamp-description">
					{this.props.description}
				</div>
			</div>
		);
	}
};

class BootcampList extends Component {
	render()
	{
		const bootcamps = this.props.data.map((bc, idx) => {
			return (
				<BootcampProgram
					key={idx}
					id={bc.id}
					title={bc.title}
					instructors={bc.instructors}
					image={bc.image}
					status={bc.status}
					participants={bc.participants}
					version={bc.version}
					link={bc.link}
					description={bc.description}/>
			);
		});
		return (
			<div className="k__bootcamp-list">
				{bootcamps}
			</div>
		);
	}
}

class BootcampView extends Component {
	componentDidMount()
	{
		document.title = "Bootcamp | Kernelization";
	}
	
	render()
	{
		const seed = [
			{
				id: "1",
				title: "Cybersecurity",
				image: "#",
				description: "Become a l33t h4x0r!",
				instructors: ["JTR"],
				status: "Under Construction",
				partipants: 0,
				version: "0.0.1",
				link: "#"
			},
			{
				id: "2",
				title: "Artificial Intelligence",
				image: "#",
				instructors: ["JTR"],
				status: "Under Construction",
				partipants: 0,
				version: "0.0.1",
				link: "#"
			},
			{
				id: "3",
				title: "Blockchain",
				image: "#",
				instructors: ["JTR"],
				status: "Under Construction",
				partipants: 0,
				version: "0.0.1",
				link: "#"
			},
		];
		
		return (
			<div className="k__bootcamp">
				<center>
					<h1>Bootcamp Programs</h1>
					<BootcampList data={seed}/>
				</center>
			</div>
		);
	}
};

export default BootcampView;
