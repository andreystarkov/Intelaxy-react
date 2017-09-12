import React, { Component } from 'react'
import { connect } from 'react-redux'

class Technologies extends Component {
	render() {
		const { viewPort } = this.props.appReducer.viewPort;
		return (
			<div className='wrap-section'>
				{(viewPort === 'tablet' || viewPort === 'mobile')
					?
					<div className="section-technologies-mobile">
						<div className="wrap-technologies gutter-10 row">
							<div className="wrap-row">
								<div className="technology slack"/>
								<div className="technology-line first"/>
								<div className="technology ruby -right"/>
								<div className="technology-line second"/>
								<div className="technology in"/>
								<div className="technology-line one"/>
								<div className="technology p -right"/>
								<div className="technology-line fourth"/>
								<div className="technology zeplin"/>
								<div className="technology-line third"/>
								<div className="technology react -right"/>
								<div className="technology-line two"/>
								<div className="technology vim"/>
								<div className="technology-line fifth"/>
								<div className="technology penta -right"/>
								<div className="technology-line sixth"/>
								<div className="technology hat"/>
								<div className="technology-line seventh"/>
								<div className="-store">
									<div className="technology android"/>
									<div className="technology-line tenth"/>
									<div className="technology app"/>
								</div>
							</div>
						</div>
					</div>
					:
					<div className="section-technologies">
						<div className="wrap-technologies gutter-10 row">
							<div className="wrap-row">
								<div className="technology slack"/>
								<div className="technology-line first"/>
								<div className="technology ruby"/>
								<div className="technology-line second"/>
								<div className="technology in"/>
							</div>
							<div className="wrap-row first">
								<div className="technology-line-vertical one"/>
							</div>
							<div className="wrap-row">
								<div className="technology react"/>
								<div className="technology-line fourth"/>
								<div className="technology zeplin"/>
								<div className="technology-line third"/>
								<div className="technology p"/>
							</div>
							<div className="wrap-row second">
								<div className="technology-line-vertical two"/>
							</div>
							<div className="wrap-row">
								<div className="technology vim"/>
								<div className="technology-line fifth"/>
								<div className="technology penta"/>
								<div className="technology-line sixth"/>
								<div className="technology hat"/>
							</div>
							<div className="wrap-row third">
								<div className="technology-line-vertical seventh"/>
								<div className="eighth">
									<div className="left"/>
									<div className="right"/>
								</div>
								<div className="ninth">
									<div className="-center"/>
								</div>
							</div>
							<div className="wrap-row fourth">
								<div className="technology android"/>
								<div className="technology-line tenth"/>
								<div className="technology app"/>
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}

export default connect(mapStateToProps)(Technologies)