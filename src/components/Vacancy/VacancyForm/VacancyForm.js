import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

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

	sendForm = (e) => {
		e.preventDefault();
		if (this.state.validEmail && this.state.validName) {
			fetch("http://intelaxy.ru/api", {
				method: 'POST',
				body: JSON.stringify({
					"Vacancy-email": `email: ${this.state.email}`,
					"Vacancy-name": `name: ${this.state.name}`,
					"Vacancy-phone": `phone: ${this.state.phone}`,
					"Vacancy-wages": `wages: ${this.state.wages}`,
					"attach": {
						'content': `${this.props.base64}`,
						'filename': `${this.props.files[0].name}`
					}
				})
			})
		} else {return (null)}
	};

	render () {
		console.log(this.props.Base64)
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