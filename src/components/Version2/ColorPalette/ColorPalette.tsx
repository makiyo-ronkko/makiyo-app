import React from 'react';
import Styles from './ColorPalette.module.css';

interface ColorPaletteProp {
	onSelectColor: (val: string) => void;
}

export const ColorPalette = ({ onSelectColor }: ColorPaletteProp) => {
	const colors = [
		'var(--color-default)',
		'var(--color-mud)',
		'#000000',
		'var(--color-nude)',
		'var(--color-tomato)',
		'var(--color-sunflower)',
		'var(--color-sunflower-dark)',
		'var(--color-forest)',
		'var(--color-forest-dark)',
		'var(--color-primary)',
		'var(--color-primary-dark)',
		'var(--color-secondary)',
		'var(--color-secondary-dark)',
	];

	return (
		<div className={Styles.colorPalette}>
			{colors.map((color, index) => (
				<button
					key={index}
					className={Styles.colorButton}
					style={{ backgroundColor: color }}
					onClick={() => onSelectColor(color)}
				></button>
			))}
		</div>
	);
};
