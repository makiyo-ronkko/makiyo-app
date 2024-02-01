import React from 'react';
import { Grid, Typography, Paper, Divider, Box } from '@mui/material';

import styles from './SingleColumnLayout.module.css';
import { Header } from './Header';
import { ScrollToTop } from '../../../helpers/scroll';
import { useTheme } from '../../hooks/ThemeContext';

export const SingleColumnLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <ScrollToTop />
      <Header isDarkMode={isDarkMode} />
      <Grid item md={8} component={Paper} elevation={0}>
        <main className={styles.main}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            minHeight="38rem"
            padding="0 2rem"
          >
            <Typography variant="h2" color="var(--color-mud)" textAlign="center">
              Single Column Layout
            </Typography>
          </Box>
        </main>
      </Grid>
      <Grid item>
        <nav className={`${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            minHeight="600px"
            padding="0 2rem"
          >
            <Typography variant="h2" textAlign="center">
              Navigation
            </Typography>
          </Box>
        </nav>
      </Grid>
      <Divider />
      <Grid item>
        <footer className={`${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}>
          <Typography variant="body2" padding="2rem" textAlign="center">
            © {new Date().getFullYear()} My App. All rights reserved.
          </Typography>
        </footer>
      </Grid>
    </div>
  );
};
