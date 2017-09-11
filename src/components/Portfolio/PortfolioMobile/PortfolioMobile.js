import React, { Component } from 'react';
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

class PortfolioMobile extends Component {

	render() {
		const settingsMobile = {
			initialSlide: 0,
			slidesToShow: 1,
			infinite: false,
			arrows: false,
			fade: false,
			draggable: true,
			dots: true,
			afterChange: this.props.currentSlideMobile
		};
		return (
			<Slider ref={c => this.slider = c } {...settingsMobile} >
				<div className="portfolio-mobile">
					<img src={first} className="first" alt=" "/>
					<img src={second} className="second" alt=" "/>
					<img src={third} className="third" alt=" "/>
					<img src={fourth} className="fourth" alt=" "/>
					<img src={tenth} className="tenth" alt=" "/>
					<img src={seventh} className="seventh" alt=" "/>
					<img src={eighth} className="eighth" alt=" "/>
					<img src={ninth} className="ninth" alt=" "/>
					<img src={sixth} className="sixth" alt=" "/>
				</div>
				<div className="portfolio-mobile">
					<img src={firstFB} className="first" alt=" "/>
					<img src={secondFB} className="second" alt=" "/>
					<img src={thirdFB} className="third" alt=" "/>
					<img src={fourthFB} className="fourth" alt=" "/>
					<img src={tenthFB} className="tenth" alt=" "/>
					<img src={seventhFB} className="seventh" alt=" "/>
					<img src={eighthFB} className="eighth" alt=" "/>
					<img src={ninthFB} className="ninth" alt=" "/>
					<img src={sixthFB} className="sixth" alt=" "/>
				</div>
				<div className="portfolio-mobile">
					<img className="secondTD" alt=" " src={secondTD}/>
					<img className="thirdTD" alt=" " src={thirdTD}/>
					<img className="fourthTD" alt=" " src={fourthTD}/>
					<img className="eighthTD" alt=" " src={eighthTD}/>
					<img className="seventhTD" alt=" " src={seventhTD}/>
					<img className="firstTD" alt=" " src={firstTD}/>
					<img className="sixthTD" alt=" " src={sixthTD}/>
					<img className="ninthTD" alt=" " src={ninthTD}/>
				</div>
			</Slider>
		)
	}
}

export default PortfolioMobile;