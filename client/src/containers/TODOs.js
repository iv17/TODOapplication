import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { remove } from "../actions/index";

class TODOs extends Component {

	handleClick = (e) => {
		if (e.target.checked) {
			const id = e.target.value;
			setTimeout(() => {
				this.props.remove(id)
			}, 1000);
		}
	}

	renderList = () => {
		return this.props.todos.map((todo) => {
			return (

				<div className="item-row" key={todo.Id}>
					<label className="check-flag">
						<span className="check-flag-label">{todo.Content}</span>
						<span className="checkbox">
							<input className="checkbox-native" type="checkbox"
								key={todo.Id} value={todo.Id}
								onChange={this.handleClick} />
							<span className="checkmark">
								<svg viewBox="0 0 24 24">
									<path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
								</svg>
							</span>
						</span>
					</label>
				</div>

			);
		});
	}
	render() {
		return (
			<main className="main">
				<div className="wrap">
					{this.renderList()}
				</div>
			</main>
		);
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ remove: remove }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TODOs);
