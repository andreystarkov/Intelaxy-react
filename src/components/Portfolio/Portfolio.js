import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioScene from './PortfolioScene/PortfolioScene'
import PortfolioMobile from './PortfolioMobile/PortfolioMobile';

import path_2_copy_3 from '../../img/path-2-copy-3.svg';

class Portfolio extends Component {
	render() {
		const { viewPort } = this.props.appReducer.viewPort;
		console.log(viewPort)
		return (
			<div className="second-screen">

				<div className="footer">

					{(viewPort === 'desktopHD' || viewPort === 'desktop' || viewPort === 'desktopSmall')

						?

						<PortfolioScene/>

						:

						<PortfolioMobile />
					}

					<div className="title gutter-10 row">

						<div className="col-md-4 col-sm-4 col-xs-4">

							<p>Планировщик задач</p>

							<h3>TODOYA</h3>

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