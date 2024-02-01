import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@mui/material'
import styles from './ECLayout.module.css'
import { Header } from './Header'
import { ScrollToTop } from '../../../helpers/scroll'
import { Main } from './Main'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Banner } from './Banner'
import { useTheme } from '../../hooks/ThemeContext'

export const ECLayout = () => {
  const { isDarkMode } = useTheme()

  return (
    <div className={isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}>
      <ScrollToTop />
      <div className={styles.button}>
        <Link
          to={'/'}
          className={`${styles.backButton} ${isDarkMode ? styles.darkModeButton : styles.defaultModeButton}`}
        >
          Back
        </Link>
      </div>
      <Container>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
        <Banner isDarkMode={isDarkMode} />
        <Nav isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </Container>
    </div>
  )
}
