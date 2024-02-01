import React from 'react'
import styles from './MainPage.module.css'
import { Typography, Button } from '@mui/material'
import { useAppContext } from '../AppContext'

export const SignupSuccessPage = () => {
  const { setProgress, setNotification, setShowAlert } = useAppContext()

  const handleSubmit = () => {
    setProgress('loading')

    const timeoutId = setTimeout(() => {
      setProgress('login')
      setNotification('logout successful!')
      setShowAlert(true)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }

  return (
    <div className={styles.wrapper}>
      <Typography variant="h3" className={styles.successText}>
        Welcome!
        <Button
          variant="contained"
          className={styles.button}
          onClick={handleSubmit}
          sx={{ backgroundColor: 'var(--color-sky)' }}
        >
          Log out
        </Button>
      </Typography>
    </div>
  )
}
