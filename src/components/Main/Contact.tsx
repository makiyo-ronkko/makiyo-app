import React from 'react'
import styles from './MainStyle.module.css'

interface ContactProp {
  isDarkMode: boolean
}

export const Contact = ({ isDarkMode }: ContactProp) => {
  return (
    <>
      <h3 className={`${styles.contact} ${isDarkMode ? styles.darkModeColor : styles.contactDefaultModeColor}`}>
        Contact
      </h3>
      <div className={styles.socialMedia}>
        <a href="//linkedin.com/in/makiyo-ronkko " target="_blank" rel="noopener noreferrer">
          <i className={`fab fa-linkedin fa-2x ${styles.fontawesome}`}></i>
        </a>
        <a href="//github.com/makiyo-ronkko" target="_blank" rel="noopener noreferrer">
          <i className={`fab fa-github fa-2x ${styles.fontawesome}`}></i>
        </a>
      </div>
    </>
  )
}
