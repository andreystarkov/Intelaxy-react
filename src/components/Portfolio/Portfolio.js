import React from 'react';

import portfolio_todoya from '../../img/portfolio-todoya.jpg';
import portfolio_todoya2x from '../../img/portfolio-todoya@2x.jpg';
import portfolio_todoya3x from '../../img/portfolio-todoya@3x.jpg';
import path_2_copy_3 from '../../img/path-2-copy-3.svg';

const Portfolio = () => {
	return (
		<div className="second-screen">

			<div className="footer">

				<img src={portfolio_todoya}
						 srcSet={`${portfolio_todoya2x} 2x,
             ${portfolio_todoya3x} 3x`}
						 className="Portfolio-todoya"/>

				<div className="title gutter-10 row">

					<div className="col-md-4 col-sm-4 col-xs-4">

						<p>Планировщик задач</p>

						<h3>TODOYA</h3>

					</div>

				</div>

				<div className="button">

					<div className="gutter-10 row">

						<div className="col-md-1 col-md-offset-11 col-sm-1 col-sm-offset-11">

							<img src={path_2_copy_3}
									 className=""/>

						</div>

					</div>

				</div>

			</div>

		</div>
	)
};

export default Portfolio;