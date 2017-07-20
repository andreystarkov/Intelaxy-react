import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import classNames from 'classnames';

const VacancyMobile = ({ professions, activeProfession, onClickMobile}) => {
	return (
		<div className="vacancy-mobile">
			<Accordion bsClass="vacancy-accordin">


				<Panel
					header={
						<div className="profession-header">
							<h2>{professions[activeProfession].title}</h2>
							<div className="price">{professions[activeProfession].price}</div>
						</div>
					}
				>

					{ professions.map( (profession, index) => {

						const classes = classNames('profession', { 'active': index === activeProfession });
							return(
								<div key={`profession-mobile-${index}`}>
									<h2 onClick={() => onClickMobile(index)}>{profession.title}</h2>

								</div>
							)}
					)}
				</Panel>


			</Accordion>
		</div>
	)
};

export default VacancyMobile;