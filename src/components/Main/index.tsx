import React from 'react';
import Styles from './MainStyle.module.css';
import { Header } from './Header.tsx';
import { Contact } from './Contact.tsx';
import { Footer } from './Footer.tsx';
import { Body } from './Body.tsx';

export const MainStyle = () => {
	return (
		<>
			<div className={`${Styles.gradient1} ${Styles.section}`}>
				<Header />
			</div>
			<div className={Styles.section2}>
				<Body />
			</div>
			<div
				className={`${Styles.gradient2} ${Styles.section} ${Styles.container} ${Styles.paddingXXL}`}
			>
				<Contact />
			</div>
			<div className={Styles.section3}>
				<Footer />
			</div>
		</>
	);
};
