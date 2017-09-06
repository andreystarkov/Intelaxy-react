import React from 'react';
import { connect } from 'react-redux'
import page_1_copy_3 from '../../img/page-1-copy-3.svg';
import ViewPort from '../../containers/ViewPort'

const Footer = ({ appReducer }) => {

	const { viewPort } = appReducer.viewPort;
	return (

	<footer id="contact">

		{(viewPort === 'tablet' || viewPort === 'mobile')

			?

			<div className="gutter-10 row">

				<form action="#" name="contact-with-us" className="col-md-4 col-md-offset-2">

					<legend>Обсудим проект?</legend>

					<div className="wrap">

						<input name="email" type="email" required placeholder="Email" id="email"/><label htmlFor="email"/>

						<input type="text" required placeholder="Имя" id="name"/><label htmlFor="name"/>

						<input type="text" placeholder="Телефон" id="phone"/><label htmlFor="phone"/>

						<input type="text" placeholder="Компания" id="company"/><label htmlFor="company"/>

						<input type="text" required placeholder="Тип проекта" id="project"/><label htmlFor="project"/>

					</div>

					<button type="submit" id="send-respond-button">Отправить запрос</button>


				</form>

				<div className="contact col-md-3 col-md-offset-1">

					<img src={page_1_copy_3}
							 className="Page-1-Copy-3"/>

					<div className="email">
						Email: <br/>
						<span>mail@itelaxy.com</span>
					</div>

					<div className="adress">
						Адрес: <br/>
						<span>Россия, Самара,<br/> ул. Самарская, 169, офис 2</span>
					</div>

					<div className="phone">+7 (927) 209-59-66</div>

				</div>

			</div>

			:

			<div className="gutter-10 row">

				<form action="#" name="contact-with-us" className="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-2">

					<legend>Обсудим проект?</legend>

					<div className="wrap">

						<input name="email" type="email" required placeholder="Email" id="email"/><label htmlFor="email"/>

						<input type="text" required placeholder="Имя" id="name"/><label htmlFor="name"/>

						<input type="text" placeholder="Телефон" id="phone"/><label htmlFor="phone"/>

						<input type="text" placeholder="Компания" id="company"/><label htmlFor="company"/>

						<input type="text" required placeholder="Тип проекта" id="project"/><label htmlFor="project"/>

					</div>

					<button className="btn-4-blue" type="submit" id="send-respond-button">Отправить запрос</button>


				</form>

				<div className="contact col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1">

					<img src={page_1_copy_3}
							 className="Page-1-Copy-3"/>

					<div className="email">
						Email: <br/>
						<span>mail@itelaxy.com</span>
					</div>

					<div className="adress">
						Адрес: <br/>
						<span>Россия, Самара,<br/> ул. Самарская, 169, офис 2</span>
					</div>

					<div className="phone">+7 (927) 209-59-66</div>

				</div>

			</div>
		}

		<ViewPort />

	</footer>

	)
};

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}

export default connect(mapStateToProps)(Footer);