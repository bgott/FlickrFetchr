import React from 'react';

class SearchBar extends React.Component {
	constructor(){
		super();
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let tag = event.target.value;
		this.setState({value: tag});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.value)
			this.props.onSubmit(this.state.value);
	}

	render() {
		return (
			<div className="row search-bar">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<form onSubmit={this.handleSubmit}>
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Enter tags to search!" onChange={this.handleChange} />
							<span className="input-group-btn">
								<button type="submit" className="btn btn-default">Go!</button>
							</span>
						</div>
					</form>
				</div>
				<div className="col-md-3"></div>
			</div>
		);
	}
}

export default SearchBar;
