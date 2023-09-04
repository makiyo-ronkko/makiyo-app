import React from 'react';
import { Grid, Typography, Paper, Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import Styles from './SingleColumnLayout.module.css';
import { Header } from './Header.tsx';
import { ScrollToTop } from '../../../helpers/scroll.tsx';

export const SingleColumnLayout = () => {
	return (
		<div>
			<ScrollToTop />
			<div className={Styles.button}>
				<Link to={'/'} className={Styles.backButton}>
					Back
				</Link>
			</div>
			<Header />
			<Grid item md={8} component={Paper} elevation={0}>
				<main className={Styles.main}>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						height='100%'
						minHeight='38rem'
						padding='0 2rem'
					>
						<Typography variant='h2' color='grey' textAlign='center'>
							Single Column Layout
						</Typography>
					</Box>
				</main>
			</Grid>
			<Grid item>
				<nav>
					<Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						height='100%'
						minHeight='600px'
						padding='0 2rem'
					>
						<Typography variant='h2' color='grey' textAlign='center'>
							Navigation
						</Typography>
					</Box>
				</nav>
			</Grid>
			<Divider />
			<Grid item>
				<footer>
					<Typography variant='body2' padding='2rem' textAlign='center'>
						© {new Date().getFullYear()} My App. All rights reserved.
					</Typography>
				</footer>
			</Grid>
		</div>
	);
};
