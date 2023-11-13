import React from 'react';
import Styles from './MainStyle.module.css';

export const Skills = () => {
	return (
		<div className={Styles.skillWrapper}>
			<div>
				<p className={`${Styles.description} ${Styles.subTitle}`}>About me</p>
				<p className={`${Styles.summary} ${Styles.fontStyle}`}>
					"Frontend Developer Focused on Creating Modern Applications: Enhancing
					User Experience, Embracing Contemporary Design, and Delivering Value."
				</p>
			</div>
			<div className={Styles.cardContainer}>
				<div className={Styles.card}>
					<p className={`${Styles.text} ${Styles.textLetterSpace}`}>
						<b>Frontend</b>
					</p>
					<p>
						Javascript Typescript React Redux HTML5 CSS3 CSS Frameworks (MUI,
						Bootstrap)
					</p>
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
					<p>Figma Github Gitlab Responsive Design</p>
				</div>
			</div>
		</div>
	);
};
