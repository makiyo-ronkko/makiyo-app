import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Styles from './Desgin.module.css';
import { Loader } from '../Loader/Loader';

export const RandomImage = () => {
	const [imageUrl, setImageUrl] = useState<undefined | string>('');

	useEffect(() => {
		const fetchRandomImage = async () => {
			try {
				const response = await axios.get(
					'https://picsum.photos/200/300?grayscale',
					{
						responseType: 'blob',
					}
				);
				setImageUrl(URL.createObjectURL(response.data));
			} catch (error) {
				console.error('Error fetching random image:', error);
			}
		};

		fetchRandomImage();

		const intervalId = setInterval(() => {
			fetchRandomImage();
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>
			{imageUrl ? (
				<img src={imageUrl} alt='random-img-url' />
			) : (
				<div className={Styles.loaderWrapper}>
					<Loader />
				</div>
			)}
		</div>
	);
};
