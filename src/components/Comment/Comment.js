import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import bitmap_copy from '../../img/bitmap-copy.jpg';

class Comment extends Component {

	constructor(props) {
		super(props);

		this.comments = [{
			img: bitmap_copy,
			name: 'Alexey Ryskin',
			company: 'SEO of Intelaxy inc.',
			review: `Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них
								нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.`
		}, {
			img: bitmap_copy,
			name: 'Alexey Ryskin',
			company: 'SEO of Intelaxy inc.',
			review: `Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них
								нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.`
		},{
			img: bitmap_copy,
			name: 'Alexey Ryskin',
			company: 'SEO of Intelaxy inc.',
			review: `Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них
								нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.`
		}]
	};

	next = () => {
		this.slider.slickNext()
	};

	previous = () => {
		this.slider.slickPrev()
	};


	render() {

		const { viewWidth } = this.props.appReducer.viewPort;
		const { viewPort } = this.props.appReducer.viewPort;
		const commentPaddingHD = (viewWidth * 0.184);
		const commentPaddingDesktop = (viewWidth * 0.135);
		let commentPadding;
		if (viewPort === 'desktopHD') {
			commentPadding = commentPaddingHD
		} else if (viewPort === 'desktop') {
			commentPadding = commentPaddingDesktop
		} else {
			commentPadding = commentPaddingDesktop
		}

		const settings = {
			initialSlide: 1,
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			fade: false,
			draggable: true,
			centerMode: true,
			centerPadding: `${commentPadding}px`
		};

		const settingsMobile = {
			initialSlide: 1,
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			fade: false,
			draggable: true,
			// centerMode: true,
			dots: true
		};

		return (

			<div>

				{ (viewPort === 'desktopHD' || viewPort === 'desktop' || viewPort === 'desktopSmall')

					?

					<div className="section-comment">

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="64"
							viewBox="0 0 34 64"
							className="Path-2-Copy prev"
							onClick={() => this.previous()}
						>
							<path
								fill="none"
								fillRule="evenodd"
								stroke="#21B4ED"
								d="M33 0L1 32.817 31.408 64"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="64"
							viewBox="0 0 34 64"
							className="Path-2-Copy-2 next"
							onClick={() => this.next()}
						>
							<path
								fill="none"
								fillRule="evenodd"
								stroke="#21B4ED"
								d="M1 0l32 32.817L2.592 64"
							/>
						</svg>

						<Slider ref={c => this.slider = c }	{...settings}>

								{ this.comments.map((comment, index) => {

										return (
											<div
												key={`commnt-${index}`}
												className="comment"
											>
												<div
													className="wrap"
													key={`comment-${index}`}
												>
													<img src={comment.img} />

													<div className="name">{comment.name}</div>

													<div className="company">{comment.company}</div>

													<p className="review">{comment.review}</p>
												</div>
											</div>
										)
									})
								}

						</Slider>

					</div>

					:

					<div className="section-comment">
						<Slider ref={c => this.slider = c }	{...settingsMobile}>

							{ this.comments.map((comment, index) => {

								return (
									<div
										key={`commnt-${index}`}
										className="comment"
									>
										<div
											className="wrap"
											key={`comment-${index}`}
										>
											<img src={comment.img} />

											<div className="name">{comment.name}</div>

											<div className="company">{comment.company}</div>

											<p className="review">{comment.review}</p>
										</div>
									</div>
								)
							})
							}

						</Slider>
					</div>

				}

			</div>

		)
	}
}

function mapStateToProps(state) {
	return {
		appReducer: state.appReducer
	};
}


export default connect(mapStateToProps)(Comment);