import React, {Component} from 'react';
import Parallax from 'parallax-js';
import Slider from 'react-slick';

import first from '../../../img/portfolio/1.png';
import second from '../../../img/portfolio/2.png';
import third from '../../../img/portfolio/3.png';
import fourth from '../../../img/portfolio/4.png';
import sixth from '../../../img/portfolio/6.png';
import seventh from '../../../img/portfolio/7.png';
import eighth from '../../../img/portfolio/8.png';
import ninth from '../../../img/portfolio/9.png';
import tenth from '../../../img/portfolio/10.png';

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
		// this.parallax1.disable();
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
			draggable: true,
			dots: true,
			afterChange: this.props.currentSlide
		};
		return (
			<Slider {...settings} >
				<div ref={el => this.scene1 = el} className="parallax"
						 data-scalar-x="2"
						 data-scalar-y="3"
				>
					<div className="layers" data-depth="0.10"  >
						<img className="first" src={first}/>
					</div>
					<div className="layers" data-depth="0.20">
						<img className="second" src={second}/>
					</div>
					<div className="layers" data-depth="0.30">
						<img className="third" src={third}/>
					</div>
					<div className="layers" data-depth="0.40">
						<img className="fourth" src={fourth}/>
					</div>
					<div className="layers" data-depth="0.50">
						<img className="tenth" src={tenth}/>
					</div>
					<div className="layers" data-depth="0.60">
						<img className="seventh" src={seventh}/>
					</div>
					<div className="layers" data-depth="0.70">
						<img className="eighth" src={eighth}/>
					</div>
					<div className="layers" data-depth="0.80">
						<img className="ninth" src={ninth}/>
					</div>
					<div className="layers" data-depth="0.90">
						<img className="sixth" src={sixth}/>
					</div>
				</div>
				<div ref={el => this.scene2 = el} className="parallax"
						 data-scalar-x="2"
						 data-scalar-y="3"
				>
					<div className="layers" data-depth="0.10"  >
						<img className="first" src={first}/>
					</div>
					<div className="layers" data-depth="0.20">
						<img className="second" src={second}/>
					</div>
					<div className="layers" data-depth="0.30">
						<img className="third" src={third}/>
					</div>
					<div className="layers" data-depth="0.40">
						<img className="fourth" src={fourth}/>
					</div>
					<div className="layers" data-depth="0.50">
						<img className="tenth" src={tenth}/>
					</div>
					<div className="layers" data-depth="0.60">
						<img className="seventh" src={seventh}/>
					</div>
					<div className="layers" data-depth="0.70">
						<img className="eighth" src={eighth}/>
					</div>
					<div className="layers" data-depth="0.80">
						<img className="ninth" src={ninth}/>
					</div>
					<div className="layers" data-depth="0.90">
						<img className="sixth" src={sixth}/>
					</div>
				</div>
				<div ref={el => this.scene3 = el} className="parallax"
						 data-scalar-x="2"
						 data-scalar-y="3"
				>
					<div className="layers" data-depth="0.10"  >
						<img className="first" src={first}/>
					</div>
					<div className="layers" data-depth="0.20">
						<img className="second" src={second}/>
					</div>
					<div className="layers" data-depth="0.30">
						<img className="third" src={third}/>
					</div>
					<div className="layers" data-depth="0.40">
						<img className="fourth" src={fourth}/>
					</div>
					<div className="layers" data-depth="0.50">
						<img className="tenth" src={tenth}/>
					</div>
					<div className="layers" data-depth="0.60">
						<img className="seventh" src={seventh}/>
					</div>
					<div className="layers" data-depth="0.70">
						<img className="eighth" src={eighth}/>
					</div>
					<div className="layers" data-depth="0.80">
						<img className="ninth" src={ninth}/>
					</div>
					<div className="layers" data-depth="0.90">
						<img className="sixth" src={sixth}/>
					</div>
				</div>
			</Slider>
		)
	}
}

export default PortfolioScene;