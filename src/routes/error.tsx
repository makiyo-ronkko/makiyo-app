import React from 'react';
import { useRouteError } from 'react-router-dom';
import styles from './route.module.css';
import { useTheme } from '../components/hooks/ThemeContext';

interface CustomError {
  statusText?: string;
  message?: string;
}

export const ErrorPage = () => {
  const { isDarkMode } = useTheme();

  const error: unknown = useRouteError();

  if (!error) {
    // Handle the case where there's no error
    return <div>No error information available.</div>;
  }

  const customError = error as CustomError;
  const errorMessage =
    typeof customError === 'object' && ('statusText' in customError || 'message' in customError)
      ? customError.statusText || customError.message
      : 'An unknown error occurred.';

  return (
    <div className={`${styles.errorWrapper} ${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}>
      <h2 className={styles.h2}>This page is under maintenance</h2>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};
