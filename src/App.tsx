import React from 'react';
import AppStyle from './App.module.css';

export const App = () => {
	return (
		<div className={AppStyle.mainWrapper}>
			<div className={`${AppStyle.gradient1} ${AppStyle.section}`}>
				<div className={AppStyle.nameContainer}>
					<p className={AppStyle.bubbleSpeech}>Hello! Moi! こんにちは！</p>
					<img src='/makiyo.png' alt='makiyo' className={AppStyle.image} />
					<span className={AppStyle.name}>Makiyo Rönkkö</span>
				</div>
			</div>
			<div className={AppStyle.introContainer}>
				<p className={AppStyle.text}>
					I'm a web developer in frontend. My aim is to build applications that
					carry DRY code, good usability, modern design and meaningful for
					users.
				</p>
				<div className={AppStyle.cardContainer}>
					<div className={`${AppStyle.card} ${AppStyle.frontend}`}>
						<p className={AppStyle.text}>
							<b>Frontend</b>
						</p>
						Javascript Typescript React Redux HTML5 CSS3 MUI
					</div>
					<div className={`${AppStyle.card} ${AppStyle.backend}`}>
						<p className={AppStyle.text}>
							<b>Backend</b>
						</p>
						Node.js Express REST API
					</div>
					<div className={`${AppStyle.card} ${AppStyle.others}`}>
						<p className={AppStyle.text}>
							<b>Others</b>
						</p>
						Figma Github Gitlab Torello Postman
					</div>
				</div>
			</div>
			<div
				className={`${AppStyle.gradient2} ${AppStyle.section} ${AppStyle.contactContainer}`}
			>
				<h3 className={AppStyle.contact}>Contact</h3>
				<div className={AppStyle.socialMedia}>
					<a
						href='//linkedin.com/in/makiyoronkko '
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-linkedin fa-2x ${AppStyle.fontawesome}`}></i>
					</a>
					<a
						href='//github.com/makiyo-ronkko'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-github fa-2x ${AppStyle.fontawesome}`}></i>
					</a>
				</div>
			</div>

			<div className={AppStyle.section2}>
				<p className={AppStyle.copyright}>
					Copyright &copy; 2022 Makiyo Rönkkö
				</p>
			</div>
		</div>
	);
};
