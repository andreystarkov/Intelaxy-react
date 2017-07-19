import React from 'react';
import ButtonAnimation from '../common/ButtonAnimation';
import page_1_copy_3 from '../../img/page-1-copy-3.svg';
import ViewPort from '../../containers/ViewPort'

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

				<ButtonAnimation />

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

		<ViewPort />

	</footer>

	)
};

export default Footer;