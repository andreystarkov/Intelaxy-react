import React, { Component } from 'react';
import Slider from 'react-slick';
import rectangle_3_copy_2 from '../../img/rectangle-3-copy-2.svg';
import portfolio_todoya from '../../img/portfolio-todoya.jpg';
import portfolio_todoya2x from '../../img/portfolio-todoya@2x.jpg';
import portfolio_todoya3x from '../../img/portfolio-todoya@3x.jpg';
import path_2_copy_3 from '../../img/path-2-copy-3.svg';

class Platform extends Component {

	changeHandler = (n, e) => {
		switch(e) {
			case this.platformReact:
				e.className = 'platform react col-md-2 col-md-offset-2 col-sm-2 col-sm-offset-1 active';
				this.platformRails.className = 'platform rails col-md-2 col-sm-2';
				this.platformIos.className = 'platform ios col-md-2 col-sm-2';
				this.platformAndroid.className = 'platform android col-md-2 col-sm-2';
				break;
			case this.platformRails:
				e.className = 'platform rails col-md-2 col-sm-2 active';
				this.platformReact.className = 'platform react col-md-2 col-md-offset-2 col-sm-2 col-sm-offset-1';
				this.platformIos.className = 'platform ios col-md-2 col-sm-2';
				this.platformAndroid.className = 'platform android col-md-2 col-sm-2';
				break;
			case this.platformIos:
				e.className = 'platform ios col-md-2 col-sm-2 active';
				this.platformReact.className = 'platform react col-md-2 col-md-offset-2 col-sm-2 col-sm-offset-1';
				this.platformRails.className = 'platform rails col-md-2 col-sm-2';
				this.platformAndroid.className = 'platform android col-md-2 col-sm-2';
				break;
			case this.platformAndroid:
				e.className = 'platform android col-md-2 col-sm-2 active';
				this.platformReact.className = 'platform react col-md-2 col-md-offset-2 col-sm-2 col-sm-offset-1';
				this.platformRails.className = 'platform rails col-md-2 col-sm-2';
				this.platformIos.className = 'platform ios col-md-2 col-sm-2';
				break;
			default:
				break;
		}
		this.refs.slider.slickGoTo(n);
	};

	settings = {
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		fade: false,
		draggable: false
	};

