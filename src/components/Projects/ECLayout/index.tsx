import React, { useEffect, useRef, useState } from 'react';
import {
	Box,
	Card,
	CircularProgress,
	Container,
	Grid,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Paper,
} from '@mui/material';
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
	const containerRef = useRef<HTMLDivElement>(null);

	const handleHorizontalScroll = (e: { deltaY: number }) => {
		if (!containerRef.current) return;
		// Get the scroll amount from the mouse wheel
		const scrollAmount = e.deltaY;
		containerRef.current.scrollLeft += scrollAmount;
	};

	useEffect(() => {
		async function loadImages() {
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
		}
		loadImages();
	}, []);

	console.log({ isLoading });
	return (
		<div>
			<ScrollToTop />
			<Container>
				<Header />
				<main>
					<Grid>
						<Box
							style={{
								backgroundColor: 'light-blue',
								overflowY: 'hidden',
							}}
						>
							<img
								src='/assets/e-commerce/lauren-richmond-490uCO8h7ZA-unsplash.jpg'
								alt='lauren-richmond-490uCO8h7ZA-unsplash.jpg'
								style={{
									width: '100%',
									objectFit: 'contain',
								}}
							/>
						</Box>
					</Grid>
					<Box
						style={{ height: '500px', backgroundColor: 'var(--color-default)' }}
					>
						<Grid columns={4} container={true} direction='row' spacing={1}>
							<ImageList
								cols={4}
								rowHeight={500}
								sx={{
									width: '100%',
									height: 500,
									display: 'flex',
									overflowY: 'hidden',
									padding: ' 0 2rem',
									alignItems: 'center',
								}}
								className={Styles.imageList}
								ref={containerRef}
								onWheel={handleHorizontalScroll}
							>
								{images?.map((product) => (
									<ImageListItem
										key={product.id}
										sx={{ height: '100%', justifyContent: 'center' }}
									>
										<Card>
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
										</Card>
									</ImageListItem>
								))}
							</ImageList>
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
