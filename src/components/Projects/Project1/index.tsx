import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Todo.module.css';
import { TodoList } from './TodoList/TodoList';
import { useTheme } from '../../hooks/ThemeContext';

export const TodoApp = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${styles.wrapper} ${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}>
      <div className={styles.button}>
        <Link to={'/'} className={styles.backButton}>
          BACK
        </Link>
      </div>
      <TodoList />
    </div>
  );
};
