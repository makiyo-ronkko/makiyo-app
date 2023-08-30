import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { TodoApp } from './components/Project1/index.tsx';
import { SingleColumnLayout } from './components/Project2/index.tsx';

import './index.css';
import { Root } from './routes/root.tsx';
import { ErrorPage } from './routes/error.tsx';

const container = document.getElementById('root');
const root = createRoot(container);

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
		element: <TodoApp />,
		errorElement: <ErrorPage />,
	},
]);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
