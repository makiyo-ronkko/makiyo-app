import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Project.module.css';
import { TodoList } from './TodoList/TodoList.tsx';

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
