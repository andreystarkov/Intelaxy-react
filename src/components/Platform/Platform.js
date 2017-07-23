import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import classNames from 'classnames';
import anime from 'animejs';
import $ from "jquery";
import {findDOMNode} from 'react-dom';

import ReactSvg from '../common/svg/ReactSvg';
import RailsSvg from '../common/svg/RailsSvg';
import IosSvg from '../common/svg/IosSvg';
import AndroidSvg from '../common/svg/AndroidSvg';

import rectangle_3_copy_2 from '../../img/rectangle-3-copy-2.svg';


class Platform extends Component {

	constructor(props) {
		super(props);

		this.slider = null;

		this.platforms = [{
			title: 'React Native',
			className: 'platform react col-md-2 col-md-offset-2 col-sm-2 col-sm-offset-1 col-xs-offset-2',
			classNameMobile: 'platform react',
			img: ReactSvg,
			name: 'react',
			color: '#00D8FF'
		}, {
			title: 'Ruby on Rails',
			className: 'platform rails col-md-2 col-sm-2',
			classNameMobile: 'platform rails',
			img: RailsSvg,
			name: 'rails',
			color: '#D0011B'
		}, {
			title: 'iOS',
			className: 'platform ios col-md-2 col-sm-2',
			classNameMobile: 'platform ios',
			img: IosSvg,
			name: 'ios',
			color: '#0A0C0F'
		}, {
			title: 'Android',
			className: 'platform android col-md-2 col-sm-2',
			classNameMobile: 'platform android',
			img: AndroidSvg,
			name: 'android',
			color: '#7ED321'
		}];

		this.platformDescriptions = [{
			title: 'Гибридная разработка приложений',
			className: 'platform react',
			text: `React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
			View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
			отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
			пользовательский опыт.`
		}, {
			title: 'Ruby on rails',
			className: 'platform rails',
			text: `React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
			View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
			отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
			пользовательский опыт.`
		}, {
			title: 'iOS',
			className: 'platform ios',
			text: `React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
			View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
			отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
			пользовательский опыт.`
		}, {
			title: 'Android',
			className: 'platform android',
			text: `React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
			View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
			отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
			пользовательский опыт.`
		}];

		this.state = {
			activePlatform: 0
		}
	}

	componentDidMount() {
		console.log('el', this.path);
	}

	componentDidUpdate() {
		setTimeout( () => this.slider.slickGoTo(this.state.activePlatform));
	}

	changeHandler = (slide) => {
		this.setState({ activePlatform: slide });

	};

	settings = {
		ref: (ref) => {this.slider = ref},
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		fade: false,
		draggable: false
	};

	drowElement = (selector, color) => {
		anime.remove(selector);
		$(selector).css({
			'stroke': color,
			'stroke-opacity': '1',
			'stroke-width': '1px',
			'opacity': '1',
			'fill-opacity': '1',
			'fill': 'none'
		});
		anime({
			targets: selector,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'linear',
			duration: 700,
			delay: function(el, i) { return i * 250 },
			// direction: 'alternate',
			complete: function complete() {
				$(selector).css({
					'fill': color,
					'strokeOpacity': '0'
				})
			}
		});
	};

	reverseDrowElement = (selector, color) => {
		anime.remove(selector);
		$(selector).css({
			'stroke': color,
			'stroke-opacity': '1',
			'stroke-width': '1px',
			'opacity': '1',
			'fill-opacity': '1',
			'fill': 'none'
		});
		anime({
			targets: selector,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'linear',
			duration: 700,
			delay: function(el, i) { return i * 250 },
			direction: 'reverse',
			complete: function complete() {
				$(selector).css({
					'fill': 'none',
					'stroke': '#9b9b9b',
					'stroke-opacity': '1',
					'stroke-dashoffset': '1',
					'stroke-width': '1'
				})
			}
		});
	};

	drawStroke = (platform, color) => {
		const selectors = document.getElementById(`${platform}-anim`);
		const selectorPath = selectors.getElementsByTagName('path');
		const selectorElipse = selectors.getElementsByTagName('ellipse');
		this.drowElement(selectorPath, color);
		this.drowElement(selectorElipse, color);
	};

	drawStrokeReverse = (platform, color) => {
		const selectors = document.getElementById(`${platform}-anim`);
		const selectorPath = selectors.getElementsByTagName('path');
		const selectorElipse = selectors.getElementsByTagName('ellipse');
		this.reverseDrowElement(selectorPath, color);
		this.reverseDrowElement(selectorElipse, color);
	};

	render() {
		const { viewPort } = this.props.appReducer.viewPort;
		return (
			<div className="second-screen">

				<div className="header gutter-10 row">

					{this.platforms.map((platform, index) => {

							const classes = classNames(platform.className, {
								'active': index === this.state.activePlatform
							});

							return (
								<div
									key={`platform-${index}`}
									className={classes}
									onMouseEnter={() => this.drawStroke(platform.name, platform.color)}
									onMouseLeave={() => this.drawStrokeReverse(platform.name, platform.color)}
									onClick={() => this.changeHandler(index)}
								>
									<div className="empty-box"/>
									<div className="logo" >
										<platform.img react={ c => this.path = c} />
									</div>
									<h3>{platform.title}</h3>
								</div>
							)
						}
					)}

					<div className="col-md-2 col-sm-2" />

					<div className="line col-md-offset-2 col-sm-offset-1 col-xs-offset-2" />

				</div>

				<div className="gutter-10 row">

					<div className="body col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">

						<Slider	{...this.settings}>

							{ this.platformDescriptions.map( (platform, index) => {

									return (
										<div key={`description-${index}`} className={platform.className}>
											<div className='title'>{platform.title}</div>
											<p>{platform.text}</p>
											<img src={rectangle_3_copy_2}
													 className="Rectangle-3-Copy-2"/>
										</div>
									)
								}
							)}

						</Slider>

					</div>

				</div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	}
}

export default connect(mapStateToProps)(Platform);