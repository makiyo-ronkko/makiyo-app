import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography, MenuItem } from '@mui/material';

import styles from './SingleColumnLayout.module.css';

interface HeaderProp {
	isDarkMode: boolean;
}

const pages = ['Home', 'About us', 'Contact'];

export const Header = ({ isDarkMode }: HeaderProp) => {
	return (
		<Grid item className={styles.header}>
			<AppBar position='static'>
				<Toolbar
					className={`${styles.backgroundColor} ${
						isDarkMode
							? styles.darkModeBackground
							: styles.defaultModeBackground
					}`}
				>
					<Typography variant='h6' paddingRight='2rem'>
						LOGO
					</Typography>
					{pages.map((page) => (
						<MenuItem
							onClick={() => console.log()}
							key={page}
							className={styles.menuItem}
						>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
					<div className={styles.button}>
						<Link
							to={'/'}
							className={`${styles.backButton} ${
								isDarkMode
									? styles.darkModeBackground
									: styles.defaultModeBackground
							}`}
						>
							Back
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};
