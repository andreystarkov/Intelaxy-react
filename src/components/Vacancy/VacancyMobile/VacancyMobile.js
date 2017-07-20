import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import classNames from 'classnames';


const VacancyMobile = ({ professions, activeProfession, onClickMobile, expanded, showContent}) => {
	return (
		<div className="vacancy-mobile">
			<Panel
				header={
					<div className="profession-header">
						<h2>{professions[activeProfession].title}</h2>
						<div className="price">{professions[activeProfession].price}</div>
					</div>
				}
				collapsible
				expanded={expanded}
				onClick={()=>showContent()}
			>

				{ professions.map( (profession, index) => {

					const classes = classNames('profession', { 'active': index === activeProfession });
						return(
							<div key={`profession-mobile-${index}`}>
								<h2 onClick={() => onClickMobile(index)}
								>{profession.title}</h2>

							</div>
						)}
				)}
			</Panel>
		</div>
	)
};

export default VacancyMobile;