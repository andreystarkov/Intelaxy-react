import React from 'react';
import Dropzone from 'react-dropzone';

const VacancyForm = ({ formClasses, onDrop, files }) => {
	return(
		<form action="#" name="send-respond" className={formClasses}>

			<div className="wrap">

				<input type="text" required placeholder="Имя" id="name-respond"/>
				<label htmlFor="name-respond" />

				<input name="email" type="email" required placeholder="Email" id="email-respond"/>
				<label	htmlFor="email-respond" />

				<input type="text" placeholder="Телефон" id="phone-respond"/>
				<label htmlFor="phone-respond" />

				<input type="text" placeholder="Желаемая зарплата" id="pay-respond"/>
				<label htmlFor="pay-respond" />

				<Dropzone onDrop={onDrop} className="drop-zone btn-4" >
					<p>Прикрепить резюме</p>
				</Dropzone>

				<aside className="drop-file">
					<ul>
						{
							files.map((f, index) => <li key={`file-${index}`}>{f.name} - {f.size} bytes</li>)
						}
					</ul>
				</aside>

			</div>

			<button type="submit" id="show-form-button">Отправить запрос</button>

		</form>
	)
};

export default VacancyForm;