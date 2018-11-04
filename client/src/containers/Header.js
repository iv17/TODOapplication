import React, { Component } from 'react';
import plus from '../icons/icon-plus.svg';
import logo from '../images/vegait-logo.svg';
import calendar from '../icons/icon-calendar.svg';
import Modal from './Modal';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onLoad, openModal} from '../actions/index';

class Header extends Component {

  componentDidMount() {
		this.props.onLoad();
	}
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
		    <h1 className="header-quote">{ this.props.quote.content }</h1>
		  	<div className="header-cite">- { this.props.quote.author }</div>
		  </div>
		</div>
		<div className="header-inner">
		  <div className="wrap">
		    <img className="logo" src={logo} alt="VegaIT" />
		    <div className="date-wrap">
			  <img className="icon" src={calendar} alt="Calendar" />
			  <time>{this.props.date}</time>
			</div>
		  </div>
		</div>
	  </header>
	);
  }
}

function mapStateToProps(state) {
	return {
		quote: state.quote,
		date: state.date
	}
}

function matchDispatchToProps(dispatch) {
	return {
		...bindActionCreators({ onLoad: onLoad, openModal: openModal }, dispatch)
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);

