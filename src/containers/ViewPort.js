import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as rawActions from "../actions";
import { connect } from 'react-redux';

const DESKTOP_WIDTH = 1200;
const TABLET_WIDTH = 768;

class ViewPort extends Component {
	componentDidMount () {
		window.addEventListener('resize', this.checkViewport)
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.checkViewport)
	}

	checkViewport = () => {
		const width = window.innerWidth;
		const { viewPort, actions: { changeViewPort } } = this.props;

		let newViewPort;

		if (DESKTOP_WIDTH < width) {
			newViewPort = 'desktop'
		} else if (TABLET_WIDTH < width) {
			newViewPort = 'tablet'
		} else {
			newViewPort = 'mobile'
		}

		if (viewPort !== newViewPort) {
			changeViewPort(newViewPort)
		}


	};

	render () {
		console.log('viewPort', this.props.viewPort);
		return null
	}
}

function mapStateToProps (state) {
	return {
		viewPort: state.appReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(rawActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPort);