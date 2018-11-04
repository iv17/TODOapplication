import React, { Component } from 'react';
import {connect} from 'react-redux';

class Modal extends Component {
  render() {
	  const showHideClassName = this.props.isOpen ? "modal-wrap is-visible js-modal" : "modal-wrap js-modal";
	  return (
	    <div className={showHideClassName}>
	      <div className="modal js-modal-inner">
		      <h2>Create a task today:</h2>
		      <form action="">
		        <div className="field-wrap">
			        <input className="field" type="text" placeholder="Title.." />
			      </div>
			      <div className="btn-wrap align-right">
			        <input className="btn" type="submit" value="Create" />
			      </div>
		       </form>
		     </div>
	     </div>
	   );
  }
}

function mapStateToProps(state) {
	return {
			isOpen: state.isOpen
	};
}

export default connect(mapStateToProps)(Modal);