	render() {

		return (
			<div className="second-screen">

				<div className="header gutter-10 row">

					<div className="platform react col-md-2 col-md-offset-2 col-sm-2 col-sm-offset-1 active" id="react"
							 onClick={ () => this.changeHandler(0, this.platformReact) } ref={ div => {this.platformReact = div}}>

						<div className="empty-box"></div>

						<div className="logo"></div>

						<svg xmlns="http://www.w3.org/2000/svg" width="123" height="110" viewBox="0 0 123 110"
								 className="react-anim">
							<g fill="#00D8FF" fillRule="nonzero">
								<ellipse cx="61.507" cy="54.601" rx="10.969" ry="10.981"/>
								<path
									d="M61.507 79.757c-15.404 0-28.863-1.815-38.936-5.272-6.533-2.231-12.083-5.206-16.038-8.597C2.338 62.301.11 58.385.11 54.601c0-7.263 7.954-14.372 21.304-19.01 10.925-3.806 25.17-5.928 40.073-5.928 14.639 0 28.688 2.056 39.548 5.819 6.358 2.187 11.711 5.031 15.513 8.181 4.13 3.456 6.315 7.24 6.315 10.938 0 7.547-8.893 15.181-23.227 19.928-10.138 3.369-23.685 5.228-38.128 5.228zm0-44.844c-14.136 0-28.12 2.056-38.346 5.622C10.88 44.822 5.375 50.685 5.375 54.6c0 4.068 5.921 10.478 18.9 14.919 9.527 3.259 22.418 4.987 37.232 4.987 13.897 0 26.854-1.75 36.49-4.966 13.481-4.484 19.643-10.893 19.643-14.94 0-2.079-1.573-4.529-4.436-6.913-3.3-2.756-8.106-5.272-13.853-7.263-10.335-3.543-23.772-5.512-37.844-5.512z"/>
								<path
									d="M36.62 109.332c-2.228 0-4.195-.48-5.855-1.443-6.271-3.632-8.456-14.088-5.812-27.979 2.163-11.397 7.45-24.784 14.901-37.713 7.32-12.687 16.104-23.844 24.778-31.39 5.07-4.42 10.204-7.657 14.836-9.363 5.047-1.86 9.417-1.86 12.607-.022 6.533 3.762 8.697 15.313 5.638 30.1-2.163 10.5-7.32 23.166-14.53 35.7-7.692 13.345-15.995 24.107-24.014 31.13-5.2 4.55-10.553 7.874-15.447 9.602-2.557.92-4.96 1.378-7.102 1.378zm5.485-65.822l2.272 1.312c-7.057 12.25-12.28 25.398-14.29 36.073-2.425 12.797-.087 20.497 3.278 22.444.83.48 1.923.743 3.255.743 4.349 0 11.188-2.756 19.097-9.668 7.582-6.629 15.514-16.954 22.92-29.795 6.949-12.053 11.887-24.172 13.94-34.125 2.863-13.934.394-22.466-3.124-24.5-1.791-1.028-4.697-.897-8.193.394-4.043 1.487-8.61 4.396-13.198 8.4-8.237 7.175-16.65 17.85-23.685 30.056l-2.272-1.334z"/>
								<path
									d="M86.394 109.398c-5.943 0-13.481-3.587-21.347-10.369-8.784-7.569-17.72-18.834-25.193-31.763C32.513 54.58 27.27 41.388 25.062 30.078c-1.29-6.606-1.53-12.665-.7-17.543.918-5.316 3.081-9.1 6.293-10.96 6.512-3.784 17.59.11 28.864 10.15 7.997 7.11 16.387 17.916 23.62 30.429 7.713 13.344 12.891 25.922 14.945 36.378 1.333 6.781 1.551 13.082.612 18.2-1.005 5.447-3.278 9.32-6.555 11.222-1.639.963-3.583 1.444-5.747 1.444zM44.4 64.641c7.08 12.25 15.863 23.341 24.079 30.407 9.854 8.488 17.676 10.325 21.063 8.356 3.518-2.034 6.096-10.369 3.43-23.844-1.966-9.887-6.926-21.919-14.355-34.76-6.97-12.053-14.99-22.4-22.571-29.137-10.62-9.45-19.228-11.572-22.746-9.538-1.791 1.028-3.124 3.631-3.758 7.306-.721 4.244-.503 9.67.677 15.641 2.098 10.741 7.123 23.363 14.18 35.57z"/>
							</g>
						</svg>

						<h3>React Native</h3>

					</div>

					<div className={`platform rails col-md-2 col-sm-2 url`} id="rails" onClick={ () => this.changeHandler(1, this.platformRails) } ref={ div => {this.platformRails = div} } >

						<div className="empty-box"></div>

						<div className="logo"></div>

						<svg xmlns="http://www.w3.org/2000/svg" width="192" height="68" viewBox="0 0 192 68" className="rails-anim">
							<g fill="#D0011B" fillRule="nonzero">
								<path
									d="M166.904 58.664v8.739h15.838c3.245 0 8.815-2.366 9.01-8.98v-3.38c0-5.65-4.65-8.981-9.01-8.981h-7.894v-4.056h15.644V33.22h-15.015c-3.875 0-9.057 3.186-9.057 9.125v3.042c0 5.939 5.134 8.98 9.057 8.98 10.898.049-2.615 0 7.46 0v4.25M82.048 56.54s8.476-.725 8.476-11.637-10.268-11.926-10.268-11.926H61.754v34.426h9.299v-8.305l8.04 8.305h13.755l-10.8-10.864zm-3.585-7.05h-7.41v-7.87h7.459s2.083.772 2.083 3.91c0 3.14-2.132 3.96-2.132 3.96zM113.481 33.219h-9.444c-6.733 0-9.01 6.083-9.01 8.98v25.204h9.446v-6.035h8.863v6.035h9.154V42.199c0-7.339-6.684-8.98-9.009-8.98zm-.145 18.395h-8.912v-8.353s0-1.883 2.955-1.883h3.245c2.615 0 2.664 1.883 2.664 1.883v8.353h.048zM126.801 33.219h9.832v34.184h-9.832zM150.437 58.567V33.22h-9.784v34.184h23.006v-8.836z"/>
								<path
									d="M3.39 67.403h38.263S34.34 34.136 58.557 20.665c5.28-2.559 22.086-12.119 49.597 8.16.871-.724 1.695-1.304 1.695-1.304S84.663 2.462 56.619 5.263c-14.094 1.255-31.433 14.05-41.604 30.95C4.843 53.11 3.39 67.402 3.39 67.402z"/>
								<path
									d="M3.39 67.403h38.263S34.34 34.136 58.557 20.665c5.28-2.559 22.086-12.119 49.597 8.16.871-.724 1.695-1.304 1.695-1.304S84.663 2.462 56.619 5.263c-14.094 1.255-31.433 14.05-41.604 30.95C4.843 53.11 3.39 67.402 3.39 67.402z"/>
								<path
									d="M3.39 67.403h38.263S34.34 34.136 58.557 20.665c5.28-2.559 22.086-12.119 49.597 8.16.871-.724 1.695-1.304 1.695-1.304S84.663 2.462 56.619 5.263c-14.142 1.255-31.482 14.05-41.653 30.95C4.795 53.11 3.39 67.402 3.39 67.402zM83.113 7.967l.194-3.235c-.436-.242-1.647-.821-4.698-1.69l-.194 3.186a77.922 77.922 0 0 1 4.698 1.739z"/>
								<path
									d="M78.512 18.203l-.194 3.041a27.09 27.09 0 0 1 4.795.58l.194-2.994a34.4 34.4 0 0 0-4.795-.627zM60.591 3.138h.485l-.97-2.945c-1.5 0-3.05.097-4.649.29l.92 2.849a41.017 41.017 0 0 1 4.214-.194zM62.916 20.906l1.114 3.332c1.405-.676 2.81-1.255 4.214-1.69l-1.066-3.187a35.212 35.212 0 0 0-4.262 1.545zM40.927 8.208l-2.18-3.331a77.11 77.11 0 0 0-3.777 2.076l2.227 3.38c1.26-.773 2.47-1.497 3.73-2.125zM50.856 29.935l2.325 3.477c.823-1.207 1.792-2.318 2.857-3.428l-2.18-3.284a26.743 26.743 0 0 0-3.002 3.235zM43.833 45.482l3.923 3.09a38.45 38.45 0 0 1 1.017-5.649l-3.487-2.752c-.63 1.787-1.066 3.573-1.453 5.311zM22.619 22.548l-3.439-2.993a83.79 83.79 0 0 0-3.584 3.62l3.73 3.187a48.94 48.94 0 0 1 3.293-3.814zM7.992 44.13l-5.57-2.027C1.502 44.179.484 46.593 0 47.897l5.57 2.027c.63-1.641 1.647-4.007 2.422-5.793zM43.106 57.746c.097 2.56.34 4.635.582 6.084l5.812 2.076c-.436-1.883-.872-4.007-1.163-6.277l-5.23-1.883z"/>
							</g>
						</svg>

						<h3>Ruby on Rails</h3>

					</div>

					<div className="platform ios col-md-2 col-sm-2" id="ios" onClick={ () => this.changeHandler(2, this.platformIos) } ref={ div => {this.platformIos = div} }>

						<div className="empty-box"></div>

						<div className="logo"></div>

						<svg xmlns="http://www.w3.org/2000/svg" width="75" height="90" viewBox="0 0 75 90" className="ios-anim">
							<path fill="#0A0C0F" fillRule="evenodd"
										d="M55.772 21.094c6.407 0 11.953 3.047 16.64 9.14-4.687 2.657-7.734 6.485-9.14 11.485-1.406 5-1.015 9.843 1.172 14.531 2.188 4.688 5.703 7.969 10.547 9.844-1.719 4.062-3.594 7.656-5.625 10.781C63.741 85.625 58.663 90 54.132 90h-.235c-1.719 0-3.945-.625-6.68-1.875-2.734-1.25-5.43-1.875-8.085-1.875-2.813 0-5.586.625-8.32 1.875C28.076 89.375 25.85 90 24.131 90h-.235c-4.687 0-9.687-4.14-15-12.422-5-7.812-7.89-16.094-8.672-24.844-.78-8.75.47-15.546 3.75-20.39 4.688-7.5 10.782-11.25 18.282-11.25 2.343 0 5.273.625 8.789 1.875 3.515 1.25 6.132 1.875 7.851 1.875 1.563 0 4.063-.625 7.5-1.875 3.438-1.25 6.563-1.875 9.375-1.875zM53.897 0c.625 5-.781 9.844-4.219 14.531-3.593 4.688-7.968 7.031-13.125 7.031h-.234c-.781-4.53.625-9.218 4.219-14.062 3.906-4.688 8.36-7.187 13.36-7.5z"/>
						</svg>

						<h3>iOS</h3>

					</div>

					<div className="platform android col-md-2 col-sm-2" id="android" onClick={ () => this.changeHandler(3, this.platformAndroid) } ref={ div => {this.platformAndroid = div} } >

						<div className="empty-box"></div>

						<div className="logo"></div>

						<svg xmlns="http://www.w3.org/2000/svg" width="83" height="90" viewBox="0 0 83 90" className="android-anim">
							<path fill="#7ED321" fillRule="evenodd"
										d="M15 68.906V30h52.5v38.906c0 2.188-.86 3.281-2.578 3.281h-6.563v12.188c0 1.563-.546 2.89-1.64 3.984C55.625 89.453 54.297 90 52.734 90H52.5c-1.094 0-2.187-.39-3.281-1.172-1.407-1.094-2.11-2.578-2.11-4.453V72.187H35.625v12.188c0 1.563-.547 2.89-1.64 3.984C32.89 89.453 31.562 90 30 90c-1.563 0-2.89-.547-3.984-1.64-1.094-1.094-1.641-2.422-1.641-3.985V72.187h-6.797c-1.719 0-2.578-1.093-2.578-3.28zM76.875 26.25c1.563 0 2.89.547 3.984 1.64 1.094 1.094 1.641 2.422 1.641 3.985v22.5c0 1.563-.547 2.89-1.64 3.984C79.765 59.453 78.437 60 76.874 60c-1.563 0-2.89-.547-3.984-1.64-1.094-1.094-1.641-2.422-1.641-3.985v-22.5c0-1.563.547-2.89 1.64-3.984 1.094-1.094 2.422-1.641 3.985-1.641zm-71.25 0c1.563 0 2.89.547 3.984 1.64 1.094 1.094 1.641 2.422 1.641 3.985v22.5c0 1.563-.547 2.89-1.64 3.984C8.515 59.453 7.187 60 5.624 60c-1.563 0-2.89-.547-3.984-1.64C.547 57.265 0 55.937 0 54.374v-22.5c0-1.563.547-2.89 1.64-3.984 1.094-1.094 2.422-1.641 3.985-1.641zM54.141 5.86c3.437 1.562 6.21 3.867 8.32 6.913 2.11 3.047 3.437 5.586 3.984 7.618.547 2.03.899 3.984 1.055 5.859H15c.625-10 5-16.797 13.125-20.39L23.906.702c0-.156.078-.312.235-.469L24.844 0l4.453 5.39c3.906-1.406 7.89-2.109 11.953-2.109 3.906 0 7.812.703 11.719 2.11L57.656 0c.157 0 .313.078.469.234l.469.47-4.453 5.155zM29.766 17.577c2.03 0 3.047-1.015 3.047-3.047 0-.781-.313-1.523-.938-2.226-.625-.703-1.328-1.055-2.11-1.055-.937 0-1.718.352-2.343 1.055s-.938 1.445-.938 2.226c0 .782.352 1.485 1.055 2.11.703.625 1.445.937 2.227.937zm22.968 0c.782 0 1.524-.312 2.227-.937.703-.625 1.055-1.328 1.055-2.11 0-.781-.352-1.523-1.055-2.226-.703-.703-1.445-1.055-2.227-1.055-2.03 0-3.047 1.094-3.047 3.281 0 2.032 1.016 3.047 3.047 3.047z"/>
						</svg>

						<h3>Android</h3>

					</div>

					<div className="col-md-2 col-sm-2"></div>

					<div className="line col-md-offset-2"></div>

				</div>

				<div className="gutter-10 row">

					<div className="body col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">

						<Slider	ref='slider' {...this.settings} defaultValue={0} type='range' min={0} max={3}>

							<div className="platform react" id="react-text">

								<div className="title">Гибридная разработка приложений</div>

								<p>
									React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
									View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
									отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
									пользовательский опыт.
								</p>

								<img src={rectangle_3_copy_2}
										 className="Rectangle-3-Copy-2"/>
							</div>

							<div className="platform rails" id="rails-text">

								<div className="title">Ruby on rails</div>

								<p>
									React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
									View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
									отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
									пользовательский опыт.
								</p>

								<img src={rectangle_3_copy_2}
										 className="Rectangle-3-Copy-2"/>
							</div>

							<div className="platform ios" id="ios-text">

								<div className="title">ios</div>

								<p>
									React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
									View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
									отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
									пользовательский опыт.
								</p>

								<img src={rectangle_3_copy_2}
										 className="Rectangle-3-Copy-2"/>

							</div>

							<div className="platform android" id="android-text">

								<div className="title">Android</div>

								<p>
									React Native — то JS-фреймворк, основанный на JavaScript и React — JS-библиотеке для создания UI
									View-уровня. Данная технология позволяет делать нативные приложения для устройств на Android, iOS с
									отдельной адаптаций под каждую платформу, обеспечивает более дешевую и простую разработку и отличный
									пользовательский опыт.
								</p>

								<img src={rectangle_3_copy_2}
										 className="Rectangle-3-Copy-2" />

							</div>

						</Slider>

					</div>

				</div>

				<div className="footer">

					<img src={portfolio_todoya}
							 srcSet={`${portfolio_todoya2x} 2x,
             ${portfolio_todoya3x} 3x`}
							 className="Portfolio-todoya"/>

					<div className="title gutter-10 row">

						<div className="col-md-4 col-sm-4">

							<p>Планировщик задач</p>

							<h3>TODOYA</h3>

						</div>

					</div>

					<div className="button">

						<div className="gutter-10 row">

							<div className="col-md-1 col-md-offset-11 col-sm-1 col-sm-offset-11">

								<img src={path_2_copy_3}
										 className=""/>

							</div>

						</div>

					</div>

				</div>

			</div>
		);
	}
};

export default Platform;