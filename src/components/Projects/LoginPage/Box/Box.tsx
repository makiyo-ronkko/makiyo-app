import React from 'react'
import styles from './Box.module.css'

interface BoxProps {
  children: React.ReactNode
}

export const Box = ({ children }: BoxProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.block} ${styles.graphic}`}></div>
        <div className={`${styles.block} ${styles.form}`}>{children}</div>
      </div>
    </div>
  )
}
