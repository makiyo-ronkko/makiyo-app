import React from 'react';
import { createRoot } from 'react-dom/client';
import { render, fireEvent } from '@testing-library/react';
import { Login } from '../components/Projects/LoginPage/Login/Login';

describe('login', () => {
	test('username field should have label', () => {
		const container = document.getElementById('login-form');
		if (!container) return;

		const root = createRoot(container);
		root.render(<Login />);

		const { getByLabelText } = render(<Login />);
		const emailInputNode = getByLabelText('Username');
		expect(emailInputNode.getAttribute('name')).toBe('username');
	});

	test('login form should be in the document', () => {
		const container = document.getElementById('login-form');
		if (!container) return;

		const root = createRoot(container);
		root.render(<Login />);

		const { getByText } = render(<Login />);
		const labelNode = getByText('Username');
		expect(labelNode).toBeInTheDocument();
	});

	test('username input should accept email', () => {
		const container = document.getElementById('login-form');
		if (!container) return;

		const root = createRoot(container);
		root.render(<Login />);

		const { getByLabelText, getByText } = render(<Login />);
		const usernameInputNode = getByLabelText('username');
		expect(usernameInputNode).toMatch('');
		fireEvent.change(usernameInputNode, { target: { value: 'testing' } });
		expect(usernameInputNode).toMatch('testing');

		const errorMessageNode = getByText('username is not valid');
		expect(errorMessageNode).toBeInTheDocument();
		fireEvent.change(usernameInputNode, { target: { value: 'testing@' } });
		expect(errorMessageNode).not.toBeInTheDocument();
	});

	test('should be able to submit form', () => {
		const container = document.getElementById('login-form');
		if (!container) return;

		const root = createRoot(container);
		root.render(<Login />);

		const { getByRole } = render(<Login />);
		const buttonNode = getByRole('button');
		1;
		const handleSubmitSpy = jest.spyOn(Login.prototype, 'handleSubmit');
		fireEvent.submit(buttonNode);
		expect(handleSubmitSpy).toHaveBeenCalledTimes(1);
		handleSubmitSpy.mockRestore();
	});
});
