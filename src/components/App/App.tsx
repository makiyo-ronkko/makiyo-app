import React from 'react';
import AppStyles from './App.module.css';
import { MainStyle } from '../Main/index';
import { ScrollToTop } from '../../helpers/scroll';

export const App = () => {
	return (
		<div className={AppStyles.mainWrapper}>
			<ScrollToTop />
			<MainStyle />
		</div>
	);
};
