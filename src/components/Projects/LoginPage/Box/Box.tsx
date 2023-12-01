import React from 'react';
import Styles from './Box.module.css';

interface BoxProps {
	children: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.container}>
				<div className={`${Styles.block} ${Styles.graphic}`}></div>
				<div className={`${Styles.block} ${Styles.form}`}>{children}</div>
			</div>
		</div>
	);
};
