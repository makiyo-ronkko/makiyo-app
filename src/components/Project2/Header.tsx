import React from 'react';
import { Grid, AppBar, Toolbar, Typography, MenuItem } from '@mui/material';
import Styles from './SingleColumnLayout.module.css';

const pages = ['Home', 'About us', 'Contact'];

export const Header = () => {
	return (
		<Grid item>
			<AppBar position='static'>
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
				</Toolbar>
			</AppBar>
		</Grid>
	);
};
