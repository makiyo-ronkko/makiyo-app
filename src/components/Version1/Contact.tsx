import React from 'react';
import Styles from './MainStyle.module.css';

export const Contact = () => {
	return (
		<>
			<h3 className={Styles.contact}>Contact</h3>
			<div className={Styles.socialMedia}>
				<a
					href='//linkedin.com/in/makiyoronkko '
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className={`fab fa-linkedin fa-2x ${Styles.fontawesome}`}></i>
				</a>
				<a
					href='//github.com/makiyo-ronkko'
					target='_blank'
					rel='noopener noreferrer'
				>
					<i className={`fab fa-github fa-2x ${Styles.fontawesome}`}></i>
				</a>
			</div>
		</>
	);
};
