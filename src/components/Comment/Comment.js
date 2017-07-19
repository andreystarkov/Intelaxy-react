import React, { Component } from 'react';
import Slider from 'react-slick';
import bitmap_copy from '../../img/bitmap-copy.jpg';
import bitmap_copy2x from '../../img/bitmap-copy@2x.jpg';
import bitmap_copy3x from '../../img/bitmap-copy@3x.jpg';

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

		const settings = {
			initialSlide: 1,
			slidesToShow: 1,
			infinite: true,
			arrows: false,
			fade: false,
			draggable: true,
			centerMode: true,
			centerPadding: '290px'
		};

		return (

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
											<img src={comment.img}
													 srcSet={`${comment.img}2x 2x,
																			${comment.img}3x 3x`}
											/>

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

		)
	}
}

export default Comment;