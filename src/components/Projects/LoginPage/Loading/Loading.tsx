import React from 'react';
import { CircularProgress } from '@mui/material';
import Styles from './Loading.module.css';

export const Loading = () => {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.container}>
				<div className={Styles.circularProgressWrapper}>
					<CircularProgress />
				</div>
			</div>
		</div>
	);
};
