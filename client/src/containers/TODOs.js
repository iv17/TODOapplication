import React, { Component } from 'react';
import {connect} from 'react-redux';

class TODOs extends Component {
	renderList = () => {
		return this.props.todos.map((todo) => {
				return (

					<div className="item-row" key={todo.id}>
						<label className="check-flag">
							<span className="check-flag-label">{ todo.content }</span>
							<span className="checkbox">
							 <input className="checkbox-native" type="checkbox" />
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
				{ this.renderList() }
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

export default connect(mapStateToProps)(TODOs);
