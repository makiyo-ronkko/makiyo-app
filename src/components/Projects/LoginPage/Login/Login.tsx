import React, { useState, useEffect } from 'react';
import Styles from './Login.module.css';
import {
	Button,
	AlertProps,
	Alert,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Input,
	Typography,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppContext } from '../AppContext';

export const Login = () => {
	const [formData, setFormData] = useState<{
		username: string;
		password: string;
	}>({
		username: '',
		password: '',
	});
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const { setProgress, setNotification, notification } = useAppContext();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setProgress((prev: number) => prev + 1);
		setNotification('Login successful!');
		setShowAlert(true);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShowAlert(false);
		}, 10000);

		return () => clearTimeout(timeoutId);
	}, [showAlert]);

	const alertProps: AlertProps = {
		severity: 'success',
		onClose: () => setShowAlert(false),
	};

	return (
		<>
			{showAlert && (
				<Alert {...alertProps} className={Styles.alert}>
					{notification}
				</Alert>
			)}
			<form onSubmit={handleSubmit} className={Styles.form}>
				<div className={Styles.wrapper}>
					<div className={Styles.graphic}>
						<Typography padding={4} variant='h3' className={Styles.header}>
							LOGIN
						</Typography>
					</div>
					<div className={Styles.inputField}>
						<FormControl className={Styles.textField} variant='outlined'>
							<InputLabel required htmlFor='input-with-icon-adornment'>
								Username
							</InputLabel>
							<OutlinedInput
								id='input-with-icon-adornment'
								startAdornment={
									<InputAdornment position='start'>
										<AccountCircle />
									</InputAdornment>
								}
								label='username'
								name='username'
								value={formData.username}
								onChange={handleInputChange}
							/>
						</FormControl>
						<FormControl className={Styles.textField} variant='outlined'>
							<InputLabel required htmlFor='outlined-adornment-password'>
								Password
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								type={showPassword ? 'text' : 'password'}
								startAdornment={
									<InputAdornment position='start'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge='end'
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label='password'
								name='password'
								value={formData.password}
								onChange={handleInputChange}
							/>
						</FormControl>
						<Button
							type='submit'
							variant='contained'
							className={Styles.button}
							disableRipple
							sx={{ backgroundColor: 'var(--color-sky)' }}
						>
							Login
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};
