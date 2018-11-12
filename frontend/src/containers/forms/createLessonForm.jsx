// forms/createLessonForm.jsx - Bootcamp Lesson CRUD
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {types} from "../../constants/actionTypes";

function mapStateToProps(state)
{
	return state;
}

class CreateLessonForm extends Component {
	constructor(props)
	{
		super(props);

		this.state = {
			name: "",
			content: "",
			flag: "",
			xp: ""
			submitted: false
		};

		this.onFormChange = this.onFormChange.bind(this);
		this.onFormCancel = this.onformCancel.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount()
	{

	}

	onFormChange(event)
	{
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	onFormSubmit(event)
	{
		event.preventDefault();
		this.setState({
			submitted: true
		});
	}

	onFormCancel(event)
	{
		
	}
	
	render()
	{
		<div className="k__crud-form">
			<h1 className="k__crud-header"></h1>
			<form onSubmit={this.onFormSubmit}>
				<div className="form-wrap">
				
					<div className="form-buttons">
							<input className="btn"
								   type="submit"
								   value="Create" />
							<input className="btn"
								   type="cancel"
								   value="Cancel" />
					</div>
				</div>
			</form>
		</div>
	}
};

export default connect(mapStateToProps)(CreateLessonForm);
