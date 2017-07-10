import React, { Component } from 'react';
import ButtonAnimation from '../common/ButtonAnimation';
import logo_copy from '../../img/logo-copy.svg';
import page_1_copy_3 from '../../img/page-1-copy-3.png';
import page_1_copy_32x from '../../img/page-1-copy-3@2x.png';
import page_1_copy_33x from '../../img/page-1-copy-3@3x.png';

import { TweenLite } from "gsap";

// onClick = (id) => {

// 	return function(e) {

// 		TweenLite.set(, { attr: { x: e.offsetX, y: e.offsetY, width: 0, height: 0 } });
// 		TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
// 		TweenLite.fromTo(dm, 3, { attr: { scale: 30 } }, { attr: { scale: 0 } });
// 	};
// };


const Header = () => {

	return (
		<div className="first-screen">

			<div className="header">

				<img src={logo_copy}
						 className="Logo-Copy" />

					<img src={page_1_copy_3}
							 srcSet={`${page_1_copy_32x} 2x,
				${page_1_copy_33x} 3x`}
							 className="Page-1-Copy-3" />

						<div className="Mobile-Web-develop-Copy">
							Mobile & Web development
						</div>

						<ButtonAnimation id="filter-ripple-2" />

						<div className="header-button" id="component-8" href="#contact">
							Связаться с нами
						</div>

			</div>

			<div className="footer">

				<div className="gutter-10 row">

					<div className="title col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">

						<h2>Мы просто делаем сложные системы</h2>

						<p>
							Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ. Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ. Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.
						</p>

					</div>

				</div>

			</div>

		</div>
	);
};

export default Header;
