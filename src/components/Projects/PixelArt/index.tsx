import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './PixelArtDesign.module.css';
import { Typography } from '@mui/material';
import PixelArtApp from './PixelArt/PixelArt';
import { ScrollToTop } from '../../../helpers/scroll';

export const PixelArt = () => {
	return (
		<div className={Styles.wrapper}>
			<ScrollToTop />
			<div className={Styles.buttonWrapper}>
				<Link to={'/'} className={Styles.backButton}>
					BACK
				</Link>
			</div>
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
