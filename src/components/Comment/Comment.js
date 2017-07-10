import React from 'react';
import bitmap_copy from '../../img/bitmap-copy.jpg';
import bitmap_copy2x from '../../img/bitmap-copy@2x.jpg';
import bitmap_copy3x from '../../img/bitmap-copy@3x.jpg';

const Comment = () => {
	return (

		<div className="section-comment">

			<svg xmlns="http://www.w3.org/2000/svg" width="34" height="64" viewBox="0 0 34 64" className="Path-2-Copy prev">
				<path fill="none" fillRule="evenodd" stroke="#21B4ED" d="M33 0L1 32.817 31.408 64"/>
			</svg>

			<svg xmlns="http://www.w3.org/2000/svg" width="34" height="64" viewBox="0 0 34 64" className="Path-2-Copy-2 next">
				<path fill="none" fillRule="evenodd" stroke="#21B4ED" d="M1 0l32 32.817L2.592 64"/>
			</svg>

			<div className="carousel-bottom">

				<div className="comment">
					<div className="wrap">
						<img src={bitmap_copy}
								 srcSet={`${bitmap_copy2x} 2x,
						 ${bitmap_copy3x} 3x`}
								 className="Bitmap-Copy" />

						<div className="name">Alexey Ryskin</div>

						<div className="company">SEO of Intelaxy inc.</div>

						<p className="review">Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них
							нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.</p>
					</div>


					<div className="wrap">
						<img src={bitmap_copy}
								 srcSet={`${bitmap_copy2x} 2x,
						 ${bitmap_copy3x} 3x`}
								 className="Bitmap-Copy" />

						<div className="name">Alexey Ryskin</div>

						<div className="company">SEO of Intelaxy inc.</div>

						<p className="review">Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них
							нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.</p>
					</div>
				</div>
				<div className="comment">
					<div className="wrap">
						<img src={bitmap_copy}
								 srcSet={`${bitmap_copy2x} 2x,
						 ${bitmap_copy3x} 3x`}
								 className="Bitmap-Copy" />

							<div className="name">Alexey Ryskin</div>

							<div className="company">SEO of Intelaxy inc.</div>

							<p className="review">Самая профессиональная компания из всех, с которыми мне приходилось работать. Для них нет ничего невозможного, дай бог им счастья, здоровья, развития и всех-всех благ.</p>
					</div>
				</div>

			</div>

		</div>

	)
};

export default Comment;