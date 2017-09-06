import React, { Component } from 'react';
import { connect } from 'react-redux'
import page_1_copy_3 from '../../img/page-1-copy-3.svg';
import ViewPort from '../../containers/ViewPort'

const SENDGRID_API_KEY='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';

class Footer extends Component {
	constructor (props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			phone: '',
			company: '',
			project: '',
			validEmail: false,
			validName: false,
			validPhone: false
		}
	}

	handleChangeEmail = (e) => {
		let validation;
		e.target.validity.valid ? validation = true : validation = false;
		this.setState({ email: e.target.value, validEmail: validation })
	};

	handleChangeName = (e) => {
		let validation;
		e.target.validity.valid ? validation = true : validation = false;
		this.setState({ name: e.target.value, validName: validation })
	};

	handleChangePhone = (e) => {
		this.setState({ phone: e.target.value })
	};

	handleChangeCompany = (e) => {
		this.setState({ company: e.target.value })
	};

	handleChangeProject = (e) => {
		let validation;
		e.target.validity.valid ? validation = true : validation = false;
		this.setState({ project: e.target.value, validPhone: validation })
	};

	sendForm = () => {
		if (this.state.validEmail && this.state.validName && this.state.validPhone) {
			fetch("https://api.sendgrid.com/v3/mail/send", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
					'Access-Control-Allow-Headers': 'X-Requested-With',
					'Authorization': `Barer ${SENDGRID_API_KEY}`
				},
				body: JSON.stringify({
					"personalizations": [
						{
							"to": [
								{
									"email": "poter.t1mox@gmail.com",
									"name": "John Doe"
								}
							],
							"subject": "Contact form"
						}
					],
					"from": {
						"email": "poter.t1mox@gmail.com",
						"name": "Sam Smith"
					},
					"reply_to": {
						"email": "poter.t1mox@gmail.com",
						"name": "Sam Smith"
					},
					"subject": "Contact form",
					"content": [
						{
							"type": "text/plain",
							"value": `email: ${this.state.email}`
						},
						{
							"type": "text/plain",
							"value": `name: ${this.state.name}`
						},
						{
							"type": "text/plain",
							"value": `phone: ${this.state.phone}`
						},
						{
							"type": "text/plain",
							"value": `company: ${this.state.company}`
						},
						{
							"type": "text/plain",
							"value": `project: ${this.state.project}`
						}
					]
				})
			})
		} else {return (null)}
	};

	render () {
		const { viewPort } = this.props.appReducer.viewPort;
		return (

			<footer id="contact">

				{(viewPort === 'tablet' || viewPort === 'mobile')

					?

					<div className="gutter-10 row">

						<form action="#" name="contact-with-us" className="col-md-4 col-md-offset-2">

							<legend>Обсудим проект?</legend>

							<div className="wrap">

								<input
									name="email"
									type="email"
									required
									placeholder="Email"
									id="email"
									onChange={this.handleChangeEmail}
									value={this.state.email}
								/>

								<label htmlFor="email"/>

								<input
									type="text"
									required
									placeholder="Имя"
									id="name"
									onChange={this.handleChangeName}
									value={this.state.name}
								/>
								<label htmlFor="name"/>

								<input
									type="number"
									placeholder="Телефон"
									id="phone"
									onChange={this.handleChangePhone}
									value={this.state.phone}
								/>
								<label htmlFor="phone"/>

								<input
									type="text"
									placeholder="Компания"
									id="company"
									onChange={this.handleChangeCompany}
									value={this.state.company}
								/>
								<label htmlFor="company"/>

								<input
									type="text"
									required
									placeholder="Тип проекта"
									id="project"
									onChange={this.handleChangeProject}
									value={this.state.project}
								/>
								<label htmlFor="project"/>

							</div>

							<button
								type="submit"
								id="send-respond-button"
								onClick={this.sendForm}
							>
								Отправить запрос
							</button>


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

								<input
									name="email"
									type="email"
									required
									placeholder="Email"
									id="email"
									onChange={this.handleChangeEmail}
									value={this.state.email}
								/>
								<label htmlFor="email"/>

								<input
									type="text"
									required
									placeholder="Имя"
									id="name"
									onChange={this.handleChangeName}
									value={this.state.name}
								/>
								<label htmlFor="name"/>

								<input
									type="number"
									placeholder="Телефон"
									id="phone"
									onChange={this.handleChangePhone}
									value={this.state.phone}
								/>
								<label htmlFor="phone"/>

								<input
									type="text"
									placeholder="Компания"
									id="company"
									onChange={this.handleChangeCompany}
									value={this.state.company}
								/>
								<label htmlFor="company"/>

								<input
									type="text"
									required
									placeholder="Тип проекта"
									id="project"
									onChange={this.handleChangeProject}
									value={this.state.project}
								/>
								<label htmlFor="project"/>

							</div>

							<button
								className="btn-4-blue"
								type="submit"
								id="send-respond-button"
								onClick={this.sendForm}
							>
								Отправить запрос
							</button>


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

				<ViewPort/>

			</footer>

		)

	}

};

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}

export default connect(mapStateToProps)(Footer);