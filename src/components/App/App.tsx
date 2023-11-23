import React from 'react';
import AppStyles from './App.module.css';
import { MainStyle } from '../Main/index.tsx';
import { ScrollToTop } from '../../helpers/scroll.tsx';
import { ThemeProvider } from '../hooks/ThemeContext';

export const App = () => {
	return (
		<ThemeProvider>
			<div className={AppStyles.mainWrapper}>
				<ScrollToTop />
				<MainStyle />
			</div>
		</ThemeProvider>
	);
};
