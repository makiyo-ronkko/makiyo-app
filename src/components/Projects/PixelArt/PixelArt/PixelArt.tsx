import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import Styles from './PixelArt.module.css';
import { Button, Grid, IconButton } from '@mui/material';
import { PixelArtCanvas } from '../PixelArtCanvas/PixelArtCanvas';
import { ColorPalette } from '../ColorPalette/ColorPalette';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const ID = 'pixel-canvas';

const PixelArtApp = () => {
	const [pixels, setPixels] = useState<string[]>(Array(256).fill('#ffffff')); // 16x16 grid with initial white pixels
	const [pixelHistory, setPixelHistory] = useState<string[][]>([pixels]);
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

	const handleClear = () => {
		setPixels(Array(256).fill('#ffffff'));
		setPixelHistory([pixels]);
	};

	const handleUndo = () => {
		if (pixelHistory.length > 1) {
			const newHistory = [...pixelHistory];
			newHistory.pop();
			setPixelHistory(newHistory);
			setPixels(newHistory[newHistory.length - 1]);
		}
	};

	return (
		<div className={Styles.wrapper}>
			<ColorPalette
				onSelectColor={setSelectedColor}
				selectedColor={selectedColor}
			/>
			<PixelArtCanvas
				id={ID}
				selectedColor={selectedColor}
				setPixels={setPixels}
				pixels={pixels}
				pixelHistory={pixelHistory}
				setPixelHistory={setPixelHistory}
			/>
			<Grid
				container
				sx={{ justifyContent: 'center', gap: '1rem', maxWidth: '80vw' }}
			>
				<Grid
					container
					sx={{
						gap: '2rem',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<IconButton
						aria-label='undo'
						size='small'
						color='default'
						onClick={handleUndo}
						sx={{ width: 'var(--element-xxs)', height: 'var(--element-xxs)' }}
					>
						<FontAwesomeIcon
							icon={faArrowRotateLeft}
							color='var(--color-mud)'
						/>
					</IconButton>
					<IconButton
						aria-label='undo'
						size='small'
						color='default'
						onClick={handleClear}
						sx={{ width: 'var(--element-xxs)', height: 'var(--element-xxs)' }}
					>
						<FontAwesomeIcon icon={faTrashCan} color='var(--color-mud)' />
					</IconButton>
				</Grid>
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
			</Grid>
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
