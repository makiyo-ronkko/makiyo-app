import React from 'react'
import styles from './ChatBox.module.css'
import { Link } from 'react-router-dom'
import { Chat } from './Chat/Chat'
import { useTheme } from '../../hooks/ThemeContext'

export const ChatBox = () => {
  const { isDarkMode } = useTheme()
  return (
    <div className={`${styles.wrapper} ${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}>
      <div className={styles.button}>
        <Link
          to={'/'}
          className={`${styles.backButton} ${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}
        >
          Back
        </Link>
      </div>
      <Chat isDarkMode={isDarkMode} />
    </div>
  )
}
