import React from 'react';
import styles from './MainStyle.module.css';
import { Link } from 'react-router-dom';

export const CompanyProject = () => {
  return (
    <div className={styles.projectWrapper}>
      <p className={styles.subTitle}>Company project</p>
      <div className={styles.projectContainer}>
        <Link to="company-project" className={styles.link}>
          <div className={`${styles.flexCentered} ${styles.project}`}>
            <button className={styles.projectButton}>
              <b className={styles.projectTitle}>Digital Twin for Smart Office</b>
            </button>
          </div>
        </Link>
        <a href="https://makiyo-storybook.vercel.app/" className={styles.link} target="_blank" rel="noreferrer">
          <div className={`${styles.flexCentered} ${styles.project}`}>
            <button className={styles.projectButton}>
              <b className={styles.projectTitle}>Storybook Example</b>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};
