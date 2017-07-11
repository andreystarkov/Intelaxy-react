import React, { Component } from 'react';
import ButtonAnimation from '../common/ButtonAnimation';
import classNames from 'classnames';

class Vacancy extends Component {

	constructor(props) {
		super(props);

		this.profession = null;

		this.professions = [{
			title: 'QA Engineer',
			price: '100 000 – 120 000 руб.'
		}, {
			title: 'Support Engineer',
			price: '100 000 – 120 000 руб.'
		}, {
			title: 'Lead Web-разработчик',
			price: '100 000 – 120 000 руб.'
		}, {
			title: 'Ведущий Front-End разработчик',
			price: '100 000 – 120 000 руб.'
		}, {
			title: 'Ведущий Web-разработчик',
			price: '100 000 – 120 000 руб.'
		}, {
			title: 'HTML-верстальщик',
			price: '100 000 – 120 000 руб.'
		}];

		this.professionSkills = [{
			title: 'Ключевые навыки QA Engineer',
			firstSkill: 'Первый навык QA Engineer',
			secondSkill: 'Второй навык QA Engineer',
			thirdSkill: 'Третий навык подлиннее QA Engineer',
			fourthSkill: 'А четвертый совсем длинный (с примерами в скобках) QA Engineer'
		}, {
			title: 'Ключевые навыки Support Engineer',
			firstSkill: 'Первый навык Support Engineer',
			secondSkill: 'Второй навык Support Engineer',
			thirdSkill: 'Третий навык подлиннее Support Engineer',
			fourthSkill: 'А четвертый совсем длинный (с примерами в скобках) Support Engineer'
		}, {
			title: 'Ключевые навыки Lead Web-разработчик',
			firstSkill: 'Первый навык Lead Web-разработчик',
			secondSkill: 'Второй навык Lead Web-разработчик',
			thirdSkill: 'Третий навык подлиннее Lead Web-разработчик',
			fourthSkill: 'А четвертый совсем длинный (с примерами в скобках) Lead Web-разработчик'
		}, {
			title: 'Ключевые навыки Ведущий Front-End разработчик',
			firstSkill: 'Первый навык Ведущий Front-End разработчик',
			secondSkill: 'Второй навык Ведущий Front-End разработчик',
			thirdSkill: 'Третий навык подлиннее Ведущий Front-End разработчик',
			fourthSkill: 'А четвертый совсем длинный (с примерами в скобках) Ведущий Front-End разработчик'
		}, {
			title: 'Ключевые навыки Ведущий Web-разработчик',
			firstSkill: 'Первый навык Ведущий Web-разработчик',
			secondSkill: 'Второй навык Ведущий Web-разработчик',
			thirdSkill: 'Третий навык подлиннее Ведущий Web-разработчик',
			fourthSkill: 'А четвертый совсем длинный (с примерами в скобках) Ведущий Web-разработчик'
		}, {
			title: 'Ключевые навыки HTML-верстальщик',
			firstSkill: 'Первый навык HTML-верстальщик',
			secondSkill: 'Второй навык HTML-верстальщик',
			thirdSkill: 'Третий навык подлиннее HTML-верстальщик',
			fourthSkill: 'А четвертый совсем длинный (с примерами в скобках) HTML-верстальщик'
		}];

		this.professionOffers = [{
				title: 'Мы предлагаем',
				firstOffer: 'Главное преимущество QA Engineer',
				secondOffer: 'Второстепенное преимущество QA Engineer',
				thirdOffer: 'Плюшки с чайком',
				fourthOffer: 'Что-нибудь еще'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Главное преимущество Support Engineer',
				secondOffer: 'Второстепенное преимущество Support Engineer',
				thirdOffer: 'Плюшки с чайком',
				fourthOffer: 'Что-нибудь еще'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Главное преимущество Lead Web-разработчик',
				secondOffer: 'Второстепенное преимущество Lead Web-разработчик',
				thirdOffer: 'Плюшки с чайком',
				fourthOffer: 'Что-нибудь еще'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Главное преимущество Front-End разработчик',
				secondOffer: 'Второстепенное преимущество Ведущий Front-End разработчик',
				thirdOffer: 'Плюшки с чайком',
				fourthOffer: 'Что-нибудь еще'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Главное преимущество Ведущий Web-разработчик',
				secondOffer: 'Второстепенное преимущество Ведущий Web-разработчик',
				thirdOffer: 'Плюшки с чайком',
				fourthOffer: 'Что-нибудь еще'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Главное преимущество HTML-верстальщик',
				secondOffer: 'Второстепенное преимущество HTML-верстальщик',
				thirdOffer: 'Плюшки с чайком',
				fourthOffer: 'Что-нибудь еще'
		}];

		this.state = {
			activeProfession: 0,
			activeSkillOffers: true,
			activeSkill: 0,
			activeOffer: 0,
			activeForm: false,
			buttonText: 'Откликнуться'
		};
	}

