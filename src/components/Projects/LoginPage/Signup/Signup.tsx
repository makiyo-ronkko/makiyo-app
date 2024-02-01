import React, { useState } from 'react'
import styles from './Signup.module.css'
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  FormHelperText,
} from '@mui/material'
import Email from '@mui/icons-material/Email'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useAppContext } from '../AppContext'

export const Signup = () => {
  const [formData, setFormData] = useState<{
    username: string
    email: string
    password: string
  }>({
    username: '',
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>()
  const [isEmailValid, setIsEmailValid] = useState<boolean>()
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>()

  const validateInput = (name: string, value: string) => {
    switch (name) {
      case 'username':
        if (value === '') {
          return setIsUsernameValid(false)
        } else return setIsUsernameValid(true)

      case 'email':
        if (value === '') {
          return setIsEmailValid(false)
        } else return setIsEmailValid(true)

      case 'password':
        if (value === '') {
          return setIsPasswordValid(false)
        } else return setIsPasswordValid(true)
    }
  }

  const handleValidate = () => {
    if (formData.username === '') {
      setIsUsernameValid(false)
    } else setIsUsernameValid(true)

    if (formData.email === '') {
      setIsEmailValid(false)
    } else setIsEmailValid(true)

    if (formData.password === '') {
      setIsPasswordValid(false)
    } else setIsPasswordValid(true)
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const { setProgress, setNotification, setShowAlert } = useAppContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    validateInput(name, value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleValidate()

    if (!isUsernameValid || !isEmailValid || !isPasswordValid) return

    setProgress('loading')

    const timeoutId = setTimeout(() => {
      setProgress('signupSuccess')
      setNotification('Signup successful!')
      setShowAlert(true)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }

  const handleLoginPage = () => {
    setProgress('login')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.wrapper}>
        <div className={styles.graphic}>
          <Typography padding={4} variant="h3" className={styles.header}>
            Sign up
          </Typography>
        </div>
        <div className={styles.inputField}>
          <FormControl className={styles.textField} variant="outlined" error={isUsernameValid === false}>
            <InputLabel required htmlFor="input-with-icon-username">
              Username
            </InputLabel>
            <OutlinedInput
              id="input-with-icon-username"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              label="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <FormHelperText id="component-error-text">{isUsernameValid === false ? 'Please fill' : ' '}</FormHelperText>
          </FormControl>
          <FormControl className={styles.textField} variant="outlined" error={isEmailValid === false}>
            <InputLabel required htmlFor="input-with-icon-email">
              Email
            </InputLabel>
            <OutlinedInput
              id="input-with-icon-email"
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
              label="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FormHelperText id="component-error-text">{isEmailValid === false ? 'Please fill' : ' '}</FormHelperText>
          </FormControl>
          <FormControl className={styles.textField} variant="outlined" error={isPasswordValid === false}>
            <InputLabel required htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="on"
            />
            <FormHelperText id="component-error-text">{isPasswordValid === false ? 'Please fill' : ' '}</FormHelperText>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            className={styles.button}
            disableRipple
            sx={{ backgroundColor: 'var(--color-sky)' }}
          >
            Sign up
          </Button>
          <div>
            <Typography variant="button">
              Already have an account?
              <Button
                variant="text"
                disableRipple
                className={styles.signupButton}
                onClick={handleLoginPage}
                sx={{
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent',
                    color: 'var(--color-primary-dark)',
                  },
                }}
              >
                Log in
              </Button>
            </Typography>
          </div>
        </div>
      </div>
    </form>
  )
}
