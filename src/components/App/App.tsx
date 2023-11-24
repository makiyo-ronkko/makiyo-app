import React from 'react';
import AppStyles from './App.module.css';
import { MainStyle } from '../Main/index.tsx';
import { ScrollToTop } from '../../helpers/scroll.tsx';

export const App = () => {
	return (
		<div className={AppStyles.mainWrapper}>
			<ScrollToTop />
			<MainStyle />
		</div>
	);
};
