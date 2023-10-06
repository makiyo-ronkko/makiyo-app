import React from 'react';
import Styles from './MainStyle.module.css';

export const Skills = () => {
	return (
		<div className={Styles.skillWrapper}>
			<div className={Styles.titleWrapper}>
				<p className={`${Styles.description} ${Styles.subTitle}`}>About me</p>
				<p className={`${Styles.summary} ${Styles.fontStyle}`}>
					"I'm a web developer in frontend. My aim is to build applications that
					carry DRY code, good usability, modern design and meaningful for
					users."
				</p>
			</div>
			<div className={Styles.cardContainer}>
				<div className={Styles.card}>
					<p className={`${Styles.text} ${Styles.textLetterSpace}`}>
						<b>Frontend</b>
					</p>
					<p>Javascript Typescript React Redux HTML5 CSS3 MUI</p>
				</div>
				<div className={Styles.card}>
					<p className={`${Styles.text} ${Styles.textLetterSpace}`}>
						<b>Backend</b>
					</p>
					<p>Node.js REST API</p>
				</div>
				<div className={Styles.card}>
					<p className={`${Styles.text} ${Styles.textLetterSpace}`}>
						<b>Others</b>
					</p>
					<p>Figma Github Gitlab Torello</p>
				</div>
			</div>
		</div>
	);
};
