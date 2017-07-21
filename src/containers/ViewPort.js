import { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as rawActions from "../actions";
import { connect } from 'react-redux';

const DESKTOP_WIDTH = 1440;
const DESKTOP_SMALL_WIDTH = 1024;
const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 480;

class ViewPort extends Component {
	componentDidMount () {
		this.checkViewport();
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
			newViewPort = 'desktopHD'
		} else if (DESKTOP_SMALL_WIDTH < width) {
			newViewPort = 'desktop'
		} else if (TABLET_WIDTH < width) {
			newViewPort = 'desktopSmall'
		} else if (MOBILE_WIDTH < width) {
			newViewPort = 'tablet'
		} else {
			newViewPort = 'mobile'
		}

		if (viewPort !== newViewPort) {
			changeViewPort(newViewPort, width)
		}

	};

	render () {
		console.log(this.props.viewPort.viewPort);
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