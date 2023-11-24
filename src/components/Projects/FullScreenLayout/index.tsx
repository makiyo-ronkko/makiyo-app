import React, { useEffect, useRef, useState } from 'react';
import Styles from './FullScreenLayout.module.css';
import { ScrollToTop } from '../../../helpers/scroll';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { FloatingButton } from '../../FloatButton/FloatingButton';
import { useTheme } from '../../hooks/ThemeContext';

export const FullScreenLayout = () => {
	const [bgColor, setBgColor] = useState<string>('var(--color-sky)');
	const [text, setText] = useState<string>('Go ahead and scroll!');
	const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
	const contentRef: React.Ref<HTMLDivElement> = useRef(null);

	const { isDarkMode } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			const { scrollY, screen } = window;
			const { availHeight } = screen;
			const firstBreakPoint = availHeight + 1;
			const secondBreakPoint = availHeight * 2 + 1;
			let newBgColor = 'var(--color-sky)';
			let newText = 'Go ahead and scroll!';
			setIsButtonVisible(false);

			if (firstBreakPoint < scrollY) {
				newBgColor = 'var(--color-tomato)';
				newText = 'Keep scrolling';
				setIsButtonVisible(true);
			}
			if (secondBreakPoint < scrollY) {
				newBgColor = 'var(--color-forest)';
				newText = 'Good job!';
				setIsButtonVisible(true);
			}

			setBgColor(newBgColor);
			setText(newText);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isButtonVisible]);

	return (
		<div>
			<Grid item>
				<ScrollToTop />
				<div className={Styles.button}>
					<Link
						to={'/'}
						className={Styles.backButton}
						style={{ backgroundColor: bgColor }}
					>
						Back
					</Link>
				</div>
				<>
					<Header />
					<main className={Styles.wrapper} ref={contentRef}>
						<FloatingButton
							contentRef={contentRef}
							isButtonVisible={isButtonVisible}
							setIsButtonVisible={setIsButtonVisible}
						/>
						<Box
							className={`${Styles.staticContent} ${
								isDarkMode
									? Styles.darkModeBackground
									: Styles.defaultModeBackground
							}`}
						>
							<Typography className={Styles.text}>{text}</Typography>
						</Box>
						<div
							className={Styles.section}
							style={{ backgroundColor: bgColor }}
						></div>
					</main>
				</>
			</Grid>
		</div>
	);
};
