import React, { Component } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

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
			className: 'platform react col-md-2 col-md-offset-2 col-sm-2 col-sm-offset-1',
			img: ReactSvg
		}, {
			title: 'Ruby on Rails',
			className: 'platform rails col-md-2 col-sm-2',
			img: RailsSvg
		}, {
			title: 'iOS',
			className: 'platform ios col-md-2 col-sm-2',
			img: IosSvg
		}, {
			title: 'Android',
			className: 'platform android col-md-2 col-sm-2',
			img: AndroidSvg
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

	componentDidUpdate() {
		setTimeout( () => this.slider.slickGoTo(this.state.activePlatform));
	}

	changeHandler = (slide) => {
		this.setState({ activePlatform: slide })
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

	render() {

		return (
			<div className="second-screen">

				<div className="header gutter-10 row">

					{ this.platforms.map( (platform, index) => {

						const classes = classNames(platform.className, {
							'active': index === this.state.activePlatform
						});

						return (
							<div
								key={`platform-${index}`}
								className={classes}
								onClick={() => this.changeHandler(index)}
							>
								<div className="empty-box"></div>
								<div className="logo"></div>
								<platform.img />
								<h3>{platform.title}</h3>
							</div>
						)}
					)}

					<div className="col-md-2 col-sm-2"></div>

					<div className="line col-md-offset-2"></div>

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
};

export default Platform;