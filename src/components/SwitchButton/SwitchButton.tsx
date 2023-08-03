import React from 'react';
import Styles from './SwitchButton.module.css';
import { classNames } from '../../utils/classNames';

interface SwitchButtonProps {
	handleClick: () => void;
	active: boolean;
}

export const SwitchButton = ({ handleClick, active }: SwitchButtonProps) => {
	return (
		<div className={Styles.container}>
			<button
				className={`${Styles.button} ${classNames({
					[Styles.active]: active,
				})}`}
				onClick={handleClick}
			>
				<span
					className={`${Styles.circle} ${classNames({
						[Styles.circleActive]: active,
					})}`}
				></span>
			</button>
		</div>
	);
};
