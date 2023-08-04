import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { App } from '../components/App/App.tsx';

export const Root = () => {
	return (
		<>
			<App />
			<Analytics />
		</>
	);
};
