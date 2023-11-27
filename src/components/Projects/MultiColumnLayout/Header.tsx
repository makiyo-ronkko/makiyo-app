import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography, MenuItem } from '@mui/material';

import Styles from './MultiColumnLayout.module.css';

interface HeaderProp {
	isDarkMode: boolean;
}

const pages = ['Home', 'About us', 'Contact'];

export const Header = ({ isDarkMode }: HeaderProp) => {
	return (
		<Grid item>
			<AppBar position='fixed'>
				<Toolbar
					className={`${
						isDarkMode
							? Styles.darkModeBackground
							: Styles.defaultModeBackground
					} ${Styles.backgroundColor}`}
				>
					<Typography variant='h6' paddingRight='2rem'>
						LOGO
					</Typography>
					{pages.map((page) => (
						<MenuItem
							onClick={() => console.log()}
							key={page}
							className={Styles.menuItem}
						>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
					<div className={Styles.button}>
						<Link to={'/'} className={Styles.backButton}>
							Back
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};
