import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './MainStyle.module.css';
import { Skills } from './Skills';
import { CompanyProject } from './CompanyProject';

const PROJECTS = [
	{ link: 'project', name: 'Single Column Layout' },
	{ link: 'project-2', name: 'Full Screen Layout' },
	{ link: 'project-3', name: 'E-Commerce Layout' },
	{ link: 'project-4', name: 'Multi-Column Layout' },
	{ link: 'project-5', name: 'Pixel Art' },
	{ link: 'project-6', name: 'TODO App' },
	{ link: 'project-7', name: 'Could be more...' },
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
