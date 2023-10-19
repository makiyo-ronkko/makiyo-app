import React from 'react';
import Styles from './Desgin.module.css';
import { Typography } from '@mui/material';
import PixelArtApp from './PixelArt';

export const Design = () => {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.textWrapper}>
				<Typography
					variant='h2'
					sx={{
						textTransform: 'uppercase',
						color: 'var(--color-mud)',
						fontWeight: 'bold',
						textAlign: 'center',
					}}
				>
					Create a pixel art
				</Typography>
				<div>
					<Typography
						variant='h6'
						sx={{
							color: 'var(--color-mud)',
						}}
					>
						1. Pick a color
					</Typography>
					<Typography
						variant='h6'
						sx={{
							color: 'var(--color-mud)',
						}}
					>
						2. Click or drag on the canvas
					</Typography>
				</div>
			</div>
			<PixelArtApp />
		</div>
	);
};
