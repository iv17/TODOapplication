import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main className="main">
	   <div className="wrap">
				<div className="item-row">
					<label className="check-flag">
						<span className="check-flag-label">Pick up drycleaning</span>
						<span className="checkbox">
							<input className="checkbox-native" type="checkbox"/>
							<span className="checkmark">
								<svg viewBox="0 0 24 24">
									<path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
								</svg>
							</span>
						</span>
					</label>
				</div>

				<div className="item-row">
					<label className="check-flag">
						<span className="check-flag-label">Study for exam</span>
						<span className="checkbox">
							<input className="checkbox-native" type="checkbox"/>
							<span className="checkmark">
								<svg viewBox="0 0 24 24">
									<path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
								</svg>
							</span>
						</span>
					</label>
				</div>

				<div className="item-row">
					<label className="check-flag">
						<span className="check-flag-label">Drink beer</span>
						<span className="checkbox">
							<input className="checkbox-native" type="checkbox"/>
							<span className="checkmark">
								<svg viewBox="0 0 24 24">
									<path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
								</svg>
							</span>
						</span>
					</label>
				</div>

			</div>
		</main>
    );
  }
}

export default Main;
