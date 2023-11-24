import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './PixelArtDesign.module.css';
import { Typography } from '@mui/material';
import PixelArtApp from './PixelArt/PixelArt';
import { ScrollToTop } from '../../../helpers/scroll';
import { useTheme } from '../../hooks/ThemeContext';

export const PixelArt = () => {
	const { isDarkMode } = useTheme();

	return (
		<div
			className={`${Styles.wrapper} ${
				isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
			}`}
		>
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
						fontWeight: 'bold',
						textAlign: 'center',
					}}
				>
					Create a pixel art
				</Typography>
				<div>
					<Typography variant='h6'>1. Pick a color</Typography>
					<Typography variant='h6'>2. Click or drag on the canvas</Typography>
				</div>
			</div>
			<PixelArtApp isDarkMode={isDarkMode} />
		</div>
	);
};
