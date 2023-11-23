import React, { useState } from 'react';
import Styles from './MainStyle.module.css';

interface HeaderProp {
	isDarkMode: boolean;
}

export const Header = ({ isDarkMode }: HeaderProp) => {
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

	const handleMouseEnter = () => {
		setIsMouseOver(true);
	};

	const handleMouseLeave = () => {
		setIsMouseOver(false);
	};

	return (
		<div className={Styles.nameContainer}>
			<p
				className={`${Styles.bubbleSpeech} ${
					isDarkMode
						? Styles.darkModeBubbleSpeech
						: Styles.defaultModeBubbleSpeech
				}`}
			>
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
