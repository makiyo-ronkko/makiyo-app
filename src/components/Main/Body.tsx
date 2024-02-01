import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainStyle.module.css';
import { Skills } from './Skills';
import { CompanyProject } from './CompanyProject';

const PROJECTS = [
  { link: 'login-page', name: 'Login Page' },
  { link: 'chat-box', name: 'Chat Box' },
  { link: 'pixel-art', name: 'Pixel Art' },
  { link: 'todo-app', name: 'TODO App' },
  { link: 'single-column-layout', name: 'Single Column Layout' },
  { link: 'full-screen-layout', name: 'Full Screen Layout' },
  { link: 'ec-layout', name: 'E-Commerce Layout' },
  { link: 'multi-column-layout', name: 'Multi-Column Layout' },
];

export const Body = () => {
  return (
    <>
      <Skills />
      <CompanyProject />
      <div className={`${styles.projectWrapper} ${styles.paddingBottom}`}>
        <p className={styles.subTitle}>Mini Projects</p>
        <div className={styles.projectContainer}>
          {PROJECTS.map((project) => {
            return (
              <Link to={project.link} className={styles.link} key={project.link}>
                <div className={`${styles.project}`}>
                  <button className={styles.projectButton}>
                    <b className={styles.projectTitle}>{project.name}</b>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
