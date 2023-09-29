import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
	Box,
	Button,
	Card,
	CircularProgress,
	Grid,
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Styles from './ECLayout.module.css';

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
	{
		id: '6',
		img: '/assets/e-commerce/ahmed-carter-tiWcNvpQF4E-unsplash.jpg',
		label: 'Wide pants',
		price: '250',
	},
	{
		id: '7',
		img: '/assets/e-commerce/dom-hill-nimElTcTNyY-unsplash.jpg',
		label: 'Jogger set',
		price: '350',
	},
	{
		id: '8',
		img: '/assets/e-commerce/marcus-santos-xw5cQNbky5A-unsplash.jpg',
		label: 'Puffy dress',
		price: '290',
	},
	{
		id: '9',
		img: '/assets/e-commerce/hong-nguyen-FO-zQd7Wqio-unsplash.jpg',
		label: 'Flower dress',
		price: '235',
	},
	{
		id: '10',
		img: '/assets/e-commerce/tamara-bellis-pONwcn4IcVU-unsplash.jpg',
		label: 'Wool shorts',
		price: '180',
	},
];

export const Main = () => {
	const [images, setImages] =
		useState<{ id: string; img: string; label: string; price: string }[]>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const containerRef = useRef<HTMLUListElement>(null);
	//TODO: calculate scroll width
	const cardRef = useRef<any>(null);

	const handleLeftScroll = () => {
		if (!containerRef.current) return;
		containerRef.current.scrollLeft -= 500;
	};

	const handleRightScroll = () => {
		if (!containerRef.current) return;
		containerRef.current.scrollLeft += 500;
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
								<div className={Styles.loaderWrapper}>
									<CircularProgress />
								</div>
							) : (
								<>
									<img
										src={product.img}
										alt={product.id}
										className={Styles.productImg}
									/>
									<ImageListItemBar
										title={product.label}
										subtitle={<span>{product.price} €</span>}
										position='below'
										sx={{ padding: '0 var(--padding-xxs)' }}
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
							color: 'var(--color-dark)',
							fontSize: 'var(--font-size-subtitle)',
							fontWeight: 'lighter',
						}}
						disableFocusRipple
					>
						Discover New Arrival
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
							padding: '0 var(--padding-sm)',
							alignItems: 'center',
							justifyContent: isLoading ? 'center' : 'flex-start',
							scrollBehavior: 'smooth',
							margin: '0 var(--margin-xs)',
						}}
						className={Styles.imageList}
						ref={containerRef}
					>
						{getImages}
					</ImageList>
					<div className={Styles.buttonWrapper}>
						<IconButton
							type='button'
							sx={{
								p: '10px',
								width: 'var(--element-xxxs)',
								height: 'var(--element-xxxs)',
								backgroundColor: 'var(--color-default)',
								opacity: '0.6',
							}}
							size='small'
							aria-label='left-arrow'
							onClick={handleLeftScroll}
						>
							<FontAwesomeIcon icon={faArrowLeft} />
						</IconButton>
						<IconButton
							type='button'
							sx={{
								p: '10px',
								width: 'var(--element-xxxs)',
								height: 'var(--element-xxxs)',
								backgroundColor: 'var(--color-default)',
								opacity: '0.6',
							}}
							size='small'
							aria-label='right-arrow'
							onClick={handleRightScroll}
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</IconButton>
					</div>
				</Grid>
			</Box>
		</main>
	);
};
