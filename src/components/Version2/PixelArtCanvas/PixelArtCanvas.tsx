import React, { useState } from 'react';
import Styles from './PixelArtCanvas.module.css';

interface PixelArtCanvasProps {
	selectedColor: string | undefined;
	id: string;
}

export const PixelArtCanvas = ({ selectedColor, id }: PixelArtCanvasProps) => {
	const [pixels, setPixels] = useState(Array(144).fill('#ffffff')); // 8x8 grid with initial white pixels
	const [isDrawing, setIsDrawing] = useState<boolean>(false);

	const handlePixelClick = (index: number) => {
		const newPixels = [...pixels];
		newPixels[index] = selectedColor;
		setPixels(newPixels);
	};

	const handlePixelDrag = (index: number) => {
		if (isDrawing) {
			const newPixels = [...pixels];
			newPixels[index] = selectedColor;
			setPixels(newPixels);
		}
	};

	const handleMouseDown = (index: number) => {
		setIsDrawing(true);
		handlePixelDrag(index);
	};

	const handleMouseUp = () => {
		setIsDrawing(false);
	};

	return (
		<div className={Styles.pixelCanvas} id={id}>
			{pixels.map((color, index) => (
				<div
					key={index}
					className={Styles.pixel}
					style={{ backgroundColor: color }}
					onClick={() => handlePixelClick(index)}
					onMouseDown={() => handleMouseDown(index)}
					onMouseEnter={() => handlePixelDrag(index)}
					onMouseUp={handleMouseUp}
				></div>
			))}
		</div>
	);
};
