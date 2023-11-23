import React from 'react';
import Styles from './MainStyle.module.css';

interface FooterProp {
	isDarkMode: boolean;
}

export const Footer = ({ isDarkMode }: FooterProp) => {
	return (
		<p
			className={`${Styles.copyright} ${
				isDarkMode ? Styles.darkModeColor : Styles.defaultModeColor
			}`}
		>
			COPYRIGHT &copy; {new Date().getFullYear()} MAKIYO RÖNKKÖ
		</p>
	);
};
