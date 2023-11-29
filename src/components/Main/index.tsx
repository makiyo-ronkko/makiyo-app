import React from 'react';
import Styles from './MainStyle.module.css';
import { Header } from './Header';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Body } from './Body';
import { useTheme } from '../hooks/ThemeContext';
import { SwitchButton } from '../SwitchButton/SwitchButton';

export const MainStyle = () => {
	const { isDarkMode, handleToggleTheme } = useTheme();

	return (
		<>
			<div
				className={`${isDarkMode ? Styles.darkGradient : Styles.gradient1} ${
					Styles.section
				}`}
			>
				<Header isDarkMode={isDarkMode} />
			</div>
			<div
				className={`${Styles.section2} ${
					isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
				}`}
			>
				<Body />
			</div>
			<div
				className={`${isDarkMode ? Styles.darkGradient : Styles.gradient2} ${
					Styles.section
				} ${Styles.container} ${Styles.paddingXXL}`}
			>
				<Contact isDarkMode={isDarkMode} />
			</div>
			<div
				className={`${Styles.section3} ${
					isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
				}`}
			>
				<Footer isDarkMode={isDarkMode} />
			</div>
			<SwitchButton handleClick={handleToggleTheme} active={isDarkMode} />
		</>
	);
};
