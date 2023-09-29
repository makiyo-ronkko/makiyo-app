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

export const ECLayout = () => {
	return (
		<div>
			<div className={Styles.button}>
				<Link to={'/'} className={Styles.backButton}>
					Back
				</Link>
			</div>
			<ScrollToTop />
			<Container>
				<Header />
				<Main />
				<Banner />
				<Nav />
				<Footer />
			</Container>
		</div>
	);
};
