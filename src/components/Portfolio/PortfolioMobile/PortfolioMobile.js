import React, { Component } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

import first from '../../../img/portfolio/1.png';
import second from '../../../img/portfolio/2.png';
import third from '../../../img/portfolio/3.png';
import fourth from '../../../img/portfolio/4.png';
import sixth from '../../../img/portfolio/6.png';
import seventh from '../../../img/portfolio/7.png';
import eighth from '../../../img/portfolio/8.png';
import ninth from '../../../img/portfolio/9.png';
import tenth from '../../../img/portfolio/10.png';

class PortfolioMobile extends Component {
	constructor(props, context) {
		super(props, context);
		AOS.init();
	}
	componentWillReceiveProps() {
		AOS.refresh();
	}

	render() {
		const settingsMobile = {
			initialSlide: 1,
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			fade: false,
			draggable: true,
			dots: true
		};
		return (
			<Slider {...settingsMobile} >
				<div className="portfolio-mobile">
					<img src={first} className="first" alt=""/>
					<img src={second} className="second" alt=""/>
					<img src={third} className="third" alt=""/>
					<img src={fourth} className="fourth" alt=""/>
					<img src={tenth} className="tenth" alt=""/>
					<img src={seventh} className="seventh" alt=""/>
					<img src={eighth} className="eighth" alt=""/>
					<img src={ninth} className="ninth" alt=""/>
					<img src={sixth} className="sixth" alt=""/>
				</div>
				<div className="portfolio-mobile" >
					<img src={first} className="first" alt=""/>
					<img src={second} className="second" alt=""/>
					<img src={third} className="third" alt=""/>
					<img src={fourth} className="fourth" alt=""/>
					<img src={tenth} className="tenth" alt=""/>
					<img src={seventh} className="seventh" alt=""/>
					<img src={eighth} className="eighth" alt=""/>
					<img src={ninth} className="ninth" alt=""/>
					<img src={sixth} className="sixth" alt=""/>
				</div>
				<div className="portfolio-mobile">
					<img src={first} className="first" alt=""/>
					<img src={second} className="second" alt=""/>
					<img src={third} className="third" alt=""/>
					<img src={fourth} className="fourth" alt=""/>
					<img src={tenth} className="tenth" alt=""/>
					<img src={seventh} className="seventh" alt=""/>
					<img src={eighth} className="eighth" alt=""/>
					<img src={ninth} className="ninth" alt=""/>
					<img src={sixth} className="sixth" alt=""/>
				</div>
			</Slider>
		)
	}
}

export default PortfolioMobile;