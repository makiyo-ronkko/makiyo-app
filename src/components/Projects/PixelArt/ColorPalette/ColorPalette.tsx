import React from 'react';
import Styles from './ColorPalette.module.css';
import { classNames } from '../../../../utils/classNames';

interface ColorPaletteProp {
	onSelectColor: (val: string) => void;
	selectedColor: string | undefined;
}

const colors = [
	{ id: 1, color: 'var(--color-default)' },
	{ id: 2, color: 'var(--color-ivory)' },
	{ id: 3, color: 'var(--color-soil)' },
	{ id: 4, color: 'var(--color-natural)' },
	{ id: 5, color: 'var(--color-salmon)' },
	{ id: 6, color: 'var(--color-nude)' },
	{ id: 7, color: 'var(--color-fairy)' },
	{ id: 8, color: 'var(--color-lavender)' },
	{ id: 9, color: 'var(--color-tomato)' },
	{ id: 10, color: 'var(--color-fire)' },
	{ id: 11, color: 'var(--color-wheat)' },
	{ id: 12, color: 'var(--color-custard)' },
	{ id: 13, color: 'var(--color-sunflower)' },
	{ id: 14, color: 'var(--color-sunflower-dark)' },
	{ id: 15, color: 'var(--color-mint)' },
	{ id: 16, color: 'var(--color-forest)' },
	{ id: 17, color: 'var(--color-forest-dark)' },
	{ id: 18, color: 'var(--color-turquoise)' },
	{ id: 19, color: 'var(--color-olive)' },
	{ id: 20, color: 'var(--color-primary)' },
	{ id: 21, color: 'var(--color-primary-dark)' },
	{ id: 22, color: 'var(--color-secondary)' },
	{ id: 23, color: 'var(--color-cobalt)' },
	{ id: 24, color: 'var(--color-navy)' },
	{ id: 25, color: 'var(--color-autumn)' },
	{ id: 26, color: 'var(--color-mustard)' },
	{ id: 27, color: 'var(--color-persimmon)' },
	{ id: 28, color: 'var(--color-squrrel)' },
	{ id: 29, color: 'var(--color-chestnut)' },
	{ id: 30, color: 'var(--color-mud)' },
	{ id: 31, color: 'var(--color-night)' },
	{ id: 32, color: '#000000' },
	{ id: 33, color: '#ffffff' },
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
