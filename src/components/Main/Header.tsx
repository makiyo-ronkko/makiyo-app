import React, { useState } from 'react';
import styles from './MainStyle.module.css';

interface HeaderProp {
  isDarkMode: boolean;
}

export const Header = ({ isDarkMode }: HeaderProp) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className={styles.nameContainer}>
      <p
        className={`${styles.bubbleSpeech} ${
          isDarkMode ? styles.darkModeBubbleSpeech : styles.defaultModeBubbleSpeech
        }`}
      >
        {isMouseOver ? 'Please scroll down！' : 'Hello! Moi! こんにちは！'}
      </p>
      <img
        src="/makiyo.png"
        alt="makiyo"
        className={styles.image}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <span className={styles.name}>Makiyo Rönkkö</span>
    </div>
  );
};
