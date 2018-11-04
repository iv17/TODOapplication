import React, { Component } from 'react';
import plus from '../icons/icon-plus.svg';
import logo from '../images/vegait-logo.svg';
import calendar from '../icons/icon-calendar.svg';
import Modal from './Modal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {openModal} from '../actions/index';

class Header extends Component {
  
  handleChange = (e) => {
		e.preventDefault();
		this.props.openModal()
  }
  render() {
    return (
	  <header className="header">
	    <div className="wrap">
		  <Modal/>
		  <span className="btn-icon">
		    <img className="icon icon-plus js-modal-init" onClick={this.handleChange} src={plus} alt="Add New Item" />
		  </span>
		  <div className="header-blockquote">
		    <h1 className="header-quote">Happiness is good health and a bad memory</h1>
		  	<div className="header-cite">- Ingrid Bergman</div>
		  </div>
		</div>
		<div className="header-inner">
		  <div className="wrap">
		    <img className="logo" src={logo} alt="VegaIT" />
		    <div className="date-wrap">
			  <img className="icon" src={calendar} alt="Calendar" />
			  <time>02 / 08 / 2018</time>
			</div>
		  </div>
		</div>
	  </header>
	);
  }
}

function mapStateToProps(state) {
	return {
	
	}
}

function matchDispatchToProps(dispatch) {
	return {
		...bindActionCreators({ openModal: openModal }, dispatch)
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);

