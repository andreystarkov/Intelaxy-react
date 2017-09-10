import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import classNames from 'classnames';
import anime from 'animejs';
import $ from "jquery";

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
			classNameSvg: 'react-anim',
			name: 'react',
			color: '#00D8FF'
		}, {
			title: 'Ruby on Rails',
			className: 'platform rails col-md-2 col-sm-2',
			classNameMobile: 'platform rails',
			img: RailsSvg,
			classNameSvg: 'rails-anim',
			name: 'rails',
			color: '#D0011B'
		}, {
			title: 'iOS',
			className: 'platform ios col-md-2 col-sm-2',
			classNameMobile: 'platform ios',
			img: IosSvg,
			classNameSvg: 'ios-anim',
			name: 'ios',
			color: '#0A0C0F'
		}, {
			title: 'Android',
			className: 'platform android col-md-2 col-sm-2',
			classNameMobile: 'platform android',
			img: AndroidSvg,
			classNameSvg: 'android-anim',
			name: 'android',
			color: '#7ED321'
		}];

		this.platformDescriptions = [{
			// title: 'Гибридная разработка приложений',
			className: 'platform react',
			text: `React Native (RN) — это быстрое и экономичное создание нативных приложений для iOS и Android. RN использует нативные компоненты обеих платформ. Если разрабатывать приложения для двух ОС отдельно, они будут на разных языках и скорее всего с разной архитектурой. Каждое придется потом отдельно отлаживать и поддерживать. RN же позволяет делать все сразу: исправляете ошибку в одном приложении, она исправляется и в другом.`
		}, {
			// title: 'Ruby on rails',
			className: 'platform rails',
			text: `Ruby on Rails (RoR) — современный высокоуровневый фреймворк, написанный на языке Ruby. Он подходит для средних и крупных проектов. Чтобы работать с ним, нужен большой опыт программирования, и такие программисты стоят в среднем дороже, чем программисты на других серверных языках. Зато на проекты уходит меньше времени.`
		}, {
			// title: 'iOS',
			className: 'platform ios',
			text: `Мы делаем нативные приложения для Apple, используя Xcode и Objective-C. Благодаря нативным технологиям мы можем максимально использовать производительность системы, при этом приложения не слишком тратят заряд батареи.`
		}, {
			// title: 'Android',
			className: 'platform android',
			text: `Android — самая распространенная операционная система для мобильных устройств. Здесь, увы, распространено пиратство, пользователи тратят меньше денег на покупку приложений. Мы создаем приложения, используя нативные инструменты.`
		}];

		this.state = {
			activePlatform: 0
		}
	}

	componentDidMount() {
		console.log('el', this.path);
		console.log('update');
	}

	componentDidUpdate() {
		setTimeout( () => this.slider.slickGoTo(this.state.activePlatform), 0);
	}

	changeHandler = (slide) => {
		const active = document.getElementsByClassName('avtivePlatform');
		const selectorActive = active[0].getElementsByTagName('path');
		// const selectorActiveEclipes = active[0].getElementsByTagName('ellipse');

		this.reverseDrowElement(selectorActive, '#9b9b9b');
		// this.reverseDrowElement(selectorActiveEclipes, '#9b9b9b');

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
		draggable: false,
		swipe: false
	};

	settingsMob = {
		// ref: (ref) => {this.sliderM = ref},
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		fade: false,
		draggable: true,
		centerMode: true,
		centerPadding: '50',
		focusOnSelect: true,
		variableWidth: true,
	};

	drowElement = (selector, color) => {
		anime.remove(selector);
		$(selector).css({
			'stroke': color,
			'stroke-opacity': '1',
			'stroke-width': '1px',
			'opacity': '1',
			'fill-opacity': '0',
			'fill': 'none'
		});
		anime({
			targets: selector,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'linear',
			duration: 700,
			delay: function(el, i) { return i * 250 },
			complete: function complete() {
				$(selector).css({
					'fill': color,
					'strokeOpacity': '0',
					'fill-opacity': '1'
				})
			},
		});
	};

	reverseDrowElement = (selector, color) => {
		anime.remove(selector);
		$(selector).css({
			'stroke': color,
			'stroke-opacity': '1',
			'stroke-width': '1px',
			'opacity': '1',
			'fill-opacity': '0',
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

	reverseDrowActiveElement = (selector, color) => {
		anime.remove(selector);
		$(selector).css({
			'stroke': color,
			'stroke-opacity': '1',
			'stroke-width': '1px',
			'opacity': '1',
			'fill-opacity': '0',
			'fill': 'none'
		});
		anime({
			targets: selector,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'linear',
			duration: 700,
			delay: function(el, i) { return i * 250 },
			direction: 'reverse',
			complete: () => {
				$(selector).css({
					'fill': color,
					'fill-opacity': '1',
					'stroke': color,
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
		// const selectorElipse = selectors.getElementsByTagName('ellipse');
		this.drowElement(selectorPath, color);
		// this.drowElement(selectorElipse, color);
	};

	drawStrokeReverse = (platform, color) => {
		const selectors = document.getElementById(`${platform}-anim`);
		const selectorPath = selectors.getElementsByTagName('path');
		// const selectorElipse = selectors.getElementsByTagName('ellipse');
		this.reverseDrowElement(selectorPath, color);
		// this.reverseDrowElement(selectorElipse, color);
	};

	drawStrokeActiveReverse = (platform, color) => {
		const selectors = document.getElementById(`${platform}-anim`);
		const selectorPath = selectors.getElementsByTagName('path');
		// const selectorElipse = selectors.getElementsByTagName('ellipse');
		this.reverseDrowActiveElement(selectorPath, color);
		// this.reverseDrowActiveElement(selectorElipse, color);
	};

	render() {
		const { viewPort } = this.props.appReducer.viewPort;
		return (
			<div className="second-screen">

				{(viewPort === 'desktopHD' || viewPort === 'desktop' || viewPort === 'desktopSmall')

					?

					<div className="header gutter-10 row">

						{this.platforms.map((platform, index) => {

								const classes = classNames(platform.className, {
									'active': index === this.state.activePlatform
								});

								const classesSvg = classNames(platform.classNameSvg, {
									'avtivePlatform': index === this.state.activePlatform
								});

								return (
									<div
										key={`platform-${index}`}
										className={classes}
										onMouseEnter={() => this.drawStroke(platform.name, platform.color)}
										onMouseLeave={ index === this.state.activePlatform
											?	() => this.drawStrokeActiveReverse(platform.name, platform.color)
											:	() => this.drawStrokeReverse(platform.name, platform.color) }
										onClick={() => this.changeHandler(index)}
									>
										<div className="empty-box"/>
										<div className="logo">
											<platform.img react={c => this.path = c} className={classesSvg} />
										</div>
										<h3>{platform.title}</h3>
									</div>
								)
							}
						)}

						<div className="col-md-2 col-sm-2"/>

						<div className="line col-md-offset-2 col-sm-offset-1 col-xs-offset-2"/>

					</div>

					:

					<div className="header gutter-10 row">

						<Slider {...this.settingsMob}>

							{this.platforms.map((platform, index) => {

									const classes = classNames(platform.classNameMobile, {
										'active': index === this.state.activePlatform
									});

									const classesSvg = classNames(platform.classNameSvg, {
										'avtivePlatform': index === this.state.activePlatform
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
											<div className="logo">
												<platform.img react={c => this.pathM = c} className={classesSvg} />
											</div>
											<h3>{platform.title}</h3>
										</div>
									)
								}
							)}

						</Slider>

					</div>

				}

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