import React from 'react';
import { Link } from 'react-router-dom';
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

			<div className={AppStyles.section3}>
				<p className={`${AppStyles.text} ${AppStyles.height}`}>
					I'm a web developer in frontend. My aim is to build applications that
					carry DRY code, good usability, modern design and meaningful for
					users.
				</p>

				<div className={AppStyles.portfolioWrapper}>
					<div className={AppStyles.cardContainer}>
						<div className={`${AppStyles.card} ${AppStyles.backgroundColor}`}>
							<p className={AppStyles.text}>
								<b>Frontend</b>
							</p>
							<p>Javascript Typescript React Redux HTML5 CSS3 MUI</p>
						</div>
						<div className={`${AppStyles.card} ${AppStyles.backgroundColor}`}>
							<p className={AppStyles.text}>
								<b>Backend</b>
							</p>
							<p>Node.js Express REST API</p>
						</div>
						<div className={`${AppStyles.card} ${AppStyles.backgroundColor}`}>
							<p className={AppStyles.text}>
								<b>Others</b>
							</p>
							<p>Figma Github Gitlab Torello</p>
						</div>
					</div>

					<div className={AppStyles.projectContainer}>
						<Link to={'project'} className={AppStyles.link}>
							<div className={`${AppStyles.project}`}>
								<button className={AppStyles.projectButton}>
									<b className={AppStyles.text}>Project 1</b>
								</button>
							</div>
						</Link>
						<Link to={'project-2'} className={AppStyles.link}>
							<div className={`${AppStyles.project}`}>
								<button className={AppStyles.projectButton}>
									<b className={AppStyles.text}>Project 2</b>
								</button>
							</div>
						</Link>
						<Link to={'project-3'} className={AppStyles.link}>
							<div className={`${AppStyles.project}`}>
								<button className={AppStyles.projectButton}>
									<b className={AppStyles.text}>Project 3</b>
								</button>
							</div>
						</Link>
						<Link to={'project-4'} className={AppStyles.link}>
							<div className={`${AppStyles.project}`}>
								<button className={AppStyles.projectButton}>
									<b className={AppStyles.text}>Project 4</b>
								</button>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div
				className={`${AppStyles.gradient2} ${AppStyles.section} ${AppStyles.container} ${AppStyles.padding}`}
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
