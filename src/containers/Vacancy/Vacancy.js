import React, { Component } from 'react';
import ButtonAnimation from '../../components/common/ButtonAnimation';
import { Tabs, Tab } from 'react-bootstrap';
import classNames from 'classnames';
import { connect } from 'react-redux';

import Professions from '../../components/Vacancy/Professions/Professions'
import SkillOffers from '../../components/Vacancy/SkillOffers/SkillOffers'
import VacancyMobile from '../../components/Vacancy/VacancyMobile/VacancyMobile';
import VacancyForm from '../../components/Vacancy/VacancyForm/VacancyForm';


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
			buttonText: 'Откликнуться',
			files: [],
			open: true
		}
	};

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

	onDrop(files) {
		this.setState({
			files
		});
	};

	onClickMobile = (profession) => {
		this.setState({
			activeProfession: profession,
			activeSkillOffers: true,
			activeSkill: profession,
			activeOffer: profession,
			activeForm: false,
			buttonText: 'Откликнуться',
			open: !this.state.open,
		})
	};

	showContent = () => {
		this.setState({
			open: !this.state.open,
		})
	};

	render() {

		const formClasses = classNames('col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1 respond', { 'active': this.state.activeForm });
		const formClassesMobile = classNames('col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1 respond mobile active');
		const skillOffersClasses = classNames('col-md-4 col-sm-4 col-md-offset-1 col-sm-offset-1 skills-offers', { 'active': this.state.activeSkillOffers });
		const buttonClasses = classNames('button', { 'active': this.state.activeForm });
		const { viewPort } = this.props.appReducer;

		return (

			<div className="third-screen">

				<div className="header">

				{ (viewPort === 'tablet' || viewPort === 'mobile')

					?

					<div className="gutter-10 row">
						<VacancyMobile
							professions={this.professions}
							activeProfession={this.state.activeProfession}
							onClickMobile={this.onClickMobile}
							expanded={this.state.open}
							showContent={this.showContent}
						/>
						<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
							<Tab eventKey={1} title="Условия">
								<SkillOffers
									skillOffersClasses={skillOffersClasses}
									professionSkills={this.professionSkills}
									activeSkill={this.state.activeSkill}
									activeOffer={this.state.activeOffer}
									professionOffers={this.professionOffers}
								/>
							</Tab>
							<Tab eventKey={2} title="Форма связи">
								<VacancyForm
									formClasses={formClassesMobile}
									onDrop={this.onDrop.bind(this)}
									files={this.state.files}
									activeForm={true}
								/>
							</Tab>
						</Tabs>

					</div>

					:

					<div className="gutter-10 row">

						<Professions
							professions={this.professions}
							activeProfession={this.state.activeProfession}
							handleChange={this.handleChange}
							showForm={this.showForm}
							buttonClasses={buttonClasses}
							buttonText={this.state.buttonText}
						/>

						<SkillOffers
							skillOffersClasses={skillOffersClasses}
							professionSkills={this.professionSkills}
							activeSkill={this.state.activeSkill}
							activeOffer={this.state.activeOffer}
							professionOffers={this.professionOffers}
						/>

						<VacancyForm
							formClasses={formClasses}
							onDrop={this.onDrop.bind(this)}
							files={this.state.files}
						/>

					</div>
				}

				</div>

			</div>

		)
	}
}

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}

export default connect(mapStateToProps)(Vacancy);
