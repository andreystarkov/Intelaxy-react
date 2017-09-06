import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioScene from './PortfolioScene/PortfolioScene'
import PortfolioMobile from './PortfolioMobile/PortfolioMobile';

import path_2_copy_3 from '../../img/path-2-copy-3.svg';

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.portfolio = [{
			title: 'Ведение бюджета',
			name: 'WALEXY',
			background: 'linear-gradient(to right, #26bf59, #4ede7e)'
		}, {
			title: 'Фитнес-приложение',
			name: 'Жиротоп',
			background: 'linear-gradient(to right, #ff931e, #ffaa4d)'
		}, {
			title: 'Планировщик задач',
			name: 'TODOYA',
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
			background: this.portfolio[this.state.activeSlide].background,
			transition: 'background 10000ms linear'
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

					{/*<div className="title gutter-10 row">

						<div className="col-md-4 col-sm-4 col-xs-4">

							<p>{this.portfolio[this.state.activeSlide].title}</p>

							<h3>{this.portfolio[this.state.activeSlide].name}</h3>

						</div>

					</div>*/}

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