import React, { RefObject } from 'react';
import style from './FloatingButton.module.css';
import { IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

export interface FloatingButtonProps {
	contentRef: RefObject<HTMLDivElement>;
	isButtonVisible: boolean;
	setIsButtonVisible: (value: boolean) => void;
}

export const FloatingButton = ({
	contentRef,
	isButtonVisible,
	setIsButtonVisible,
}: FloatingButtonProps) => {
	const handleScrollToTop = () => {
		if (!contentRef.current) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setIsButtonVisible(false);
	};

	return (
		<IconButton
			aria-label='scroll to top'
			size='medium'
			sx={{
				position: 'fixed',
				visibility: isButtonVisible ? 'visible' : 'hidden',
			}}
			className={style.floatingButton}
			onClick={handleScrollToTop}
		>
			<FontAwesomeIcon icon={faArrowAltCircleUp} />
		</IconButton>
	);
};