	handleChange = (event, profession) => {
		event.stopPropagation();
		this.setState({
			activeProfession: profession,
			activeSkillOffers: true,
			activeSkill: profession,
			activeOffer: profession,
			activeForm: false,
			buttonText: 'Откликнуться'
		})
	};

	showForm = (event, profession) => {
		event.stopPropagation();

		this.state.activeForm ? (
			this.setState({
				activeProfession: profession,
				activeSkillOffers: true,
				activeSkill: profession,
				activeOffer: profession,
				activeForm: false,
				buttonText: 'Откликнуться'
			})
		) : (
		this.setState({
			activeProfession: profession,
			activeSkillOffers: false,
			activeSkill: null,
			activeOffer: null,
			activeForm: true,
			buttonText: 'Вернуться к условиям'
		}) )
	};

	render() {

		const formClasses = classNames('col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1 respond', { 'active': this.state.activeForm });
		const skillOffersClasses = classNames('col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1 skills-offers', { 'active': this.state.activeSkillOffers });
		const buttonClasses = classNames('button', { 'active': this.state.activeForm });

		return (

			<div className="third-screen">

				<div className="header">

					<div className="gutter-10 row">

						<div className="col-md-3 col-md-offset-2 col-sm-3 col-sm-offset-2">

							{ this.professions.map( (profession, index) => {

								const classes = classNames('profession', { 'active': index === this.state.activeProfession });

								return(

									<div
										key={`profession-${index}`}
										className={classes}
										onClick={(event)=>this.handleChange(event, index)}
									>
										<h2>{profession.title}</h2>
										<div className="price">{profession.price}</div>
										<ButtonAnimation />
										<div
											className={buttonClasses}
											onClick={(event)=>this.showForm(event, index)}
										>{this.state.buttonText}</div>
									</div>

								)}
							)}

						</div>

						<div className={skillOffersClasses}>

							{ this.professionSkills.map((profession, index)=>{

								const classes = classNames('skills', { 'active': index === this.state.activeSkill });

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
								this.professionOffers.map( (profession, index) => {

									const classes = classNames('offer', { 'active': index === this.state.activeOffer });

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

						<form action="#" name="send-respond" className={formClasses}>

							<div className="wrap">

								<input name="email" type="email" required placeholder="Email" id="email-respond"/>
								<label	htmlFor="email-respond"></label>

								<input type="text" required placeholder="Имя" id="name-respond"/>
								<label htmlFor="name-respond"></label>

								<input type="text" required placeholder="Должность" id="phone-respond"/>
								<label htmlFor="phone-respond"></label>

								<input type="text" required placeholder="Компания" id="company-respond"/>
								<label htmlFor="company-respond"></label>

								<input type="text" required placeholder="Тип проекта" id="project-respond"/>
								<label htmlFor="project-respond"></label>

							</div>

							<ButtonAnimation />

							<button type="submit" id="show-form-button">Отправить запрос</button>

						</form>

					</div>

				</div>

			</div>

		)
	}
}

export default Vacancy;
