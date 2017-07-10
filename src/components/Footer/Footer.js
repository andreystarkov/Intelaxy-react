import React from 'react';
import page_1_copy_3 from '../../img/page-1-copy-3.svg';

const Footer = () => {
	return (

	<footer id="contact">

		<div className="gutter-10 row">

			<form action="#" name="contact-with-us" className="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-2">

				<legend>Обсудим проект?</legend>

				<div className="wrap">

					<input name="email" type="email" required placeholder="Email" id="email" /><label htmlFor="email"></label>

					<input type="text" required placeholder="Имя" id="name" /><label htmlFor="name"></label>

					<input type="text" placeholder="Телефон" id="phone" /><label htmlFor="phone"></label>

					<input type="text" placeholder="Компания" id="company" /><label htmlFor="company"></label>

					<input type="text" required placeholder="Тип проекта" id="project" /><label htmlFor="project"></label>

				</div>

				{/*<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters">
					<defs>
						<filter id="send-respond">
							<feImage xlink:href="img/ripple.png" x="30" y="20" width="0" height="0" result="ripple"></feImage>
							<feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />
							<feComposite operator="in" in2="ripple"></feComposite>
							<feComposite in2="SourceGraphic"></feComposite>
						</filter>
					</defs>
				</svg>*/}

				<button type="submit" id="send-respond-button">Отправить запрос</button>


			</form>

			<div className="contact col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1">

				<img src={page_1_copy_3}
						 className="Page-1-Copy-3" />

					<div className="email">
						Email: <br />
						<span>example@mail.com</span>
					</div>

					<div className="adress">
						Адрес: <br />
						<span>Россия, Самара,<br /> ул. Ключникова, 90, офис 820</span>
					</div>

					<div className="phone">+7 (800) 200-50-10</div>

			</div>

		</div>

	</footer>

	)
};

export default Footer;