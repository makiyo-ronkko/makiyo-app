import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CompanyProject.module.css'
import modeStyles from '../../Main/MainStyle.module.css'
import { CircularProgress } from '@mui/material'
import { ScrollToTop } from '../../../helpers/scroll'
import { useTheme } from '../../hooks/ThemeContext'

export const CompanyProject = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const { isDarkMode } = useTheme()

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  useEffect(() => {
    setImageLoaded(true)

    return () => setImageLoaded(false)
  }, [])

  return (
    <div
      className={`${styles.companyProjectWrapper} ${
        isDarkMode ? modeStyles.darkModeBackground : modeStyles.defaultModeBackground
      }`}
    >
      <ScrollToTop />
      <div className={styles.button}>
        <Link
          to={'/'}
          className={`${styles.backButton} ${isDarkMode ? styles.darkModeButton : styles.defaultModeButton}`}
        >
          Back
        </Link>
      </div>
      <p className={styles.header}>
        <a
          href="https://haltian.com/solutions/empathic-building-for-offices/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.aTag}
        >
          Empathic Building for Offices
        </a>
      </p>
      {!imageLoaded ? (
        <CircularProgress sx={{ color: 'var(--color-cloud)' }} />
      ) : (
        <a
          href="https://haltian.com/solutions/empathic-building-for-offices/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.aTag}
        >
          <img
            src="/assets/screenshots/empathic-building-for-offices.png"
            alt="screenshot"
            className={styles.screenshot}
            onLoad={handleImageLoad}
          />
        </a>
      )}
      <div className={styles.notepadWrapper}>
        <div className={styles.notepad}>
          <div className={styles.top} />
          <div className={styles.paper}>
            <div className={styles.timeline}>
              <p className={`${styles.subHeader} ${styles.letterSpacing}`}>
                <b>Project Kickoff:</b>
              </p>
              <p className={styles.indentation}>October 2021</p>
              <p className={styles.subHeader}>
                <b>Development Phases:</b>
              </p>
              <p className={styles.indentation}>Created components in the library</p>
              <p className={styles.indentation}>
                <a
                  href="https://design.empathicbuilding.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.hrefColor}
                >
                  design.empathicbuilding.com
                </a>
              </p>
              <p className={styles.indentation}>Integrated customized components into the office application</p>
              <p className={styles.indentation}>Developed the complete application</p>
              <p className={styles.subHeader}>
                <b>Launch Date:</b>
              </p>
              <p className={styles.indentation}>January 2023</p>
              <p className={styles.indentation}>
                <a
                  href=" https://office.empathicbuilding.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.hrefColor}
                >
                  office.empathicbuilding.com
                </a>
              </p>
              <p className={styles.subHeader}>
                <b>Technologies:</b>
              </p>
              <p className={styles.indentation}>Javascript, Typescript, HTML5, CSS3, React, MUI</p>
            </div>
          </div>
        </div>
        <div className={styles.notepad}>
          <div className={styles.top} />
          <div className={styles.paper}>
            <p>
              Responsible for developing Empathic Building for Offices with one lead developer, two frontend developers,
              one UI/UX desginer and one graphic designer and collaboration with Dead Set Bit developers.
            </p>
            <br />
            <p>
              In a nutshell, the project involved component library creation, integration into the office application,
              and successful application development, culminating in a successful launch in January 2023.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
