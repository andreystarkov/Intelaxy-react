import React, { Component } from 'react';
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
			title: 'Серверный администратор Linux (DevOps)',
			price: '40 000 - 100 000 руб.'
		}, {
			title: 'Senior React Developer',
			price: '130 000 - 200 000 руб.'
		}, {
			title: 'Middle React Developer',
			price: '60 000 - 130 000 руб.'
		}, {
			title: 'Junior React Developer',
			price: '20 000 - 60 000 руб.'
		}, {
			title: 'Ruby Developer',
			price: '80 000 - 200 000 руб.'
		}];

		this.professionSkills = [{
			title: 'Ключевые навыки',
			firstSkill: 'Опыт админ. Linux от 2х лет',
			secondSkill: 'Оптимизация производительности',
			thirdSkill: 'Написание скриптов Shell / Bash',
			fourthSkill: 'Linux мониторинг и диагностика',
			fifthSkill: 'Резервное копирование/восстановление'
		}, {
			title: 'Ключевые навыки',
			firstSkill: 'Опыт от 5 лет в JavaScript',
			secondSkill: 'Глубокое знание React',
			thirdSkill: 'Опыт работы с Redux + Saga',
			fourthSkill: 'Большой плюс опыт React Native',
			fifthSkill: 'Наличие публичного репозитория github',
			sixthSkill: 'Spaces not tabs!'
		}, {
			title: 'Ключевые навыки',
			firstSkill: 'Опыт от 2 лет в JavaScript',
			secondSkill: 'Глубокое знание React',
			thirdSkill: 'Опыт работы с Redux + Saga'
		}, {
			title: 'Ключевые навыки',
			firstSkill: 'Хороший опыт HTML/CSS (FlexBox)',
			secondSkill: 'Базовые знания JS, React',
			thirdSkill: 'Большое желание обучатся'
		}, {
			title: 'Ключевые навыки',
			firstSkill: 'Опыт от 2х лет',
			secondSkill: 'Ruby on Rails',
			thirdSkill: 'Хороший опыт верстки'
		}];

		this.professionOffers = [{
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможно удаленная работа'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможно удаленная работа'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможно удаленная работа'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможно удаленная работа',
				thirdOffer: 'Повысим уровень'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможно удаленная работа'
			}];

		this.state = {
			activeProfession: 0,
			activeSkillOffers: true,
			activeSkill: 0,
			activeOffer: 0,
			activeForm: false,
			buttonText: 'Откликнуться',
			files: [],
			open: false
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
		const buttonClasses = classNames('button btn-4-blue', { 'active': this.state.activeForm });
		const { viewPort } = this.props.appReducer.viewPort;

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
