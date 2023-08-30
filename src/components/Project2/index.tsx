import React from 'react';
import {
	Grid,
	AppBar,
	Toolbar,
	Typography,
	Container,
	Menu,
	Paper,
} from '@mui/material';
import Styles from './SingleColumnLayout.module';
import { Header } from './Header.tsx';

export const SingleColumnLayout = () => {
	return (
		<Grid
			container
			direction='column'
			component='main'
			sx={{ height: '100vh' }}
		>
			{/* Header */}
			<Grid item>
				<Header />
			</Grid>

			{/* Global Navigation */}
			<Grid item>
				<nav>{/* Add your global navigation links or components here */}</nav>
			</Grid>

			{/* Main Content */}
			<Grid
				item
				// xs={12} sm={8} md={5}
				component={Paper}
				elevation={6}
				square
			>
				<main>
					{/* Add your main content here */}
					<Typography variant='h4'>Welcome to my website!</Typography>
					<p>This is the main content of the webpage.</p>
				</main>
			</Grid>

			{/* Local Navigation */}
			<Grid item>
				<nav>{/* Add your local navigation links or components here */}</nav>
			</Grid>

			{/* Footer */}
			<Grid item>
				<footer>
					{/* Add your footer content here */}
					<Typography variant='body2'>
						© {new Date().getFullYear()} My App. All rights reserved.
					</Typography>
				</footer>
			</Grid>
		</Grid>
	);
};
