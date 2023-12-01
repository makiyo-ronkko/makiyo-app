import React, { useEffect, useMemo } from 'react';
import { AlertProps, Alert } from '@mui/material';
import Styles from './MainPage.module.css';
import { Box } from '../Box/Box';
import { Login } from '../Login/Login';
import { LoginSuccessPage } from './LoginSuccessPage';
import { useAppContext } from '../AppContext';
import { Signup } from '../Signup/Signup';
import { SignupSuccessPage } from './SignupSuccessPage';
import { Loading } from '../Loading/Loading';

export const LandingPage = () => {
	const { progress, showAlert, setShowAlert, notification } = useAppContext();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowAlert(false);
		}, 10000);

		return () => clearTimeout(timeoutId);
	}, [showAlert, setShowAlert]);

	const alertProps: AlertProps = {
		severity: 'success',
		onClose: () => setShowAlert(false),
	};

	const renderPage = useMemo(() => {
		switch (progress) {
			case 'login':
				return (
					<Box>
						<Login />
					</Box>
				);
			case 'loginSuccess':
				return <LoginSuccessPage />;
			case 'signup':
				return (
					<Box>
						<Signup />
					</Box>
				);
			case 'signupSuccess':
				return <SignupSuccessPage />;
			default:
				return <Loading />;
		}
	}, [progress]);

	return (
		<>
			{showAlert && (
				<Alert {...alertProps} className={Styles.alert}>
					{notification}
				</Alert>
			)}
			{renderPage}
		</>
	);
};
