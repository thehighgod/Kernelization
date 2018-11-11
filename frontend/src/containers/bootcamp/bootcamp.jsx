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
	constructor(props)
	{
		super(props);

		this.state = {
			
		};
	}
	
	render()
	{
		return (
			<div className={"k__bootcamp-card b-card-" + this.props.cstyle}>
				
				<div className="b-left">
					<div className="b-info">
						<p>Status: <span className={"h-" + this.props.sstyle}>{this.props.status}</span></p>
						<p>Instructor(s): {this.props.instructors[0]}</p>
						<p>Participants: {this.props.participants}</p>
						<p>Version: {this.props.version}</p>
					</div>
					
					<div className="b-desc">
						{this.props.description}
					</div>	
				</div>
					
				<div className="b-right">
					<img src={this.props.image} />
					<div className="b-tint"></div>
					<Link to={"/bootcamp/" + this.props.title.toLowerCase()}>
						<button className="b-enter">Enter</button>
					</Link>
				</div>

				<p className="b-title">
					{this.props.title}
				</p>
				
				<p className="b-subtitle">
					{this.props.subtitle}
				</p>
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
					subtitle={bc.subtitle}
					instructors={bc.instructors}
					image={bc.image}
					status={bc.status}
					participants={bc.participants}
					version={bc.version}
					description={bc.description}
					sstyle={bc.sstyle}
					cstyle={bc.cstyle}/>
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
				subtitle: "Become a penetration tester.",
				image: "https://www.itgovernanceusa.com/blog/wp-content/uploads/2014/09/iStock_000019633342_Small.jpg",
				description: "Cybersecurity affects us all. As threats become more sophisticated, the defenders need to always be in the know of all the latest attacks and exploits. Do you have what it takes to defend the safety of the internet?",
				instructors: ["JTR"],
				status: "Starting Soon",
				participants: 0,
				version: "0.0.1",
				sstyle: "orange",
				cstyle: "blue"
			},
			{
				id: "2",
				title: "Artificial Intelligence",
				subtitle: "Become an ML engineer.",
				image: "https://images.alphacoders.com/678/thumb-1920-678786.jpg",
				instructors: ["JTR"],
				status: "Coming Soon",
				participants: 0,
				version: "0.0.1",
				sstyle: "yellow",
				cstyle: "red"
			},
			{
				id: "3",
				title: "Blockchain",
				subtitle: "Become a blockchain engineer.",
				image: "https://lo3energy.com/wp-content/uploads/2018/05/digital-europe.jpg",
				instructors: ["JTR"],
				status: "Coming Soon",
				participants: 0,
				version: "0.0.1",
				sstyle: "yellow",
				cstyle: "cyan"
			},
		];
		
		return (
			<div className="k__bootcamp">
				<center>
					<p className="bootcamp-shout">What are you interested in?</p>
					<BootcampList data={seed}/>
				</center>
			</div>
		);
	}
};

export default BootcampView;
