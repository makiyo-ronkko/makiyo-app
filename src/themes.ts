import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
	palette: {
		primary: { main: '#b3d6ff' },
		secondary: { main: '#f78094' },
		mode: 'dark',
	},
	typography: {
		fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
	},
});
