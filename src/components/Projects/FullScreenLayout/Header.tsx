import React from 'react'
import { Grid, AppBar, Toolbar, Typography, MenuItem } from '@mui/material'

import styles from './FullScreenLayout.module.css'

const pages = ['Home', 'About us', 'Contact']

export const Header = () => {
  return (
    <Grid item className={styles.header}>
      <AppBar position="static" style={{ backgroundColor: 'transparent' }}>
        <Toolbar>
          <Typography variant="h6" paddingRight="2rem">
            LOGO
          </Typography>
          {pages.map((page) => (
            <MenuItem onClick={() => console.log()} key={page} className={styles.menuItem}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </Grid>
  )
}
