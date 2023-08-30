import React from 'react';
import Styles from './MainStyle.module.css';
import { Header } from './Header.tsx';
import { Skills } from './Skills.tsx';
import { Contact } from './Contact.tsx';
import { Footer } from './Footer.tsx';

export const MainStyle = () => {
	return (
		<>
			<div className={`${Styles.gradient1} ${Styles.section}`}>
				<Header />
			</div>
			<div className={Styles.section3}>
				<Skills />
			</div>
			<div
				className={`${Styles.gradient2} ${Styles.section} ${Styles.container} ${Styles.padding}`}
			>
				<Contact />
			</div>
			<div className={Styles.section2}>
				<Footer />
			</div>
		</>
	);
};
