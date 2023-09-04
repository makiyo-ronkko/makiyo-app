import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './MainStyle.module.css';

export const Skills = () => {
	return (
		<>
			<p className={Styles.description}>
				I'm a web developer in frontend. My aim is to build applications that
				carry DRY code, good usability, modern design and meaningful for users.
			</p>

			<div className={Styles.portfolioWrapper}>
				<div className={Styles.cardContainer}>
					<div className={`${Styles.card} ${Styles.backgroundColor}`}>
						<p className={Styles.text}>
							<b>Frontend</b>
						</p>
						<p>Javascript Typescript React Redux HTML5 CSS3 MUI</p>
					</div>
					<div className={`${Styles.card} ${Styles.backgroundColor}`}>
						<p className={Styles.text}>
							<b>Backend</b>
						</p>
						<p>Node.js Express REST API</p>
					</div>
					<div className={`${Styles.card} ${Styles.backgroundColor}`}>
						<p className={Styles.text}>
							<b>Others</b>
						</p>
						<p>Figma Github Gitlab Torello</p>
					</div>
				</div>

				<div className={Styles.projectContainer}>
					<Link to={'project'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Single Column Layout</b>
							</button>
						</div>
					</Link>
					<Link to={'project-2'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Project 2</b>
							</button>
						</div>
					</Link>
					<Link to={'project-3'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Project 3</b>
							</button>
						</div>
					</Link>
					<Link to={'project-4'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Project 4</b>
							</button>
						</div>
					</Link>
					<Link to={'project-5'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Project 5</b>
							</button>
						</div>
					</Link>
					<Link to={'project-6'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Project 6</b>
							</button>
						</div>
					</Link>
					<Link to={'project-7'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Project 7</b>
							</button>
						</div>
					</Link>
					<Link to={'project-8'} className={Styles.link}>
						<div className={`${Styles.project}`}>
							<button className={Styles.projectButton}>
								<b className={Styles.text}>Project 8</b>
							</button>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};
