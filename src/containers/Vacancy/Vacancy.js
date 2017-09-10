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
			title: 'Требования',
			firstSkill: 'Опыт админ. Linux от 2х лет',
			secondSkill: 'Оптимизация производительности',
			thirdSkill: 'Написание скриптов Shell / Bash',
			fourthSkill: 'Linux мониторинг и диагностика'
		}, {
			title: 'Требования',
			firstSkill: 'Опыт от 5 лет в JavaScript',
			secondSkill: 'Глубокое знание React',
			thirdSkill: 'Опыт работы с Redux + Saga',
			fourthSkill: 'Большой плюс опыт React Native',
			fifthSkill: 'Наличие публичного репозитория github',
			sixthSkill: 'Spaces not tabs!'
		}, {
			title: 'Требования',
			firstSkill: 'Опыт от 2 лет в JavaScript',
			secondSkill: 'Глубокое знание React',
			thirdSkill: 'Опыт работы с Redux + Saga'
		}, {
			title: 'Требования',
			firstSkill: 'Хороший опыт HTML/CSS (FlexBox)',
			secondSkill: 'Базовые знания JS, React',
			thirdSkill: 'Большое желание обучаться'
		}, {
			title: 'Требования',
			firstSkill: 'Опыт от 2х лет',
			secondSkill: 'Ruby on Rails',
			thirdSkill: 'Хороший опыт верстки'
		}];

		this.professionOffers = [{
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможна удаленная работа'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможна удаленная работа'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможна удаленная работа'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможна удаленная работа',
				thirdOffer: 'Повысим уровень'
			}, {
				title: 'Мы предлагаем',
				firstOffer: 'Работа в офисе г. Самара',
				secondOffer: 'Возможна удаленная работа'
			}];

		this.state = {
			activeProfession: 0,
			activeSkillOffers: true,
			activeSkill: 0,
			activeOffer: 0,
			activeForm: false,
			buttonText: 'Откликнуться',
			files: [],
			base64: '',
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
			files: files
		});
			files.forEach(file => {
				const reader = new FileReader();
				reader.onload = () => {
					const fileAsBinaryString = reader.result;
					const Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){let t="";let n,r,i,s,o,u,a;let f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){let t="";let n,r,i;let s,o,u,a;let f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");let t="";for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){let c1; let c2; let c3; let t="";let n=0;let r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
					let encodedData = Base64.encode(fileAsBinaryString);
					this.setState({
						base64: encodedData
						});
				};
				reader.onabort = () => console.log('file reading was aborted');
				reader.onerror = () => console.log('file reading has failed');

				reader.readAsBinaryString(file);
			});
		console.log('this.state.files', this.state.files)
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

	unsetFiles = () => {
		this.setState({
			files: [],
			base64: '',
		})
	};

	render() {
		console.log('this.state', this.state)
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
									base64={this.state.base64}
									unsetFiles={this.unsetFiles}
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
							base64={this.state.base64}
							unsetFiles={this.unsetFiles}
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
