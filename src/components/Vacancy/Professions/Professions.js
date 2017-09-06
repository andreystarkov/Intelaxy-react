import React from 'react';
import classNames from 'classnames';

const Professions = ({ professions, activeProfession, handleChange, buttonClasses, showForm, buttonText }) => {
	return(
		<div className="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-2 column">

			{ professions.map( (profession, index) => {

				const classes = classNames('profession', { 'active': index === activeProfession });

				return(

					<div
						key={`profession-${index}`}
						className={classes}
						onClick={(event)=>handleChange(event, index)}
					>
						<h2>{profession.title}</h2>
						<div className="price">{profession.price}</div>
						<div
							className={buttonClasses}
							onClick={(event)=>showForm(event, index)}
						>{buttonText}</div>
					</div>

				)}
			)}

		</div>
	)
};

export default Professions;