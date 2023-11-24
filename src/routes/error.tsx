import React from 'react';
import { useRouteError } from 'react-router-dom';
import Styles from './route.module.css';
import { useTheme } from '../components/hooks/ThemeContext';

export const ErrorPage = () => {
	const { isDarkMode } = useTheme();

	const error: any = useRouteError();
	return (
		<div
			className={`${Styles.errorWrapper} ${
				isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
			}`}
		>
			<h2 className={Styles.h2}>This page is under maintenance</h2>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
};
