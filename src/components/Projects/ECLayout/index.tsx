import React from 'react';
import { Container } from '@mui/material';
import { Header } from './Header';
import { ScrollToTop } from '../../../helpers/scroll';
import { Main } from './Main';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { Banner } from './Banner';

export const ECLayout = () => {
	return (
		<div>
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
