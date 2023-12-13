import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import { ThemeProvider } from './components/hooks/ThemeContext';
import { Root } from './routes/root';
import { ErrorPage } from './routes/error';
import { TodoApp } from './components/Projects/Project1';
import { PixelArt } from './components/Projects/PixelArt';
import { SingleColumnLayout } from './components/Projects/SingleColumnLayout';
import { FullScreenLayout } from './components/Projects/FullScreenLayout';
import { ECLayout } from './components/Projects/ECLayout';
import { MultiColumnLayout } from './components/Projects/MultiColumnLayout';
import { CompanyProject } from './components/Projects/CompanyProject';
import { LoginPage } from './components/Projects/LoginPage';
import { ChatBox } from './components/Projects/ChatBoxes';

const AppWrapper = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root tab='home' />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/single-column-layout',
			element: <SingleColumnLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/full-screen-layout',
			element: <FullScreenLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/ec-layout',
			element: <ECLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/multi-column-layout',
			element: <MultiColumnLayout />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/pixel-art',
			element: <PixelArt />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/todo-app',
			element: <TodoApp />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/company-project',
			element: <CompanyProject />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/login-page',
			element: <LoginPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/chat-box',
			element: <ChatBox />,
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
