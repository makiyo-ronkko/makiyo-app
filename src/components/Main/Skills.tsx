import React from 'react';
import styles from './MainStyle.module.css';

export const Skills = () => {
  return (
    <div className={`${styles.flexCentered} ${styles.skillWrapper}`}>
      <div>
        <p className={styles.subTitle}>About me</p>
        <p className={`${styles.summary} ${styles.fontStyleItalic}`}>
          &quot;Frontend Developer Focused on Creating Modern Applications: Enhancing User Experience, Embracing
          Contemporary Design, and Delivering Value.&quot;
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={`${styles.flexCentered} ${styles.card}`}>
          <p className={`${styles.projectTitle} ${styles.textLetterSpace}`}>
            <b>Frontend</b>
          </p>
          <p>Javascript Typescript React Redux HTML5 CSS3 CSS Frameworks (MUI, Bootstrap)</p>
        </div>
        <div className={`${styles.flexCentered} ${styles.card}`}>
          <p className={`${styles.projectTitle} ${styles.textLetterSpace}`}>
            <b>Backend</b>
          </p>
          <p>Node.js REST API</p>
        </div>
        <div className={`${styles.flexCentered} ${styles.card}`}>
          <p className={`${styles.projectTitle} ${styles.textLetterSpace}`}>
            <b>Others</b>
          </p>
          <p>Figma Github Gitlab Responsive Design</p>
        </div>
      </div>
    </div>
  );
};
