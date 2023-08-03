import React from 'react';
import Styles from './MainStyle.module.css';

export const Header = () => {
	return (
		<div className={Styles.nameContainer}>
			<p className={Styles.bubbleSpeech}>Hello! Moi! こんにちは！</p>
			<img src='/makiyo.png' alt='makiyo' className={Styles.image} />
			<span className={Styles.name}>Makiyo Rönkkö</span>
		</div>
	);
};
