import React from 'react';
import styles from './MainStyle.module.css';

interface FooterProp {
	isDarkMode: boolean;
}

export const Footer = ({ isDarkMode }: FooterProp) => {
	return (
		<p
			className={`${styles.copyright} ${
				isDarkMode ? styles.darkModeColor : styles.defaultModeColor
			}`}
		>
			COPYRIGHT &copy; {new Date().getFullYear()} MAKIYO RÖNKKÖ
		</p>
	);
};
