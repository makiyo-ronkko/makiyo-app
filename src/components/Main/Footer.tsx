import React from 'react';
import Styles from './MainStyle.module.css';

export const Footer = () => {
	return (
		<p className={Styles.copyright}>
			COPYRIGHT &copy; {new Date().getFullYear()} MAKIYO RÖNKKÖ
		</p>
	);
};
