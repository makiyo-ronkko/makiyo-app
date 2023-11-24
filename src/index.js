import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import { ThemeProvider } from './components/hooks/ThemeContext';
import { Root } from './routes/root.tsx';
import { ErrorPage } from './routes/error.tsx';
import { TodoApp } from './components/Projects/Project1/index.tsx';
import { PixelArt } from './components/Projects/PixelArt/index.tsx';
import { SingleColumnLayout } from './components/Projects/SingleColumnLayout';
import { FullScreenLayout } from './components/Projects/FullScreenLayout';
import { ECLayout } from './components/Projects/ECLayout';
import { MultiColumnLayout } from './components/Projects/MultiColumnLayout';
import { CompanyProject } from './components/Projects/CompanyProject/index.tsx';

const AppWrapper = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root tab='home' />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/project',
			element: <SingleColumnLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/project-2',
			element: <FullScreenLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/project-3',
			element: <ECLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/project-4',
			element: <MultiColumnLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/project-5',
			element: <PixelArt />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/project-6',
			element: <TodoApp />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/company-project',
			element: <CompanyProject />,
			errorElement: <ErrorPage />,
		},
	]);
	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWrapper />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
