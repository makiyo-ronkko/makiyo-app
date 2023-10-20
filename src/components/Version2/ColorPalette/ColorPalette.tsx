import React from 'react';
import Styles from './ColorPalette.module.css';
import { classNames } from '../../../utils/classNames';

interface ColorPaletteProp {
	onSelectColor: (val: string) => void;
	selectedColor: string | undefined;
}

const colors = [
	{ id: 1, color: 'var(--color-default)' },
	{ id: 2, color: 'var(--color-mud)' },
	{ id: 3, color: '#000000' },
	{ id: 4, color: 'var(--color-nude)' },
	{ id: 5, color: 'var(--color-tomato)' },
	{ id: 6, color: 'var(--color-sunflower)' },
	{ id: 7, color: 'var(--color-sunflower-dark)' },
	{ id: 8, color: 'var(--color-forest)' },
	{ id: 9, color: 'var(--color-forest-dark)' },
	{ id: 10, color: 'var(--color-primary)' },
	{ id: 11, color: 'var(--color-primary-dark)' },
	{ id: 12, color: 'var(--color-secondary)' },
	{ id: 13, color: 'var(--color-secondary-dark)' },
];

export const ColorPalette = ({
	onSelectColor,
	selectedColor,
}: ColorPaletteProp) => {
	const selectedColorFromPalette = (color: string) => {
		if (!selectedColor && !color) return;
		return selectedColor === color;
	};

	return (
		<div className={Styles.colorPalette}>
			{colors.map(({ color, id }) => (
				<button
					key={id}
					className={`${Styles.colorButton} ${classNames({
						[Styles.selectedColor]: selectedColorFromPalette(color),
					})}`}
					style={{ backgroundColor: color }}
					onClick={() => onSelectColor(color)}
				></button>
			))}
		</div>
	);
};
