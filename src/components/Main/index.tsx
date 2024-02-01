import React from 'react'
import styles from './MainStyle.module.css'
import { Header } from './Header'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Body } from './Body'
import { useTheme } from '../hooks/ThemeContext'
import { SwitchButton } from '../SwitchButton/SwitchButton'

export const MainStyle = () => {
  const { isDarkMode, handleToggleTheme } = useTheme()

  return (
    <>
      <div className={`${isDarkMode ? styles.darkGradient : styles.gradient1} ${styles.section}`}>
        <Header isDarkMode={isDarkMode} />
      </div>
      <div className={`${styles.section2} ${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}>
        <Body />
      </div>
      <div
        className={`${isDarkMode ? styles.darkGradient : styles.gradient2} ${
          styles.section
        } ${styles.container} ${styles.paddingXXL}`}
      >
        <Contact isDarkMode={isDarkMode} />
      </div>
      <div className={`${styles.section3} ${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}>
        <Footer isDarkMode={isDarkMode} />
      </div>
      <SwitchButton handleClick={handleToggleTheme} active={isDarkMode} />
    </>
  )
}
