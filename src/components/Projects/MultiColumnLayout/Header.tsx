import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography, MenuItem } from '@mui/material';

import Styles from './MultiColumnLayout.module.css';

const pages = ['Home', 'About us', 'Contact'];

export const Header = () => {
	return (
		<Grid item>
			<AppBar position='relative'>
				<Toolbar className={Styles.backgroundColor}>
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
