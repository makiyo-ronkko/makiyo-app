import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

interface BannerProp {
  isDarkMode: boolean;
}

export const Banner = ({ isDarkMode }: BannerProp) => {
  return (
    <Grid>
      <Box
        sx={{
          backgroundColor: isDarkMode ? 'var(--color-night)' : '#ffffff',
          overflowY: 'hidden',
          backgroundImage: `url('/assets/e-commerce/ehimetalor-akhere-unuabona-okTqiC9Xqho-unsplash.jpg')`,
          width: '100%',
          height: 'calc(var(--content-xxl)*2)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDarkMode ? 'var(--color-navy)' : '#ffffff',
            height: 'var(--content-xxs)',
            width: '50%',
            opacity: '0.9',
          }}
        >
          <Typography
            padding={1}
            variant="overline"
            color={`${isDarkMode ? 'var(--color-default)' : 'var(--color-mud)'}`}
          >
            Yellow Collection
          </Typography>
          <Button
            color="inherit"
            sx={{
              width: 'var(--content-md)',
              height: 'var(--element-xs)',
              backgroundColor: isDarkMode ? 'var(--color-navy)' : '#ffffff',
              textDecoration: 'underline',
              fontSize: 'var(--font-size-h6)',
              color: isDarkMode ? 'var(--color-default)' : 'var(color-mud)',
              fontWeight: 'lighter',
            }}
            disableRipple
          >
            Find out more
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};
