import React, {Component} from 'react';
import Parallax from 'parallax-js';
import Slider from 'react-slick';

import first from '../../../img/portfolio/walexy/1.png';
import second from '../../../img/portfolio/walexy/2.png';
import third from '../../../img/portfolio/walexy/3.png';
import fourth from '../../../img/portfolio/walexy/4.png';
import sixth from '../../../img/portfolio/walexy/6.png';
import seventh from '../../../img/portfolio/walexy/7.png';
import eighth from '../../../img/portfolio/walexy/8.png';
import ninth from '../../../img/portfolio/walexy/9.png';
import tenth from '../../../img/portfolio/walexy/5.png';

import firstFB from '../../../img/portfolio/fatburn/1.png';
import secondFB from '../../../img/portfolio/fatburn/2.png';
import thirdFB from '../../../img/portfolio/fatburn/3.png';
import fourthFB from '../../../img/portfolio/fatburn/4.png';
import sixthFB from '../../../img/portfolio/fatburn/6.png';
import seventhFB from '../../../img/portfolio/fatburn/7.png';
import eighthFB from '../../../img/portfolio/fatburn/8.png';
import ninthFB from '../../../img/portfolio/fatburn/9.png';
import tenthFB from '../../../img/portfolio/fatburn/5.png';

import firstTD from '../../../img/portfolio/todoya/calendar.png';
import secondTD from '../../../img/portfolio/todoya/page1.png';
import thirdTD from '../../../img/portfolio/todoya/page2.png';
import fourthTD from '../../../img/portfolio/todoya/page3.png';
import sixthTD from '../../../img/portfolio/todoya/panel.png';
import seventhTD from '../../../img/portfolio/todoya/prof.png';
import eighthTD from '../../../img/portfolio/todoya/proj.png';
import ninthTD from '../../../img/portfolio/todoya/sign.png';

class PortfolioScene extends Component {
	componentDidMount() {
		this.parallax1 = new Parallax(this.scene1, {
			pointerEvents: true
		});
		this.parallax2 = new Parallax(this.scene2, {
			pointerEvents: true
		});
		this.parallax3 = new Parallax(this.scene3, {
			pointerEvents: true
		});
	}
	componentWillUnmount() {
		this.parallax1.disable();
		this.parallax2.disable();
		this.parallax3.disable();
	}
	render() {
		const settings = {
			initialSlide: 0,
			slidesToShow: 1,
			infinite: false,
			arrows: false,
			fade: false,
			draggable: false,
			dots: true,
			speed: 800,
			afterChange: this.props.currentSlide,
		};
		return (
			<Slider {...settings} >
				<div ref={el => this.scene1 = el} className="parallax"
						 data-scalar-x="2"
						 data-scalar-y="3"
				>
					<div className="layers" data-depth="0.20"  >
						<img alt=" " className="first" src={first}/>
					</div>
					<div className="layers" data-depth="0.30">
						<img alt=" " className="second" src={second}/>
					</div>
					<div className="layers" data-depth="0.40">
						<img alt=" " className="third" src={third}/>
					</div>
					<div className="layers" data-depth="0.50">
						<img alt=" " className="fourth" src={fourth}/>
					</div>
					<div className="layers" data-depth="0.10">
						<img alt=" " className="sixth" src={sixth}/>
					</div>
					<div className="layers" data-depth="0.60">
						<img alt=" " className="tenth" src={tenth}/>
					</div>
					<div className="layers" data-depth="0.70">
						<img alt=" " className="seventh" src={seventh}/>
					</div>
					<div className="layers" data-depth="0.80">
						<img alt=" " className="eighth" src={eighth}/>
					</div>
					<div className="layers" data-depth="0.90">
						<img alt=" " className="ninth" src={ninth}/>
					</div>
				</div>
				<div ref={el => this.scene2 = el} className="parallax"
						 data-scalar-x="2"
						 data-scalar-y="3"
				>
					<div className="layers" data-depth="0.20"  >
						<img alt=" " className="first" src={firstFB}/>
					</div>
					<div className="layers" data-depth="0.30">
						<img alt=" " className="second" src={secondFB}/>
					</div>
					<div className="layers" data-depth="0.40">
						<img alt=" " className="third" src={thirdFB}/>
					</div>
					<div className="layers" data-depth="0.50">
						<img alt=" " className="fourth" src={fourthFB}/>
					</div>
					<div className="layers" data-depth="0.10">
						<img alt=" " className="sixth" src={sixthFB}/>
					</div>
					<div className="layers" data-depth="0.60">
						<img alt=" " className="tenth" src={tenthFB}/>
					</div>
					<div className="layers" data-depth="0.70">
						<img alt=" " className="seventh" src={seventhFB}/>
					</div>
					<div className="layers" data-depth="0.80">
						<img alt=" " className="eighth" src={eighthFB}/>
					</div>
					<div className="layers" data-depth="0.90">
						<img alt=" " className="ninth" src={ninthFB}/>
					</div>
				</div>
				<div ref={el => this.scene3 = el} className="parallax"
						 data-scalar-x="2"
						 data-scalar-y="3"
				>
					<div className="layers" data-depth="0.10">
						<img alt=" " className="secondTD" src={secondTD}/>
					</div>
					<div className="layers" data-depth="0.20">
						<img alt=" " className="thirdTD" src={thirdTD}/>
					</div>
					<div className="layers" data-depth="0.30">
						<img alt=" " className="fourthTD" src={fourthTD}/>
					</div>
					<div className="layers" data-depth="0.40">
						<img alt=" " className="eighthTD" src={eighthTD}/>
					</div>
					<div className="layers" data-depth="0.50">
						<img alt=" " className="seventhTD" src={seventhTD}/>
					</div>
					<div className="layers" data-depth="0.60" >
						<img alt=" " className="firstTD" src={firstTD}/>
					</div>
					<div className="layers" data-depth="0.70">
						<img alt=" " className="sixthTD" src={sixthTD}/>
					</div>
					<div className="layers" data-depth="0.80">
						<img alt=" " className="ninthTD" src={ninthTD}/>
					</div>
				</div>
			</Slider>
		)
	}
}

export default PortfolioScene;