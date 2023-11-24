import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Styles from './ECLayout.module.css';
import { Header } from './Header';
import { ScrollToTop } from '../../../helpers/scroll';
import { Main } from './Main';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Banner } from './Banner';
import { useTheme } from '../../hooks/ThemeContext';

export const ECLayout = () => {
	const { isDarkMode } = useTheme();

	return (
		<div>
			<div className={Styles.button}>
				<Link to={'/'} className={Styles.backButton}>
					Back
				</Link>
			</div>
			<ScrollToTop />
			<Container
				className={`${
					isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
				}`}
			>
				<Header isDarkMode={isDarkMode} />
				<Main />
				<Banner />
				<Nav />
				<Footer />
			</Container>
		</div>
	);
};
