import React, { useState } from 'react';
import Styles from './MainStyle.module.css';

export const Header = () => {
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

	const handleMouseEnter = () => {
		setIsMouseOver(true);
	};

	const handleMouseLeave = () => {
		setIsMouseOver(false);
	};

	return (
		<div className={Styles.nameContainer}>
			<p className={Styles.bubbleSpeech}>
				{isMouseOver ? 'Please scroll down！' : 'Hello! Moi! こんにちは！'}
			</p>
			<img
				src='/makiyo.png'
				alt='makiyo'
				className={Styles.image}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			/>
			<span className={Styles.name}>Makiyo Rönkkö</span>
		</div>
	);
};
