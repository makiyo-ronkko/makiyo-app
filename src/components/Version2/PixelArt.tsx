import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import Styles from './PixelArt.module.css';
import { Button } from '@mui/material';
import { PixelArtCanvas } from './PixelArtCanvas/PixelArtCanvas';
import { ColorPalette } from './ColorPalette/ColorPalette';
import ConfirmationModal from './ConfirmationModal/ConfirmationModal';

const ID = 'pixel-canvas';

const PixelArtApp = () => {
	const [selectedColor, setSelectedColor] = useState<string>();
	const [confirmationModalOpen, setConfirmationModalOpen] =
		useState<boolean>(false);

	const handleModal = () => {
		setConfirmationModalOpen(true);
	};

	const handleModalClose = () => {
		setConfirmationModalOpen(false);
	};

	const handleSaveFile = () => {
		if (confirmationModalOpen) {
			saveAsPNG();
		}
		handleModalClose();
	};

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
			<ColorPalette
				onSelectColor={setSelectedColor}
				selectedColor={selectedColor}
			/>
			<PixelArtCanvas id={ID} selectedColor={selectedColor} />
			<Button
				variant='contained'
				className={Styles.button}
				onClick={handleModal}
				sx={{
					color: 'var(--color-default)',
					backgroundColor: 'var(--color-primary-dark)',
				}}
			>
				Save as PNG
			</Button>
			{confirmationModalOpen && (
				<ConfirmationModal
					open={confirmationModalOpen}
					handleClose={handleModalClose}
					handleConfirm={handleSaveFile}
				/>
			)}
		</div>
	);
};

export default PixelArtApp;
