import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Todo.module.css';
import { TodoList } from './TodoList/TodoList.tsx';
import { useTheme } from '../../hooks/ThemeContext';

export const TodoApp = () => {
	const { isDarkMode } = useTheme();
	return (
		<div
			className={`${Styles.wrapper} ${
				isDarkMode ? Styles.darkModeBackground : Styles.defaultModeBackground
			}`}
		>
			<div className={Styles.button}>
				<Link to={'/'} className={Styles.backButton}>
					BACK
				</Link>
			</div>
			<TodoList />
		</div>
	);
};
