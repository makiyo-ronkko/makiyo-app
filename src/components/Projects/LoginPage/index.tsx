import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './LoginPage.module.css';
import { AppProvider } from './AppContext';
import { LandingPage } from './MainPage';
import { useTheme } from '../../hooks/ThemeContext';

export const LoginPage = () => {
	const { isDarkMode } = useTheme();

	return (
		<AppProvider>
			<div
				className={`${Styles.wrapper} ${
					isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
				}`}
			>
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
