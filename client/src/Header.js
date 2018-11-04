import React, { Component } from 'react';
import plus from './icons/icon-plus.svg';
import logo from './images/vegait-logo.svg';
import calendar from './icons/icon-calendar.svg';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);

		this.state = { isOpen: false };
  }
  toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
	  <header className="header">
	    <div className="wrap">
		  <Modal show={this.state.isOpen} onClose={this.toggleModal}></Modal>
		  <span className="btn-icon">
		    <img className="icon icon-plus js-modal-init" onClick={this.toggleModal} src={plus} alt="Add New Item" />
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

export default Header;
