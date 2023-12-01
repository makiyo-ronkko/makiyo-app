import React, { useState } from 'react';
import Styles from './Login.module.css';
import {
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
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
	const [showPassword, setShowPassword] = useState<boolean>(false);

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
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

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
		<form onSubmit={handleSubmit} className={Styles.form}>
			<div className={Styles.wrapper}>
				<div className={Styles.graphic}>
					<Typography padding={4} variant='h3' className={Styles.header}>
						LOG IN
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
							autoComplete='on'
						/>
					</FormControl>
					<Button
						type='submit'
						variant='contained'
						className={Styles.button}
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
								className={Styles.signupButton}
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
