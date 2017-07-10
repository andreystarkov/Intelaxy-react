import React from 'react';
import ripple from '../../img/ripple.png';

const ButtonAnimation = ({ id }) => {
	return (

		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
			<defs>
				<filter id={id}>
					<feimage xlinkHref={ripple} x={30} y={20} width={0} height={0} result="ripple" />
					<fedisplacementmap xChannelSelector="R" yChannelSelector="G" colorInterpolationFilters="sRGB" in="SourceGraphic" in2="ripple" scale={20} result="dm" />
					<fecomposite operator="in" in2="ripple" />
					<fecomposite in2="SourceGraphic" />
				</filter>
			</defs>
		</svg>

	)
};

export default ButtonAnimation;