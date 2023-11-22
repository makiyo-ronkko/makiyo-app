import React from 'react';
import Styles from './MainStyle.module.css';
import { Link } from 'react-router-dom';

export const CompanyProject = () => {
	return (
		<div className={Styles.projectWrapper}>
			<p className={Styles.subTitle}>Company project</p>
			<div className={Styles.projectContainer}>
				<Link to='company-project' className={Styles.link}>
					<div className={Styles.project}>
						<button className={Styles.projectButton}>
							<b className={Styles.projectTitle}>
								Digital Twin for Smart Office
							</b>
						</button>
					</div>
				</Link>
				<a
					href='https://makiyo-storybook.vercel.app/'
					className={Styles.link}
					target='_blank'
					rel='noreferrer'
				>
					<div className={Styles.project}>
						<button className={Styles.projectButton}>
							<b className={Styles.projectTitle}>Storybook Example</b>
						</button>
					</div>
				</a>
			</div>
		</div>
	);
};
