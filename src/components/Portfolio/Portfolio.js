import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioScene from './PortfolioScene/PortfolioScene';
import PortfolioMobile from './PortfolioMobile/PortfolioMobile';

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.portfolio = [{
			title: 'Ведение бюджета',
			name: 'WALEXY',
			background: 'linear-gradient(to right, #26bf59, #4ede7e)',
			className: 'backgroundAnim0'
		}, {
			title: 'Фитнес-приложение',
			name: 'Жиротоп',
			background: 'linear-gradient(to right, #ff931e, #ffaa4d)',
			className: 'backgroundAnim1'
		}, {
			title: 'Планировщик задач',
			name: 'TODOYA',
			background: 'linear-gradient(to right, #62F8CD, #66F9D8)',
			className: 'backgroundAnim2'
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
		return (
			<div className="second-screen">

				<div className="footer">

					<div className={this.portfolio[this.state.activeSlide].className} />

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