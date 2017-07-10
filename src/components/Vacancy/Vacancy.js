import React from 'react';

const Vacancy = () => {
	return (

		<div className="third-screen">

			<div className="header">

				<div className="gutter-10 row">

					<div className="col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">

						<div className="profession active" id="QA">

							<h2>QA Engineer</h2>

							<div className="price">100 000 – 120 000 руб.</div>

							{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
							 <defs>
							 <filter id="qa-show-form">
							 <feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
							 <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
							 <feComposite operator="in" in2="ripple"></feComposite>
							 <feComposite in2="SourceGraphic"></feComposite>
							 </filter>
							 </defs>
							 </svg>*/}

							<div className="button" id="qa-show-button">Откликнуться</div>

						</div>

						<div className="profession" id="support">

							<h2>Support Engineer</h2>

							<div className="price">100 000 – 120 000 руб.</div>

							{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
							 <defs>
							 <filter id="support-show-form">
							 <feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
							 <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
							 <feComposite operator="in" in2="ripple"></feComposite>
							 <feComposite in2="SourceGraphic"></feComposite>
							 </filter>
							 </defs>
							 </svg>*/}

							<div className="button" id="support-show-form-button">Откликнуться</div>

						</div>

						<div className="profession" id="lead_web">

							<h2>Lead Web-разработчик</h2>

							<div className="price">100 000 – 120 000 руб.</div>

							{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
							 <defs>
							 <filter id="lead-show-form">
							 <feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
							 <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
							 <feComposite operator="in" in2="ripple"></feComposite>
							 <feComposite in2="SourceGraphic"></feComposite>
							 </filter>
							 </defs>
							 </svg>*/}

							<div className="button" id="lead-show-form-button">Откликнуться</div>

						</div>

						<div className="profession" id="front-end">

							<h2>Ведущий Front-End разработчик</h2>

							<div className="price">100 000 – 120 000 руб.</div>

							{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
							 <defs>
							 <filter id="front-show-form">
							 <feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
							 <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
							 <feComposite operator="in" in2="ripple"></feComposite>
							 <feComposite in2="SourceGraphic"></feComposite>
							 </filter>
							 </defs>
							 </svg>*/}

							<div className="button" id="front-show-form-button">Откликнуться</div>

						</div>

						<div className="profession" id="web">

							<h2>Ведущий Web-разработчик</h2>

							<div className="price">100 000 – 120 000 руб.</div>

							{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
							 <defs>
							 <filter id="web-show-form">
							 <feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
							 <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
							 <feComposite operator="in" in2="ripple"></feComposite>
							 <feComposite in2="SourceGraphic"></feComposite>
							 </filter>
							 </defs>
							 </svg>*/}

							<div className="button" id="web-show-form-button">Откликнуться</div>

						</div>

						<div className="profession" id="html">

							<h2>HTML-верстальщик</h2>

							<div className="price">100 000 – 120 000 руб.</div>

							{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
							 <defs>
							 <filter id="html-show-form">
							 <feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
							 <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
							 <feComposite operator="in" in2="ripple"></feComposite>
							 <feComposite in2="SourceGraphic"></feComposite>
							 </filter>
							 </defs>
							 </svg>*/}

							<div className="button" id="html-show-form-button">Откликнуться</div>

						</div>

					</div>

					<div className="col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1 skills-offers">

						<div className="skills active" id="QA-skills">

							<div className="title">Ключевые навыки QA</div>

							<p>Первый навык QA</p>

							<p>Второй навык QA</p>

							<p>Третий навык подлиннее QA</p>

							<p>А четвертый совсем длинный (с примерами в скобках) QA</p>

						</div>

						<div className="skills" id="support-skills">

							<div className="title">Ключевые навыки support</div>

							<p>Первый навык support</p>

							<p>Второй навык support</p>

							<p>Третий навык подлиннее support</p>

							<p>А четвертый совсем длинный (с примерами в скобках) support</p>

						</div>

						<div className="skills" id="lead_web-skills">

							<div className="title">Ключевые навыки lead_web</div>

							<p>Первый навык lead_web</p>

							<p>Второй навык lead_web</p>

							<p>Третий навык подлиннее lead_web</p>

							<p>А четвертый совсем длинный (с примерами в скобках) lead_web</p>

						</div>

						<div className="skills" id="front-end-skills">

							<div className="title">Ключевые навыки front-end</div>

							<p>Первый навык front-end</p>

							<p>Второй навык front-end</p>

							<p>Третий навык подлиннее front-end</p>

							<p>А четвертый совсем длинный (с примерами в скобках) front-end</p>

						</div>

						<div className="skills" id="web-skills">

							<div className="title">Ключевые навыки web</div>

							<p>Первый навык web</p>

							<p>Второй навык web</p>

							<p>Третий навык подлиннее web</p>

							<p>А четвертый совсем длинный (с примерами в скобках) web</p>

						</div>

						<div className="skills" id="html-skills">

							<div className="title">Ключевые навыки html</div>

							<p>Первый навык html</p>

							<p>Второй навык html</p>

							<p>Третий навык подлиннее html</p>

							<p>А четвертый совсем длинный (с примерами в скобках) html</p>

						</div>

						<div className="offer active">

							<div className="title">Мы предлагаем</div>

							<p>Главное преимущество</p>

							<p>Второстепенное преимущество</p>

							<p>Плюшки с чайком</p>

							<p>Что-нибудь еще</p>

						</div>

					</div>

					<form action="#" name="send-respond" className="col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1 respond">

						<div className="wrap">

							<input name="email" type="email" required placeholder="Email" id="email-respond" /><label for="email-respond"></label>

							<input type="text" required placeholder="Имя" id="name-respond" /><label for="name-respond"></label>

							<input type="text" required placeholder="Должность" id="phone-respond" /><label for="phone-respond"></label>

							<input type="text" required placeholder="Компания" id="company-respond" /><label for="company-respond"></label>

							<input type="text" required placeholder="Тип проекта" id="project-respond" /><label for="project-respond"></label>

						</div>

						{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
						 <defs>
						 <filter id="show-form">
						 <feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
						 <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
						 <feComposite operator="in" in2="ripple"></feComposite>
						 <feComposite in2="SourceGraphic"></feComposite>
						 </filter>
						 </defs>
						 </svg>*/}

						<button type="submit" id="show-form-button">Отправить запрос</button>

					</form>

				</div>

			</div>

		</div>

	)
};

export default Vacancy;
