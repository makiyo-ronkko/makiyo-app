import React from 'react';
import Styles from './MainStyle.module.css';

export const Footer = () => {
	return (
		<p className={Styles.copyright}>
			Copyright &copy; {new Date().getFullYear()} Makiyo Rönkkö
		</p>
	);
};
