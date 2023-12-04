import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './Loading.module.css';

export const Loading = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.circularProgressWrapper}>
					<CircularProgress />
				</div>
			</div>
		</div>
	);
};
