import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioScene from './PortfolioScene/PortfolioScene'
import PortfolioMobile from './PortfolioMobile/PortfolioMobile';

import path_2_copy_3 from '../../img/path-2-copy-3.svg';

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.portfolio = [{
			title: '1 Планировщик задач',
			name: 'WALEXY',
			background: 'linear-gradient(to right, #26bf59, #4ede7e)'
		}, {
			title: '2 Планировщик задач',
			name: 'FATBURN',
			background: 'linear-gradient(to right, #ff931e, #ffaa4d)'
		}, {
			title: '3 Планировщик задач',
			name: '3 TODOYA',
			background: 'linear-gradient(to right, #62F8CD, #66F9D8)'
		}];

		this.state = {
			activeSlide: 0
		}
	}


	currentSlide = (e) => {
		this.setState({ activeSlide: e })
	};

	render() {
		const { viewPort } = this.props.appReducer.viewPort;
		const backgroundStyle = {
			background: this.portfolio[this.state.activeSlide].background
		};
		return (
			<div className="second-screen">

				<div className="footer" style={backgroundStyle}>

					{(viewPort === 'desktopHD' || viewPort === 'desktop' || viewPort === 'desktopSmall')

						?

						<PortfolioScene currentSlide={this.currentSlide} />

						:

						<PortfolioMobile currentSlideMobile={this.currentSlide} />
					}

					<div className="title gutter-10 row">

						<div className="col-md-4 col-sm-4 col-xs-4">

							<p>{this.portfolio[this.state.activeSlide].title}</p>

							<h3>{this.portfolio[this.state.activeSlide].name}</h3>

						</div>

					</div>

					<div className="button">

						<div className="gutter-10 row">

							<div className="col-md-1 col-md-offset-11 col-sm-1 col-sm-offset-11">

								<img src={path_2_copy_3}
										 className=""/>

							</div>

						</div>

					</div>

				</div>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}

export default connect(mapStateToProps)(Portfolio);