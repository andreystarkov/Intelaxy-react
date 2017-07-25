import React from 'react';
import { connect } from 'react-redux';
import scrollToElement from 'scroll-to-element';
import logo_copy from '../../img/logo-copy.svg';
import page_1_copy_3 from '../../img/page-1-copy-3.png';
import page_1_copy_32x from '../../img/page-1-copy-3@2x.png';
import page_1_copy_33x from '../../img/page-1-copy-3@3x.png';

const Header = ({ appReducer }) => {

	const { viewPort } = appReducer.viewPort;

	return (
		<div className="first-screen">

			<div className="header">

				<img src={page_1_copy_3}
						 srcSet={`${page_1_copy_32x} 2x,
			${page_1_copy_33x} 3x`}
						 className="Page-1-Copy-3" />

				<img src={logo_copy}
						 className="Logo-Copy" />

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

							<h2>Мы просто делаем сложные системы</h2>

							<p>
								Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них нет ничего
								невозможного, дай бог им счастья, здоровья, развития и всех-всех благ. Самая профессиональная компания
								из всех, с которыми мне приходилось работать. Для них нет ничего невозможного, дай бог им счастья,
								здоровья, развития и всех-всех благ. Самая профессиональная компания из всех, с которыми мне приходилось
								работать. Для них нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.
							</p>

						</div>

						:

						<div className="title">

							<h2>Мы просто делаем сложные системы</h2>

							<p>
								Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них нет ничего
								невозможного, дай бог им счастья, здоровья, развития и всех-всех благ. Самая профессиональная компания
								из всех, с которыми мне приходилось работать. Для них нет ничего невозможного, дай бог им счастья,
								здоровья, развития и всех-всех благ. Самая профессиональная компания из всех, с которыми мне приходилось
								работать. Для них нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.
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
