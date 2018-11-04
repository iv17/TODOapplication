import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {create} from '../actions/index';

class Modal extends Component {
	constructor(props) {
		super(props);
    this.state = {content : ''};
  }
	
	handleChange = (e) => {
		e.preventDefault();
		this.setState({content : e.target.value});
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.create(this.state.content);
		this.setState({content : ''});
	}
	
  render() {
		const enabled = this.state.content.length > 0 ? true : false;
	  const showHideClassName = this.props.isOpen ? "modal-wrap is-visible js-modal" : "modal-wrap js-modal";
		
		return (
	    <div className={showHideClassName}>
	      <div className="modal js-modal-inner">
		      <h2>Create a task today:</h2>
		      <form onSubmit={this.handleSubmit}>
		        <div className="field-wrap">
			        <input className="field" type="text" placeholder="Title.." 
								value={this.state.content}  
								onChange={this.handleChange}/>
			      </div>
			      <div className="btn-wrap align-right">
			        <input className="btn" type="submit" value="Create" 
								disabled={!enabled}/>
			      </div>
		       </form>
		     </div>
	     </div>
	   );
  }
}

function mapStateToProps(state) {
	return {
			isOpen: state.isOpen,
			content: state.content
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({create: create}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Modal);
