import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

export const Banner = () => {
	return (
		<Grid>
			<Box
				sx={{
					backgroundColor: 'light-blue',
					overflowY: 'hidden',
					backgroundImage: `url('/assets/e-commerce/ehimetalor-akhere-unuabona-okTqiC9Xqho-unsplash.jpg')`,
					width: '100%',
					height: 'calc(var(--content-xxl)*2)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					display: 'flex',
					alignItems: 'flex-end',
					justifyContent: 'center',
				}}
			>
				<Grid
					container
					sx={{
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'var(--color-default)',
						height: 'var(--content-xxs)',
						width: '50%',
						opacity: '0.9',
					}}
				>
					<Typography padding={1} variant='overline' color='var(--color-dark)'>
						Yellow Collection
					</Typography>
					<Button
						color='inherit'
						sx={{
							width: 'var(--content-md)',
							height: 'var(--element-xs)',
							backgroundColor: 'var(--color-default)',
							textDecoration: 'underline',
							fontSize: 'var(--font-size-h6)',
							color: 'var(color-dark)',
							fontWeight: 'lighter',
						}}
						disableFocusRipple
					>
						Find out more
					</Button>
				</Grid>
			</Box>
		</Grid>
	);
};
