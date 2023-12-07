import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PixelArtDesign.module.css';
import { Typography } from '@mui/material';
import PixelArtApp from './PixelArt/PixelArt';
import { ScrollToTop } from '../../../helpers/scroll';
import { useTheme } from '../../hooks/ThemeContext';

export const PixelArt = () => {
	const { isDarkMode } = useTheme();

	return (
		<div
			className={`${styles.wrapper} ${
				isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground
			}`}
		>
			<ScrollToTop />
			<div className={styles.buttonWrapper}>
				<Link to={'/'} className={styles.backButton}>
					BACK
				</Link>
			</div>
			<div className={styles.textWrapper}>
				<Typography variant='h2' className={styles.headerText}>
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
