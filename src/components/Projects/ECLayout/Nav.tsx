import { Button, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';

const subNavigation = [
	{
		title: 'About us',
		subTitle: ['Navigate 1', 'Navigate 2', 'Navigate 3'],
	},
	{
		title: 'Contact us',
		subTitle: ['Navigate 1', 'Navigate 2', 'Navigate 3', 'Navigate 4'],
	},
	{
		title: 'Flequently asked questions',
		subTitle: ['Navigate 1', 'Navigate 2', 'Navigate 3'],
	},
];

export const Nav = () => {
	return (
		<nav>
			<Toolbar sx={{ height: '400px' }}>
				{subNavigation.map((category) => (
					<Grid gap={2} container key={category.title}>
						<Grid
							container
							height={50}
							sx={{ justifyContent: 'center', alignItems: 'center' }}
						>
							<Typography
								variant='button'
								sx={{ textAlign: 'center', color: 'var(--color-dark)' }}
							>
								{category.title}
							</Typography>
						</Grid>
						<Grid key={category.title} height={150} container>
							{category.subTitle.map((t) => (
								<Button
									key={t}
									variant='text'
									sx={{
										color: 'var(--color-mud)',
										height: 'var(--element-xs)',
									}}
								>
									{t}
								</Button>
							))}
						</Grid>
					</Grid>
				))}
			</Toolbar>
		</nav>
	);
};
