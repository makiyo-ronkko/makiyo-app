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
import { generateRandomText } from '../../../helpers/textGenerator';

const productList = [
	{
		id: '1',
		img: 'https://source.unsplash.com/random?fashion',
		label: generateRandomText(1, false, true),
		price: '250',
	},
	{
		id: '2',
		img: 'https://source.unsplash.com/random?woman',
		label: generateRandomText(1, false, true),
		price: '350',
	},
	{
		id: '3',
		img: 'https://source.unsplash.com/random?dress',
		label: generateRandomText(1, false, true),
		price: '290',
	},
	{
		id: '4',
		img: 'https://source.unsplash.com/random?jacket',
		label: generateRandomText(1, false, true),
		price: '235',
	},
	{
		id: '5',
		img: 'https://source.unsplash.com/random?bag',
		label: generateRandomText(1, false, true),
		price: '180',
	},
	{
		id: '6',
		img: 'https://source.unsplash.com/random?accessories',
		label: generateRandomText(1, false, true),
		price: '250',
	},
	{
		id: '7',
		img: 'https://source.unsplash.com/random?fashion',
		label: generateRandomText(1, false, true),
		price: '350',
	},
	{
		id: '8',
		img: 'https://source.unsplash.com/random?women',
		label: generateRandomText(1, false, true),
		price: '290',
	},
	{
		id: '9',
		img: 'https://source.unsplash.com/random?fashion',
		label: generateRandomText(1, false, true),
		price: '235',
	},
	{
		id: '10',
		img: 'https://source.unsplash.com/random?cosmetics',
		label: generateRandomText(1, false, true),
		price: '180',
	},
];

export const Main = () => {
	const [images, setImages] =
		useState<{ id: string; img: string; label: string; price: string }[]>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const containerRef = useRef<HTMLUListElement>(null);
	const cardRef = useRef<any>(null);

	const handleLeftScroll = () => {
		if (!containerRef.current) return;
		if (!cardRef.current && !isLoading) return;
		containerRef.current.scrollLeft -= cardRef.current.width + 13;
	};

	const handleRightScroll = () => {
		if (!containerRef.current) return;
		if (!cardRef.current && !isLoading) return;
		containerRef.current.scrollLeft += cardRef.current.width + 13;
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
				} catch (error) {
					console.error('Error loading image:', imageObj.img);
				}
			}
			setImages(loadedImages);
			setIsLoading(false);
		};
		loadImages();
	}, []);

	const getImages = useMemo(() => {
		return (
			<div className={Styles.productImgWrapper}>
				{isLoading ? (
					<CircularProgress sx={{ color: 'var(--color-cloud)' }} />
				) : (
					images?.map((product) => (
						<ImageListItem
							key={product.id}
							sx={{
								height: '500px',
								justifyContent: 'center',
								paddingBottom: 0,
							}}
							className={Styles.imageListItem}
						>
							<Card
								sx={{
									cursor: 'pointer',
									height: '100%',
									width: '300px',
									padding: '10px',
									overflow: 'hidden',
								}}
							>
								<>
									<div className={Styles.productImgContainer}>
										<img
											src={product.img}
											alt={product.id}
											className={Styles.productImg}
											ref={cardRef}
										/>
									</div>
									<ImageListItemBar
										title={product.label}
										subtitle={
											<span className={Styles.fontSize}>{product.price} €</span>
										}
										position='below'
										sx={{ padding: 'var(--padding-xxs)' }}
									/>
								</>
							</Card>
						</ImageListItem>
					))
				)}
			</div>
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
							margin: 'var(--margin-sm) var(--margin-xs)',
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
