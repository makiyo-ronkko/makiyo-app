import React from 'react';
import { RandomImage } from './RandomImage';
import Styles from './Desgin.module.css';

export const Design = () => {
	return (
		<div className={Styles.wrapper}>
			<p className={Styles.h2}>Coming soon...</p>
			<RandomImage />
		</div>
	);
};
