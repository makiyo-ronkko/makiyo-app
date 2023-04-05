import React, { useState, FormEvent } from 'react';
import { v4 as uuid } from 'uuid';
import Styles from './NewTodoForm.module.css';

interface NewTotoFormProp {
	createTodo: ({ id: string, completed: boolean }) => void;
}

export const NewTodoForm = ({ createTodo }: NewTotoFormProp) => {
	const [newTodo, setNewTodo] = useState<{ [x: string]: string }>({
		task: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo({ [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		createTodo({ ...newTodo, id: uuid(), completed: false });
		setNewTodo({ task: '' });
	};

	return (
		<form onSubmit={handleSubmit} className={Styles.newTodoForm}>
			<label htmlFor='task'>Enter your new todo</label>
			<input
				type='text'
				placeholder='New todo'
				id='task'
				name='task'
				value={newTodo.task}
				onChange={handleChange}
			/>
			<button id='formBtn' className={Styles.button}>
				Create
			</button>
		</form>
	);
};
