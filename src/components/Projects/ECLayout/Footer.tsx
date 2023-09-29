import React from 'react';
import { Grid, Typography } from '@mui/material';

export const Footer = () => {
	return (
		<footer>
			<Grid height={100}>
				<Typography
					variant='body2'
					padding='2rem'
					textAlign='center'
					sx={{ color: 'var(--color-dark)' }}
				>
					© {new Date().getFullYear()} My App. All rights reserved.
				</Typography>
			</Grid>
		</footer>
	);
};
