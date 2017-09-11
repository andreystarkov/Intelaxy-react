import React from 'react';
import { Panel } from 'react-bootstrap';

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