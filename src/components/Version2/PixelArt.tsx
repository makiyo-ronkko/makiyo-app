import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import Styles from './PixelArt.module.css';
import { Button } from '@mui/material';
import { PixelArtCanvas } from './PixelArtCanvas/PixelArtCanvas';
import { ColorPalette } from './ColorPalette/ColorPalette';

const ID = 'pixel-canvas';

const PixelArtApp = () => {
	const [selectedColor, setSelectedColor] = useState<string>();

	const saveAsPNG = async () => {
		const canvas = document.getElementById(ID);
		if (!canvas) return;

		const screenshot = await html2canvas(canvas);
		screenshot.toBlob(function (blob) {
			saveAs(blob, 'pixel-art.png');
		});
	};

	return (
		<div className={Styles.wrapper}>
			<ColorPalette onSelectColor={setSelectedColor} />
			<PixelArtCanvas id={ID} selectedColor={selectedColor} />
			<Button variant='outlined' className={Styles.button} onClick={saveAsPNG}>
				Save as PNG
			</Button>
		</div>
	);
};

export default PixelArtApp;
