import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './MainStyle.module.css';

const PROJECTS = [
	{ link: 'project', name: 'Single Column Layout' },
	{ link: 'project-2', name: 'Project 2' },
	{ link: 'project-3', name: 'Project 3' },
	{ link: 'project-4', name: 'Project 4' },
	{ link: 'project-5', name: 'Project 5' },
	{ link: 'project-6', name: 'Project 6' },
	{ link: 'project-7', name: 'Project 7' },
	{ link: 'project-8', name: 'Project 8' },
];

export const Skills = () => {
	return (
		<div className={Styles.wrapper}>
			<>
				<p className={`${Styles.description} ${Styles.fontStyle}`}>
					"I'm a web developer in frontend. My aim is to build applications that
					carry DRY code, good usability, modern design and meaningful for
					users."
				</p>
				<div className={Styles.cardContainer}>
					<div className={Styles.card}>
						<p className={Styles.text}>
							<b>Frontend</b>
						</p>
						<p>Javascript Typescript React Redux HTML5 CSS3 MUI</p>
					</div>
					<div className={Styles.card}>
						<p className={Styles.text}>
							<b>Backend</b>
						</p>
						<p>Node.js Express REST API</p>
					</div>
					<div className={Styles.card}>
						<p className={Styles.text}>
							<b>Others</b>
						</p>
						<p>Figma Github Gitlab Torello</p>
					</div>
				</div>
			</>
			<div className={Styles.projectWrapper}>
				<p className={`${Styles.description} ${Styles.subTitle}`}>
					Various Responsive Web Designs
				</p>
				<div className={Styles.projectContainer}>
					{PROJECTS.map((project) => {
						return (
							<Link
								to={project.link}
								className={Styles.link}
								key={project.link}
							>
								<div className={`${Styles.project}`}>
									<button className={Styles.projectButton}>
										<b className={Styles.text}>{project.name}</b>
									</button>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};
