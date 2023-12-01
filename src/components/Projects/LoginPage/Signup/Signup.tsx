import React, { useState } from 'react';
import Styles from './Signup.module.css';
import {
	Button,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Typography,
} from '@mui/material';
import Email from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppContext } from '../AppContext';

export const Signup = () => {
	const [formData, setFormData] = useState<{
		username: string;
		email: string;
		password: string;
	}>({
		username: '',
		email: '',
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
			setProgress('signupSuccess');
			setNotification('Signup successful!');
			setShowAlert(true);
		}, 1000);

		return () => clearTimeout(timeoutId);
	};

	const handleLoginPage = () => {
		setProgress('login');
	};

	return (
		<form onSubmit={handleSubmit} className={Styles.form}>
			<div className={Styles.wrapper}>
				<div className={Styles.graphic}>
					<Typography padding={4} variant='h3' className={Styles.header}>
						Sign up
					</Typography>
				</div>
				<div className={Styles.inputField}>
					<FormControl className={Styles.textField} variant='outlined'>
						<InputLabel required htmlFor='input-with-icon-username'>
							Username
						</InputLabel>
						<OutlinedInput
							id='input-with-icon-username'
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
						<InputLabel required htmlFor='input-with-icon-email'>
							Email
						</InputLabel>
						<OutlinedInput
							id='input-with-icon-email'
							startAdornment={
								<InputAdornment position='start'>
									<Email />
								</InputAdornment>
							}
							label='email'
							name='email'
							value={formData.email}
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
						Sign up
					</Button>
					<div>
						<Typography variant='button'>
							Already have an account?
							<Button
								variant='text'
								disableRipple
								className={Styles.signupButton}
								onClick={handleLoginPage}
							>
								Log in
							</Button>
						</Typography>
					</div>
				</div>
			</div>
		</form>
	);
};
