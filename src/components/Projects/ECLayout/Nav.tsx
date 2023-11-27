import React from 'react';
import Styles from './ECLayout.module.css';
import { Button, Grid, Toolbar, Typography } from '@mui/material';

const subNavigation = [
	{
		title: 'About us',
		subTitle: ['Navigate 1', 'Navigate 2', 'Navigate 3'],
	},
	{
		title: 'Contact us',
		subTitle: ['Navigate 1', 'Navigate 2', 'Navigate 3'],
	},
	{
		title: 'Flequently asked questions',
		subTitle: ['Navigate 1', 'Navigate 2', 'Navigate 3'],
	},
];

interface NavProp {
	isDarkMode: boolean;
}

export const Nav = ({ isDarkMode }: NavProp) => {
	return (
		<nav
			className={
				isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
			}
		>
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
								sx={{
									textAlign: 'center',
									color: isDarkMode
										? 'var(--color-default)'
										: 'var(--color-mud)',
								}}
							>
								{category.title}
							</Typography>
						</Grid>
						<Grid
							key={category.title}
							height={150}
							container
							sx={{
								flexDirection: 'column',
								alignItems: 'center',
								flexWrap: 'nowrap',
								gap: '0.5rem',
							}}
						>
							{category.subTitle.map((t) => (
								<Button
									key={t}
									variant='text'
									sx={{
										color: isDarkMode
											? 'var(--color-default)'
											: 'var(--color-mud)',
										height: 'var(--element-xxs)',
										width: 'var(--content-sm)',
									}}
									disableRipple
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
