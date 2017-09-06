import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

const SENDGRID_API_KEY='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';

class VacancyForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			email: '',
			name: '',
			phone: '',
			wages: '',
			validEmail: false,
			validName: false,
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

	handleChangeWages = (e) => {
		this.setState({ wages: e.target.value })
	};

	sendForm = () => {
		if (this.state.validEmail && this.state.validName) {
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
							"subject": "Vacancy form"
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
					"subject": "Vacancy form",
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
							"value": `wages: ${this.state.wages}`
						}
					],
					"attachments": [
						{
							'filename': '',
							'content': ''
						}
					]
				})
			})
		} else {return (null)}
	};

	render () {
		console.log(this.state)
		return (
			<form action="#" name="send-respond" className={this.props.formClasses}>

				<div className="wrap">

					<input
						type="text"
						required
						placeholder="Имя"
						id="name-respond"
						onChange={this.handleChangeName}
						value={this.state.name}
					/>
					<label htmlFor="name-respond"/>

					<input
						name="email"
						type="email"
						required
						placeholder="Email"
						id="email-respond"
						onChange={this.handleChangeEmail}
						value={this.state.email}
					/>
					<label htmlFor="email-respond"/>

					<input
						type="text"
						placeholder="Телефон"
						id="phone-respond"
						onChange={this.handleChangePhone}
						value={this.state.phone}
					/>
					<label htmlFor="phone-respond"/>

					<input
						type="text"
						placeholder="Желаемая зарплата"
						id="pay-respond"
						onChange={this.handleChangeWages}
						value={this.state.wages}
					/>
					<label htmlFor="pay-respond"/>

					<Dropzone onDrop={this.props.onDrop} className="drop-zone btn-4">
						<p>Прикрепить резюме</p>
					</Dropzone>

					<aside className="drop-file">
						<ul>
							{
								this.props.files.map((f, index) => <li key={`file-${index}`}>{f.name} - {f.size} bytes</li>)
							}
						</ul>
					</aside>

				</div>

				<button
					className="btn-4-blue"
					type="submit"
					id="show-form-button"
					onClick={this.sendForm}
				>
					Отправить запрос
				</button>

			</form>
		)
	}
}

export default VacancyForm;