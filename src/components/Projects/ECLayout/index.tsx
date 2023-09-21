import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
	Box,
	Button,
	Card,
	CircularProgress,
	Container,
	Grid,
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Paper,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Styles from './ECLayout.module.css';
import { Header } from './Header';
import { ScrollToTop } from '../../../helpers/scroll';

const productList = [
	{
		id: '1',
		img: '/assets/e-commerce/ahmed-carter-tiWcNvpQF4E-unsplash.jpg',
		label: 'Wide pants',
		price: '250',
	},
	{
		id: '2',
		img: '/assets/e-commerce/dom-hill-nimElTcTNyY-unsplash.jpg',
		label: 'Jogger set',
		price: '350',
	},
	{
		id: '3',
		img: '/assets/e-commerce/marcus-santos-xw5cQNbky5A-unsplash.jpg',
		label: 'Puffy dress',
		price: '290',
	},
	{
		id: '4',
		img: '/assets/e-commerce/hong-nguyen-FO-zQd7Wqio-unsplash.jpg',
		label: 'Flower dress',
		price: '235',
	},
	{
		id: '5',
		img: '/assets/e-commerce/tamara-bellis-pONwcn4IcVU-unsplash.jpg',
		label: 'Wool shorts',
		price: '180',
	},
];

export const ECLayout = () => {
	const [images, setImages] =
		useState<{ id: string; img: string; label: string; price: string }[]>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const containerRef = useRef<HTMLUListElement>(null);

	const handleHorizontalScroll = (e: { deltaY: number }) => {
		if (!containerRef.current) return;
		// Get the scroll amount from the mouse wheel
		const scrollAmount = e.deltaY;
		containerRef.current.scrollLeft += scrollAmount;
	};

	const handleLeftScroll = () => {
		if (!containerRef.current) return;
		containerRef.current.scrollLeft -= 300;
	};

	const handleRightScroll = () => {
		if (!containerRef.current) return;
		containerRef.current.scrollLeft += 300;
	};

	useEffect(() => {
		const loadImages = async () => {
			const loadedImages = [];
			for (const imageObj of productList) {
				try {
					const img = new Image();
					img.src = imageObj.img;
					await img.decode(); // Wait for the image to be fully loaded
					loadedImages.push({ ...imageObj });
					setIsLoading(false);
				} catch (error) {
					console.error('Error loading image:', imageObj.img);
				}
			}
			setImages(loadedImages);
		};
		loadImages();
	}, []);

	const getImages = useMemo(() => {
		return (
			<>
				{images?.map((product) => (
					<ImageListItem
						key={product.id}
						sx={{
							height: '100%',
							justifyContent: 'center',
							paddingBottom: 0,
						}}
						className={Styles.imageListItem}
					>
						<Card>
							{isLoading ? (
								<div
									style={{
										height: '400px',
										width: '300px',
										backgroundColor: 'pink',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<CircularProgress />
								</div>
							) : (
								<>
									<img
										src={product.img}
										alt={product.id}
										style={{ height: '400px' }}
									/>
									<ImageListItemBar
										title={product.label}
										subtitle={<span>{product.price} €</span>}
										position='below'
									/>
								</>
							)}
						</Card>
					</ImageListItem>
				))}
			</>
		);
	}, [images, isLoading]);

	return (
		<div>
			<ScrollToTop />
			<Container>
				<Header />
				<main>
					<Grid>
						<Box
							sx={{
								backgroundColor: 'light-blue',
								overflowY: 'hidden',
								backgroundImage: `url('/assets/e-commerce/lauren-richmond-490uCO8h7ZA-unsplash.jpg')`,
								width: '100%',
								height: 'calc(var(--content-xxl)*2)',
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Button
								variant='outlined'
								color='inherit'
								sx={{
									width: 'var(--content-xxl)',
									height: 'var(--element-xs)',
									backgroundColor: 'var(--color-default)',
									color: 'gray',
								}}
								disableFocusRipple
							>
								Dicover New Arrival
							</Button>
						</Box>
					</Grid>
					<Box
						style={{
							height: '100%',
							backgroundColor: 'var(--color-default)',
							position: 'relative',
						}}
					>
						<Grid columns={4} container={true} direction='row' spacing={1}>
							<ImageList
								cols={4}
								rowHeight={500}
								sx={{
									width: '100%',
									display: 'flex',
									overflowY: 'hidden',
									padding: '0 2rem',
									alignItems: 'center',
									justifyContent: isLoading ? 'center' : 'flex-start',
									scrollBehavior: 'smooth',
									margin: '0 var(--margin-xs)',
								}}
								className={Styles.imageList}
								ref={containerRef}
								onWheel={handleHorizontalScroll}
							>
								{getImages}
							</ImageList>
							<div className={Styles.buttonWrapper}>
								<IconButton
									type='button'
									sx={{ p: '10px', width: '2rem', height: '2rem' }}
									size='small'
									aria-label='left-arrow'
									onClick={handleLeftScroll}
								>
									<FontAwesomeIcon icon={faArrowLeft} />
								</IconButton>
								<IconButton
									type='button'
									sx={{ p: '10px', width: '2rem', height: '2rem' }}
									size='small'
									aria-label='right-arrow'
									onClick={handleRightScroll}
								>
									<FontAwesomeIcon icon={faArrowRight} />
								</IconButton>
							</div>
						</Grid>
					</Box>
					<Paper style={{ height: '600px', backgroundColor: 'orange' }}>
						banner
					</Paper>
				</main>
				<Grid>
					<Paper style={{ height: '400px', backgroundColor: 'light-blue' }}>
						nav
					</Paper>
				</Grid>
				<footer>
					<Grid>
						<Paper style={{ height: '100px', backgroundColor: 'light-blue' }}>
							footer
						</Paper>
					</Grid>
				</footer>
			</Container>
		</div>
	);
};
