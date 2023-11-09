import React, { useState } from 'react';
import Styles from './Todo.module.css';
import { classNames } from '../../../../utils/classNames';

interface TodoProps {
	id: string;
	task: string;
	isCompleted: boolean;
	removeTodo: (id: string) => void;
	updateTodo: (id: string, todo: { task: string }) => void;
	toggleTodo: (id: string) => void;
}

export const Todo = ({
	id,
	task,
	isCompleted,
	removeTodo,
	updateTodo,
	toggleTodo,
}: TodoProps) => {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [todo, setTodo] = useState({ task });

	const handleRemove = () => {
		removeTodo(id);
	};

	const toggleForm = () => {
		setIsEditing(!isEditing);
	};

	const handleUpdate = (e: React.FormEvent) => {
		e.preventDefault();
		updateTodo(id, todo);
		setIsEditing(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo({ task: e.target.value });
	};

	const handleToggle = () => {
		toggleTodo(id);
	};

	let result;

	if (isEditing) {
		result = (
			<div className={Styles.todo}>
				<form onSubmit={handleUpdate} className={Styles.todoEditForm}>
					<input
						type='text'
						value={todo.task}
						name='task'
						onChange={handleChange}
					/>
					<div className={Styles.todoButtons}>
						<button>Save</button>
					</div>
				</form>
			</div>
		);
	} else {
		result = (
			<div className={Styles.todo}>
				<li
					className={`${classNames({ [Styles.isCompleted]: isCompleted })} ${
						Styles.todoTask
					}`}
					onClick={handleToggle}
				>
					{todo.task}
				</li>
				<div className={Styles.todoButtons}>
					<button onClick={toggleForm}>
						<i className='fas fa-pen' />
					</button>
					<button onClick={handleRemove}>
						<i className='fas fa-trash' />
					</button>
				</div>
			</div>
		);
	}
	return result;
};

export default Todo;
