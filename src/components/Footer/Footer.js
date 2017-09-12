import React, { Component } from 'react';
import { connect } from 'react-redux'
import page_1_copy_3 from '../../img/page-1-copy-3.svg';
import ViewPort from '../../containers/ViewPort'

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
			validPhone: false,
			problem: ''
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

	showSuccefulRespond = () => {
		this.showMessage.classList.add('active');
		setTimeout(() => this.showMessage.classList.remove('active'), 2000)
	};

	sendForm = (e) => {
		e.preventDefault();
		let self = this;
		if (this.state.validEmail && this.state.validName && this.state.validPhone) {
			fetch("http://intelaxy.ru/api", {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"email": `email: ${this.state.email}`,
					"name": `name: ${this.state.name}`,
					"phone": `phone: ${this.state.phone}`,
					"company": `company: ${this.state.company}`,
					"project": `project: ${this.state.project}`
				})
			})
			.then((response) => {
				if (response.ok) {
					this.showSuccefulRespond()
					self.setState({
						email: '',
						name: '',
						phone: '',
						company: '',
						project: '',
						validEmail: false,
						validName: false,
						validPhone: false
					})
				} else {
					self.setState({
						problem: response.problem
					})
				}
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

						<form onSubmit={e => this.sendForm(e)} name="contact-with-us" className="col-md-4 col-md-offset-2">

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

								<select required value={this.state.project} onChange={this.handleChangeProject} id="project">
									<option value="">Выберите тип проекта</option>
									<option value="Мобильное приложение">Мобильное приложение</option>
									<option value="Создание API">Создание API</option>
									<option value="UX/UI дизайн">UX/UI дизайн</option>
									<option value="Веб приложение (CRM, ERP…)">Веб приложение (CRM, ERP…)</option>
								</select>

								{/*<input
									type="text"
									required
									placeholder="Тип проекта"
									id="project"
									onChange={this.handleChangeProject}
									value={this.state.project}
								/>*/}
								{/*<label htmlFor="project"/>*/}

							</div>

							<div className='message-mobile'
									 ref={ div => this.showMessage = div}
							/>

							<button
								type="submit"
								id="send-respond-button"
							>
								Отправить запрос
							</button>


						</form>

						<div className="contact col-md-3 col-md-offset-1">

							<img src={page_1_copy_3}
									 className="Page-1-Copy-3" alt=" "/>

							<div className="email">
								Email: <br/>
								<a href='mailto:mail@intelaxy.ru'>mail@intelaxy.ru</a>
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

						<form onSubmit={e => this.sendForm(e)} name="contact-with-us" className="col-md-4 col-md-offset-2 col-sm-4 col-sm-offset-2">

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

								<select required value={this.state.project} onChange={this.handleChangeProject} id="project">
									<option value="">Выберите тип проекта</option>
									<option value="Мобильное приложение">Мобильное приложение</option>
									<option value="Создание API">Создание API</option>
									<option value="UX/UI дизайн">UX/UI дизайн</option>
									<option value="Веб приложение (CRM, ERP…)">Веб приложение (CRM, ERP…)</option>
								</select>

								{/*<input
									type="text"
									required
									placeholder="Тип проекта"
									id="project"
									onChange={this.handleChangeProject}
									value={this.state.project}
								/>*/}
								{/*<label htmlFor="project"/>*/}

							</div>

							<div className='message'
									 ref={ div => this.showMessage = div}
							/>

							<button
								className="button btn-4-blue"
								type="submit"
								id="send-respond-button"
							>
								Отправить запрос
							</button>


						</form>

						<div className="contact col-md-3 col-md-offset-1 col-sm-3 col-sm-offset-1">

							<img src={page_1_copy_3}
									 className="Page-1-Copy-3" alt=" "/>

							<div className="email">
								Email: <br/>
								<a href='mailto:mail@intelaxy.ru'>mail@intelaxy.ru</a>
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