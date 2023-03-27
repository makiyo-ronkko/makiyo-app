import React from 'react';
import AppStyles from './App.module.css';

export const App = () => {
	return (
		<div className={AppStyles.mainWrapper}>
			<div className={`${AppStyles.gradient1} ${AppStyles.section}`}>
				<div className={AppStyles.nameContainer}>
					<p className={AppStyles.bubbleSpeech}>Hello! Moi! こんにちは！</p>
					<img src='/makiyo.png' alt='makiyo' className={AppStyles.image} />
					<span className={AppStyles.name}>Makiyo Rönkkö</span>
				</div>
			</div>
			<div className={AppStyles.introContainer}>
				<p className={AppStyles.text}>
					I'm a web developer in frontend. My aim is to build applications that
					carry DRY code, good usability, modern design and meaningful for
					users.
				</p>
				<div className={AppStyles.cardContainer}>
					<div className={`${AppStyles.card} ${AppStyles.backgroundColor}`}>
						<p className={AppStyles.text}>
							<b>Frontend</b>
						</p>
						Javascript Typescript React Redux HTML5 CSS3 MUI
					</div>
					<div className={`${AppStyles.card} ${AppStyles.backgroundColor}`}>
						<p className={AppStyles.text}>
							<b>Backend</b>
						</p>
						Node.js Express REST API
					</div>
					<div className={`${AppStyles.card} ${AppStyles.backgroundColor}`}>
						<p className={AppStyles.text}>
							<b>Others</b>
						</p>
						Figma Github Gitlab Torello
					</div>
					<button className={`${AppStyles.card} ${AppStyles.project}`}>
						<p>Project 1</p>
					</button>
					<button className={`${AppStyles.card} ${AppStyles.project}`}>
						<p>Project 2</p>
					</button>
					<button className={`${AppStyles.card} ${AppStyles.project}`}>
						<p>Project 3</p>
					</button>
				</div>
			</div>
			<div
				className={`${AppStyles.gradient2} ${AppStyles.section} ${AppStyles.contactContainer}`}
			>
				<h3 className={AppStyles.contact}>Contact</h3>
				<div className={AppStyles.socialMedia}>
					<a
						href='//linkedin.com/in/makiyoronkko '
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-linkedin fa-2x ${AppStyles.fontawesome}`}></i>
					</a>
					<a
						href='//github.com/makiyo-ronkko'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-github fa-2x ${AppStyles.fontawesome}`}></i>
					</a>
				</div>
			</div>

			<div className={AppStyles.section2}>
				<p className={AppStyles.copyright}>
					Copyright &copy; 2023 Makiyo Rönkkö
				</p>
			</div>
		</div>
	);
};
