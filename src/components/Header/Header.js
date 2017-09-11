import React from 'react';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';

import logo_copy from '../../img/logo-copy.svg';
import newLogo from '../../img/Logo mask.png';
import logoBG from '../../img/logoBGcircle+.png';

const Header = ({ appReducer }) => {

	const { viewPort } = appReducer.viewPort;

	return (
		<div className="first-screen">

			<div className="header">

				<div className='logo'>

					<img src={logoBG}
							 className="logoBG" alt=' '/>
					<img src={newLogo}
							 className="Page-1-Copy-3" alt=' '/>
				</div>

				<img src={logo_copy}
						 className="Logo-Copy" alt=' '/>

				<div className="Mobile-Web-develop-Copy">
					Mobile & Web development
				</div>

				<div
					className="header-button btn-4"
					id="component-8"
					href="#contact"
					onClick={() => scrollToElement('#contact', {
						offset: 0,
						duration: 1500
					})}
				>
					Связаться с нами
				</div>

			</div>

			<div className="footer">

				<div className="gutter-10 row">

					{(viewPort === 'desktopHD' || viewPort === 'desktop' || viewPort === 'desktopSmall')

						?

						<div className="title col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">

							<h2>Мы делаем сложные системы простыми</h2>

							<p>
								Мы — команда разработчиков на Ruby on Rails и React JS/Native. Создаем ERP, CRM, соцсети, порталы и мобильные приложения. Любим кросс-платформенную разработку.
							</p>

						</div>

						:

						<div className="title">

							<h2>Мы делаем сложные системы простыми</h2>

							<p>
								Мы — команда разработчиков на Ruby on Rails и React JS/Native. Создаем ERP, CRM, соцсети, порталы и мобильные приложения. Любим кросс-платформенную разработку.
							</p>

						</div>

					}

				</div>

			</div>

		</div>
	);
};

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}


export default connect(mapStateToProps)(Header);
