import React from 'react';
import Styles from './MainStyle.module.css';
import { Link } from 'react-router-dom';

export const CompanyProject = () => {
	return (
		<div className={Styles.projectWrapper}>
			<p className={`${Styles.description} ${Styles.subTitle}`}>
				Company project
			</p>
			<div className={Styles.projectContainer}>
				<Link to='company-project' className={Styles.link}>
					<div className={`${Styles.project}`}>
						<button className={Styles.projectButton}>
							<b className={Styles.text}>Digital Twin for Smart Office</b>
						</button>
					</div>
				</Link>
				<a
					href='https://makiyo-storybook.vercel.app/'
					className={Styles.link}
					target='_blank'
				>
					<div className={`${Styles.project}`}>
						<button className={Styles.projectButton}>
							<b className={Styles.text}>Storybook Example</b>
						</button>
					</div>
				</a>
			</div>
		</div>
	);
};
