import React from 'react';

const Header =() => {
	return (
		<div className="first-screen">

			<div className="header">

				<img src="img/logo-copy.svg"
						 className="Logo-Copy" />

					<img src="img/page-1-copy-3.png"
							 srcSet="img/page-1-copy-3@2x.png 2x,
             img/page-1-copy-3@3x.png 3x"
							 className="Page-1-Copy-3" />

						<div className="Mobile-Web-develop-Copy">
							Mobile & Web development
						</div>

						{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
							<defs>
								<filter id="filter-ripple-2">
									<feimage xlink:href="img/ripple.png" x={30} y={20} width={0} height={0} result="ripple" />
									<fedisplacementmap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale={20} result="dm" />
									<fecomposite operator="in" in2="ripple" />
									<fecomposite in2="SourceGraphic" />
								</filter>
							</defs>
						</svg>*/}

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