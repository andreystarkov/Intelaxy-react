import React from 'react';
import classNames from 'classnames';

const SkillOffers = ({ skillOffersClasses, professionSkills, activeSkill, professionOffers, activeOffer }) => {
	return(
		<div className={skillOffersClasses}>

			{ professionSkills.map((profession, index)=>{

				const classes = classNames('skills', { 'active': index === activeSkill });

				return(
					<div
						key={`skills-${index}`}
						className={classes}
					>
						<div className="title">{profession.title}</div>
						<p>{profession.firstSkill}</p>
						<p>{profession.secondSkill}</p>
						<p>{profession.thirdSkill}</p>
						<p>{profession.fourthSkill}</p>
					</div>
				)}
			)}

			{
				professionOffers.map( (profession, index) => {

					const classes = classNames('offer', { 'active': index === activeOffer });

					return(
						<div
							key={`offer-${index}`}
							className={classes}
						>
							<div className="title">{profession.title}</div>
							<p>{profession.firstOffer}</p>
							<p>{profession.secondOffer}</p>
							<p>{profession.thirdOffer}</p>
							<p>{profession.fourthOffer}</p>
						</div>
					)
				})
			}

		</div>
	)
};

export default SkillOffers;