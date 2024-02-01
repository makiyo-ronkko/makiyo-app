import React from 'react'
import styles from './ECLayout.module.css'
import { Grid, Typography } from '@mui/material'

interface FooterProp {
  isDarkMode: boolean
}

export const Footer = ({ isDarkMode }: FooterProp) => {
  return (
    <footer className={isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}>
      <Grid height={100}>
        <Typography
          variant="body2"
          padding="2rem"
          textAlign="center"
          sx={{
            color: isDarkMode ? 'var(--color-default)' : 'var(--color-mud)',
          }}
        >
          © {new Date().getFullYear()} My App. All rights reserved.
        </Typography>
      </Grid>
    </footer>
  )
}
