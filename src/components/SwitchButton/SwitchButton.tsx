import React from 'react';
import styles from './SwitchButton.module.css';
import { classNames } from '../../utils/classNames';

interface SwitchButtonProps {
  handleClick: () => void;
  active: boolean;
}

export const SwitchButton = ({ handleClick, active }: SwitchButtonProps) => {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${classNames({
          [styles.active]: active,
        })}`}
        onClick={handleClick}
      >
        <div
          className={`${styles.circle} ${classNames({
            [styles.circleActive]: active,
          })}`}
        ></div>
      </button>
    </div>
  );
};
