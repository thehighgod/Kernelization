// forms/createBootcampForm.jsx - Bootcamp CRUD
// Copywrite (C) 2018, Brett Broadhurst
//

import React, {Component} from "react";
import {connect} from "react-redux";
import {types} from "../../constants/actionTypes";

function mapStateToProps(state)
{
	return state;
}

class CreateBootcampForm extends Component {
	constructor(props)
	{
		super(props);

		this.state = {
			title: "",
			subtitle: "",
			instructor: "",
			description: "",
			image: "",
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
					<div className="form-row">
						<div className="form-item">
							<div className="form-input">
								<input type="text"
									   label="Title"
									   name="title"
									   placeholder="Title"
									   value={this.state.title}
									   onChange={this.onFormChange}/>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-item">
							<div className="form-input">
								<input type="text"
									   label="Subtitle"
									   name="subtitle"
									   placeholder="Subtitle"
									   value={this.state.subtitle}
									   onChange={this.onFormChange}/>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-item">
							<div className="form-input">
								<input type="text"
									   label="Instructor"
									   name="instructor"
									   placeholder="You"
									   value={this.state.instructor}
									   onChange={this.onFormChange}/>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-item">
							<div className="form-input">
								<textarea type="text"
									   label="Description"
									   name="description"
									   placeholder="Describe your bootcamp."
									   value={this.state.description}
									   onChange={this.onFormChange}/>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-item">
							<div className="form-input">
								<input type="text"
									   label="Bootcamp Image"
									   name="bootcampImage"
									   placeholder="Link Here"
									   value={this.state.bootcampImage}
									   onChange={this.onFormChange}/>
							</div>
						</div>
					</div>
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

export default connect(mapStateToProps)(CreateBootcampForm);
