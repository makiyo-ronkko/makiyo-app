import React, { useState } from 'react';
import styles from './Login.module.css';
import {
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Typography,
	FormHelperText,
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
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [isUsernameValid, setIsUsernameValid] = useState<boolean>();
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>();

	const validateInput = (name: string, value: string) => {
		switch (name) {
			case 'username':
				if (value === '') {
					return setIsUsernameValid(false);
				} else return setIsUsernameValid(true);

			case 'password':
				if (value === '') {
					return setIsPasswordValid(false);
				} else return setIsPasswordValid(true);
		}
	};

	const handleValidate = () => {
		if (formData.username === '') {
			setIsUsernameValid(false);
		} else setIsUsernameValid(true);

		if (formData.password === '') {
			setIsPasswordValid(false);
		} else setIsPasswordValid(true);
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const { setProgress, setNotification, setShowAlert } = useAppContext();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		validateInput(name, value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		handleValidate();

		if (!isUsernameValid || !isPasswordValid) return;

		setProgress('loading');

		const timeoutId = setTimeout(() => {
			setProgress('loginSuccess');
			setNotification('Login successful!');
			setShowAlert(true);
		}, 1000);

		return () => clearTimeout(timeoutId);
	};

	const handleSingupPage = () => {
		setProgress('signup');
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form} id='login-form'>
			<div className={styles.wrapper}>
				<div className={styles.graphic}>
					<Typography padding={4} variant='h3' className={styles.header}>
						LOG IN
					</Typography>
				</div>
				<div className={styles.inputField}>
					<FormControl
						className={styles.textField}
						variant='outlined'
						error={isUsernameValid === false}
					>
						<InputLabel required htmlFor='username'>
							Username
						</InputLabel>
						<OutlinedInput
							id='username'
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
						<FormHelperText id='component-error-text'>
							{isUsernameValid === false ? 'Please fill' : ' '}
						</FormHelperText>
					</FormControl>
					<FormControl
						className={styles.textField}
						variant='outlined'
						error={isPasswordValid === false}
					>
						<InputLabel required htmlFor='password'>
							Password
						</InputLabel>
						<OutlinedInput
							id='password'
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
							autoComplete='on'
						/>
						<FormHelperText id='component-error-text'>
							{isPasswordValid === false ? 'Please fill' : ' '}
						</FormHelperText>
					</FormControl>
					<Button
						type='submit'
						variant='contained'
						className={styles.button}
						disableRipple
						sx={{ backgroundColor: 'var(--color-sky)' }}
					>
						Log in
					</Button>
					<div>
						<Typography variant='button'>
							Don't have an account yet?
							<Button
								variant='text'
								disableRipple
								className={styles.signupButton}
								onClick={handleSingupPage}
							>
								Sign up
							</Button>
						</Typography>
					</div>
				</div>
			</div>
		</form>
	);
};
