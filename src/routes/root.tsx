import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '../themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { App } from '../components/App/App';

export const Root = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <App />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
};
