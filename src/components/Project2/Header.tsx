import React, { useState } from 'react';
import {
	Grid,
	AppBar,
	Toolbar,
	Typography,
	Container,
	Menu,
	MenuItem,
	Box,
} from '@mui/material';
import Styles from './SingleColumnLayout.module.css';

const pages = ['Home', 'About us', 'Contact'];

export const Header = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Grid item>
			<AppBar position='static'>
				<Toolbar className={Styles.backgroundColor}>
					<Typography variant='h6'>LOGO</Typography>
					{pages.map((page) => (
						<MenuItem
							onClick={handleClose}
							key={page}
							style={{ whiteSpace: 'normal' }}
						>
							<Typography textAlign='center'>{page}</Typography>
						</MenuItem>
					))}
				</Toolbar>
			</AppBar>
		</Grid>
	);
};
