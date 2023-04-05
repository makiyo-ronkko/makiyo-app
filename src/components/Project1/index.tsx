import React from 'react';
import Styles from './Project.module.css';
import { TodoList } from './TodoList/TodoList.tsx';
import { Link } from 'react-router-dom';

export const TodoApp = () => {
	return (
		<div className={Styles.wrapper}>
			<div className={Styles.button}>
				<Link to={'/'} className={Styles.backButton}>
					BACK
				</Link>
			</div>
			<TodoList />
		</div>
	);
};
