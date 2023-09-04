import React, { useState } from 'react';
import Styles from './TodoList.module.css';
import { NewTodoForm } from '../NewTodoForm/NewTodoForm.tsx';
import { Todo } from '../Todo/Todo.tsx';

export type Todo = {
	task: string;
	id: string;
	isCompleted: boolean;
};

export const TodoList = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const create = (newTodo: Todo) => {
		setTodos([...todos, newTodo]);
	};

	const remove = (id: string) => {
		setTodos(todos.filter((t) => t.id !== id));
	};

	const update = (id: string, updatedTask: Todo[]) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					task: updatedTask,
				};
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const toggleCompletion = (id: string) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					isCompleted: !todo.isCompleted,
				};
			}
			return todo;
		});

		setTodos(updatedTodos);
	};

	const renderTodos = () =>
		todos.map((todo) => {
			return (
				<Todo
					id={todo.id}
					key={todo.id}
					task={todo.task}
					isCompleted={todo.isCompleted}
					removeTodo={remove}
					updateTodo={update}
					toggleTodo={toggleCompletion}
				/>
			);
		});

	return (
		<div className={Styles.todoList}>
			<h1>
				TODO LIST APP
				<span>Create Your Todo List</span>
			</h1>
			<ul>{renderTodos()}</ul>
			<NewTodoForm createTodo={create} />
		</div>
	);
};
