import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './LoginPage.module.css';
import { AppProvider } from './AppContext';
import { LandingPage } from './MainPage';

export const LoginPage = () => {
	return (
		<AppProvider>
			<div className={Styles.wrapper}>
				<div className={Styles.button}>
					<Link to={'/'} className={Styles.backButton}>
						Back
					</Link>
				</div>
				<LandingPage />
			</div>
		</AppProvider>
	);
};
