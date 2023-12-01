import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './MainStyle.module.css';
import { Skills } from './Skills';
import { CompanyProject } from './CompanyProject';

const PROJECTS = [
	{ link: 'login-page', name: 'Login Page' },
	{ link: 'single-column-layout', name: 'Single Column Layout' },
	{ link: 'full-screen-layout', name: 'Full Screen Layout' },
	{ link: 'ec-layout', name: 'E-Commerce Layout' },
	{ link: 'multi-column-layout', name: 'Multi-Column Layout' },
	{ link: 'pixel-art', name: 'Pixel Art' },
	{ link: 'todo-app', name: 'TODO App' },
];

export const Body = () => {
	return (
		<>
			<Skills />
			<CompanyProject />
			<div className={`${Styles.projectWrapper} ${Styles.paddingBottom}`}>
				<p className={Styles.subTitle}>Mini Projects</p>
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
										<b className={Styles.projectTitle}>{project.name}</b>
									</button>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};
