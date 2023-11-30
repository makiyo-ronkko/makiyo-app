import React from 'react';
import Styles from './LoginPage.module.css';
import { Box } from './Box/Box';
import { Signup } from './Signup/Signup';
import { Login } from './Login/Login';
import { AppProvider } from './AppContext';

export const LoginPage = () => {
	return (
		<AppProvider>
			<div className={Styles.wrapper}>
				<Box>
					<Login />
				</Box>
			</div>
		</AppProvider>
	);
};
