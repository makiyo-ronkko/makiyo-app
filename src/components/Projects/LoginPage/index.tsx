import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import { AppProvider } from './AppContext';
import { LandingPage } from './MainPage';
import { useTheme } from '../../hooks/ThemeContext';

export const LoginPage = () => {
	const { isDarkMode } = useTheme();

	return (
		<AppProvider>
			<div
				className={`${styles.wrapper} ${
					isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground
				}`}
			>
				<div className={styles.button}>
					<Link to={'/'} className={styles.backButton}>
						Back
					</Link>
				</div>
				<LandingPage />
			</div>
		</AppProvider>
	);
};
